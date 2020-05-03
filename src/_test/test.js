import getMostHealthy from '../js/app';

describe('getMostHealthy', () => {
  test('nonSortHeroes', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const result = getMostHealthy(heroes);
    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });
  test('sortHeroes', () => {
    const heroes = [
      { name: 'мечник', health: 88 },
      { name: 'лучник', health: 64 },
      { name: 'речник', health: 25 },
    ];
    const result = getMostHealthy(heroes);
    expect(result).toEqual([
      { name: 'мечник', health: 88 },
      { name: 'лучник', health: 64 },
      { name: 'речник', health: 25 },
    ]);
  });
});
