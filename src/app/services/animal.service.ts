import {Injectable} from "@angular/core";
import {AnimalApiService} from "./animal-api.service";
import Animal from "../classes/Animal";

@Injectable({providedIn: 'root'})
export default abstract class AnimalService {
  constructor(private animalApiService: AnimalApiService) {
  }

  abstract createAnimals(animalsDTO: AnimalDTO[]): Animal[]


}
