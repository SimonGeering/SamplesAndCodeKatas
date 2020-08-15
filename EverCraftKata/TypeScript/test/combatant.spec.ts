import { ICombatant, Character } from '../src';

describe('A combatant', () => {

  it('has an armour class of 10', () => {

    const combatant: ICombatant = new Character();

    expect(combatant.ArmourClass).toBe(10);
  });

  it('has 5 hit points', () => {

    const combatant: ICombatant = new Character();

    expect(combatant.HitPoints).toBe(5);
  });
});
