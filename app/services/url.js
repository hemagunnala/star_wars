export class URL {
  static allPlanets = () => 'https://swapi.dev/api/planets/?format=json';
  static paginatedPlantes = (pgNumber) => `https://swapi.dev/api/planets/?page=${pgNumber}&format=json`
}