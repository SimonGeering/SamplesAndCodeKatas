import { Character, Combatant, AttackOutcome, D20 } from '../src/index';
import * as TypeMoq from 'typemoq';

describe('A combatant', () => {

  it('has an armour class of 10.', () => {

    const combatant: Combatant = new Character();

    expect(combatant.ArmourClass).toBe(10);
  });

  it('has 5 hit points.', () => {

    const combatant: Combatant = new Character();

    expect(combatant.HitPoints).toBe(5);
  });

  describe('can attack an opponent.', () => {

    const combatant: Combatant = new Character();
    const opponent: Combatant = new Character();

    it('They will hit on a D20 roll equal to their opponents armour class.', () => {

      const mockD20 = TypeMoq.Mock.ofType<D20>();
      mockD20.setup(x => x.Roll()).returns(() => opponent.ArmourClass);

      const hitAttempt: AttackOutcome = combatant.Attack(opponent, mockD20.object);

      expect(hitAttempt).toBe(AttackOutcome.Hit);
    });

    it('They will hit on a D20 roll better than their opponents armour class.', () => {

      const mockD20 = TypeMoq.Mock.ofType<D20>();
      mockD20.setup(x => x.Roll()).returns(() => opponent.ArmourClass + 1);

      const hitAttempt: AttackOutcome = combatant.Attack(opponent, mockD20.object);

      expect(hitAttempt).toBe(AttackOutcome.Hit);
    });

    it('Will miss on a D20 roll less than my opponents armour class.', () => {

      const mockD20 = TypeMoq.Mock.ofType<D20>();
      mockD20.setup(x => x.Roll()).returns(() => opponent.ArmourClass - 1);

      const hitAttempt = combatant.Attack(opponent, mockD20.object);

      expect(hitAttempt).toBe(AttackOutcome.Miss);
    });
  });

  describe('that has hit an opponent,', () => {

    it('will wound their opponent causing 1 point of base damage.', () => {

      const combatant: Combatant = new Character();
      const opponent: Combatant = new Character();

      const mockD20 = TypeMoq.Mock.ofType<D20>();
      mockD20.setup(x => x.Roll()).returns(() => opponent.ArmourClass + 1);

      const hitAttempt: AttackOutcome = combatant.Attack(opponent, mockD20.object);

      expect(hitAttempt).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(4);
    });

    it('will wound their opponent causing double base damage on a critical hit from a natural 20 on their to-hit roll.', () => {

      const combatant: Combatant = new Character();
      const opponent: Combatant = new Character();

      const mockD20 = TypeMoq.Mock.ofType<D20>();
      mockD20.setup(x => x.Roll()).returns(() => 20);

      const hitAttempt: AttackOutcome = combatant.Attack(opponent, mockD20.object);

      expect(hitAttempt).toBe(AttackOutcome.Critical);
      expect(opponent.HitPoints).toBe(3);
    })
  });

  describe('that has wounded their opponent,', () => {

    it('will kill them if they have zero or less hit points remaining.', () => {

      const combatant: Combatant = new Character();
      const opponent: Combatant = new Character();

      const mockD20 = TypeMoq.Mock.ofType<D20>();
      mockD20.setup(x => x.Roll()).returns(() => opponent.ArmourClass + 1);

      expect(combatant.Attack(opponent, mockD20.object)).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(4);
      expect(opponent.IsDead).toBe(false);

      expect(combatant.Attack(opponent, mockD20.object)).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(3);
      expect(opponent.IsDead).toBe(false);

      expect(combatant.Attack(opponent, mockD20.object)).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(2);
      expect(opponent.IsDead).toBe(false);

      expect(combatant.Attack(opponent, mockD20.object)).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(1);
      expect(opponent.IsDead).toBe(false);

      // Killing blow ...
      expect(combatant.Attack(opponent, mockD20.object)).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(0);
      expect(opponent.IsDead).toBe(true);

      // Overkill ...
      expect(combatant.Attack(opponent, mockD20.object)).toBe(AttackOutcome.Hit);
      expect(opponent.HitPoints).toBe(-1);
      expect(opponent.IsDead).toBe(true);
    });
  });
});
