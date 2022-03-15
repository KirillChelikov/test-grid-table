import AnimalService from "./animal.service";
import Cow from "../classes/Cow";
import {Injectable, Injector} from "@angular/core";
import {CowDTO} from "../interfaces/CowDTO";
import CowApiService from "./cow-api.service";

@Injectable({providedIn: 'root'})
export default class CowService extends AnimalService<Cow> {
  override createAnimal(animalDTO: CowDTO) {
    return new Cow(animalDTO);
  }
  constructor(private injector: Injector) {
    super();
    this.animalApiService = injector.get(CowApiService)
  }
}
