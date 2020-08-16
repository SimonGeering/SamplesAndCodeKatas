import { D20 } from './dice'
import { AttackOutcome } from './attack-outcome'

export interface Combatant {

  ArmourClass: number;
  HitPoints: number;
  IsDead: boolean;

  Attack(combatant: Combatant, dice: D20): AttackOutcome;
}