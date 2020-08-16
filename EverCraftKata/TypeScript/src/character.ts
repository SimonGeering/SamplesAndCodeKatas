import { Alignment } from './alignment'
import { Combatant } from './combatant'
import { D20 } from './dice'
import { AttackOutcome } from './attack-outcome'
import { AbilityScore } from './ability-score'

export class Character implements Combatant {

  // TODO: (not in spec) add validation to prevent character name being empty;
  public Name = '';
  public Alignment: Alignment = Alignment.Neutral;

  public Strength: AbilityScore = AbilityScore.Ten;
  public Dexterity: AbilityScore = AbilityScore.Ten;
  public Constitution: AbilityScore = AbilityScore.Ten;
  public Wisdom: AbilityScore = AbilityScore.Ten;
  public Intelligence: AbilityScore = AbilityScore.Ten;
  public Charisma: AbilityScore = AbilityScore.Ten;

  public ArmourClass: number = 10;

  public HitPoints: number = 5;
  public get IsDead(): boolean { return this.HitPoints <= 0; }

  public Attack(opponent: Combatant, dice: D20): AttackOutcome {

    const diceRoll = dice.Roll();

    if (diceRoll < opponent.ArmourClass)
      return AttackOutcome.Miss;

    if (diceRoll === 20)
    {
      opponent.HitPoints = opponent.HitPoints - 2;
      return AttackOutcome.Critical;
    }

    opponent.HitPoints = opponent.HitPoints - 1;
    return AttackOutcome.Hit;
  }
}