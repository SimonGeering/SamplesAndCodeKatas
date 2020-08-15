import { Character, Alignment } from '../src';

describe('Character', () => {

  it('Has a name', () => {

    const character = new Character();

    character.Name = 'bob';

    expect(character.Name).toBe('bob');
  });

  it.each`
    alignment
    ${Alignment.Good}
    ${Alignment.Neutral}
    ${Alignment.Evil}
    `('Can have a "$alignment" alignment', (alignment: Alignment) => {

    const character = new Character();

    character.Alignment = alignment;

    expect(character.Alignment).toBe(alignment);
  });
});
