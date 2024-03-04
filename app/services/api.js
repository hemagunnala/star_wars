import { URL } from "./url";

export class API_SERVICE {
  static async getAllPlanets () {
    const response = await fetch(URL.allPlanets());
    const data = response.json();
    return data;
  }

  static async getPaginatedPlanets (pgNumber) {
    const response = await fetch(URL.paginatedPlantes(pgNumber));
    const data = response.json();
    return data;
  }
} 