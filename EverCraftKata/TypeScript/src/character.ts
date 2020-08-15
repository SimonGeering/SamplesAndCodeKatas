import { Alignment } from './alignment'
import { Combatant } from './combatant'
import { D20 } from './dice'

export class Character implements Combatant {

  public Name = '';
  public Alignment: Alignment = Alignment.Neutral;

  public ArmourClass = 10;
  public HitPoints = 5;

  public Attack(combatant: Combatant, dice: D20): boolean {

    if (dice.Roll() >= combatant.ArmourClass)
      return true;
    else
      return false;
  }
}