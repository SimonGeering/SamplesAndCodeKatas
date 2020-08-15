import { Alignment } from './alignment'
import { ICombatant } from './combatant'

export class Character implements ICombatant {

  public Name: string;
  public Alignment: Alignment;

  public ArmourClass: number = 10;
  public HitPoints: number = 5;
}