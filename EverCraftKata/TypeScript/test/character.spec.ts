import { Character } from "../src";

describe("Character", () => {

  it("Has a name", () => {

    const character = new Character();

    character.Name = "bob";

    expect(character.Name).toBe("bob");
  })
})
