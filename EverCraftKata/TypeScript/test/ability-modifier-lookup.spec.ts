import { AbilityScore, AbilityModifierLookup } from '../src/index';

describe('The AbilityModifierLookup', () => {

  it.each`
    AbilityScore | ExpectedModifier
    ${AbilityScore.One} | ${-5}
    ${AbilityScore.Two} | ${-4}
    ${AbilityScore.Three} | ${-4}
    ${AbilityScore.Four} | ${-3}
    ${AbilityScore.Five} | ${-3}
    ${AbilityScore.Six} | ${-2}
    ${AbilityScore.Seven} | ${-2}
    ${AbilityScore.Eight} | ${-1}
    ${AbilityScore.Nine} | ${-1}
    ${AbilityScore.Ten} | ${0}
    ${AbilityScore.Eleven} | ${0}
    ${AbilityScore.Twelve} | ${1}
    ${AbilityScore.Thirteen} | ${1}
    ${AbilityScore.Fourteen} | ${2}
    ${AbilityScore.Fifteen} | ${2}
    ${AbilityScore.Sixteen} | ${3}
    ${AbilityScore.Seventeen} | ${3}
    ${AbilityScore.Eighteen} | ${4}
    ${AbilityScore.Nineteen} | ${4}
    ${AbilityScore.Twenty} | ${5}
    `('Should returns a corresponding modifier of "$Modifier" given an ability score of "$Score".', ({abilityScore, expectedModifier}) => {

    expect(AbilityModifierLookup(abilityScore)).toBe(expectedModifier);
  });
});
