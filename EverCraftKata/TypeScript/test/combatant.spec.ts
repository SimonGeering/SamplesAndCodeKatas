import { Character, Combatant, D20 } from '../src/index';
import { Mock } from 'moq.ts';

describe('A combatant', () => {

  it('has an armour class of 10.', () => {

    const combatant: Combatant = new Character();

    expect(combatant.ArmourClass).toBe(10);
  });

  it('has 5 hit points.', () => {

    const combatant: Combatant = new Character();

    expect(combatant.HitPoints).toBe(5);
  });

  describe('can attack another combatant.', () => {

    const combatant: Combatant = new Character();
    const opponent: Combatant = new Character();

    it('Will hit on a D20 roll equal to my opponents armour class.', () => {

      const mockD20 = new Mock<D20>()
        .setup(x => x.Roll)
        .returns(() => opponent.ArmourClass).object();

      const hitAttempt = combatant.Attack(opponent, mockD20);

      expect(hitAttempt).toBe(true);
    });

    it('Will hit on a D20 roll better than my opponents armour class.', () => {

      const mockD20 = new Mock<D20>()
        .setup(x => x.Roll)
        .returns(() => opponent.ArmourClass + 1).object();

      const hitAttempt = combatant.Attack(opponent, mockD20);

      expect(hitAttempt).toBe(true);
    });

    it('Will miss on a D20 roll less than my opponents armour class.', () => {

      const mockD20 = new Mock<D20>()
        .setup(x => x.Roll)
        .returns(() => opponent.ArmourClass -1).object();

      const hitAttempt = combatant.Attack(opponent, mockD20);

      expect(hitAttempt).toBe(false);
    });
  });
});
