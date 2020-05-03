export default function getMostHealthy(arrayHeroes) {
  return arrayHeroes.sort((a, b) => b.health - a.health);
}
