import { Character, Alignment, AbilityScore } from '../src/index';

describe('A character', () => {

  it('has a name', () => {

    const character = new Character();

    character.Name = 'bob';

    expect(character.Name).toBe('bob');
  });

  it.each`
    alignment
    ${Alignment.Good}
    ${Alignment.Neutral}
    ${Alignment.Evil}
    `('can have a "$alignment" alignment', (alignment: Alignment) => {

    const character = new Character();

    character.Alignment = alignment;

    expect(character.Alignment).toBe(alignment);
  });

  it('has a strength ability between 1 and 20, with a default of 10 ', ()=> {

    expect(new Character().Strength).toBe(AbilityScore.Ten);
  });

  it('has a dexterity ability between 1 and 20, with a default of 10 ', ()=> {

    expect(new Character().Dexterity).toBe(AbilityScore.Ten);
  });

  it('has a constitution ability between 1 and 20, with a default of 10 ', ()=> {

    expect(new Character().Constitution).toBe(AbilityScore.Ten);
  });

  it('has a wisdom ability between 1 and 20, with a default of 10 ', ()=> {

    expect(new Character().Wisdom).toBe(AbilityScore.Ten);
  });

  it('has a intelligence ability between 1 and 20, with a default of 10 ', ()=> {

    expect(new Character().Intelligence).toBe(AbilityScore.Ten);
  });

  it('has a charisma ability between 1 and 20, with a default of 10 ', ()=> {

    expect(new Character().Charisma).toBe(AbilityScore.Ten);
  });
});
