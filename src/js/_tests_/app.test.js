import Team from "../app";

test('create new team', () => {
    const heroDaemon = {
        name: 'Elusiv',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }

    const heroSwordsman = {
        name: 'Elusiv',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }

    const comparisonAdd = new Set().add(heroDaemon);
    const resultAdd = new Team;
    resultAdd.add(heroDaemon);

    const comparisonAddAll = new Set().add(heroDaemon).add(heroSwordsman);
    const resultAddAll = new Team;
    resultAddAll.addAll(heroDaemon, heroSwordsman);

    const comparisonToArray = Array.from(new Set().add(heroDaemon).add(heroSwordsman));
    const resultToArray = new Team;
    resultToArray.addAll(heroDaemon, heroSwordsman);
    resultToArray.toArray();

    ecpext(comparisonAdd).toEqual(resultAdd);
    expect(comparisonAddAll).toEqual(resultAddAll);
    expect(comparisonToArray).toEqual(resultToArray);
    expect(() => resultAdd.add(heroDaemon)).toThrow();
});