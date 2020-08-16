export enum AbilityScore {

  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Eleven = 11,
  Twelve = 12,
  Thirteen = 13,
  Fourteen = 14,
  Fifteen = 15,
  Sixteen = 16,
  Seventeen = 17,
  Eighteen = 18,
  Nineteen = 19,
  Twenty = 20,
}

export function AbilityModifierLookup(abilityScore: AbilityScore): number {

  switch (abilityScore)
  {
    case AbilityScore.One: return -5;
    case AbilityScore.Two: return -4;
    case AbilityScore.Three: return -4;
    case AbilityScore.Four: return -3;
    case AbilityScore.Five: return -3;
    case AbilityScore.Six: return -2;
    case AbilityScore.Seven: return -2;
    case AbilityScore.Eight: return -1;
    case AbilityScore.Nine: return -1;
    case AbilityScore.Ten: return 0;
    case AbilityScore.Eleven: return 0;
    case AbilityScore.Twelve: return 1;
    case AbilityScore.Thirteen: return 1;
    case AbilityScore.Fourteen: return 2;
    case AbilityScore.Fifteen: return 2;
    case AbilityScore.Sixteen: return 3;
    case AbilityScore.Seventeen: return 3;
    case AbilityScore.Eighteen: return 4;
    case AbilityScore.Nineteen: return 4;
    case AbilityScore.Twenty: return 5;
  };
};
