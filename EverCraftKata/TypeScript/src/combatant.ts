import { D20 } from './dice'

export interface Combatant {

  ArmourClass: number;
  HitPoints: number;

  Attack(combatant: Combatant, dice: D20): boolean;
}