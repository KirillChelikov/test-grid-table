import { Injectable} from "@angular/core";
import {AnimalApiService} from "./animal-api.service";
import Animal from "../classes/Animal";
import {BehaviorSubject, map, Observable} from "rxjs";
import {AnimalDTO} from "../interfaces/AnimalDTO";

@Injectable({providedIn: 'root'})
export default abstract class AnimalService<T extends Animal> {
  private animals$ = new BehaviorSubject<T[]>([]);
  protected animalApiService: AnimalApiService;

  abstract createAnimal(animalDTO: AnimalDTO): T;

  get animals(): Observable<Animal[]> {
    return this.animals$.asObservable();
  }

  fetchAnimals(): Observable<unknown> {
    return this.animalApiService.getAnimals().pipe(
      map(res => this.addAnimals(res))
    )
  }

  editAnimal(id: string, data: AnimalDTO): void {
    const animal = this.animals$.getValue().find(animal => animal.data.animalId === id);
    if (animal) {
      animal.edit(data);
      this.animalApiService.editAnimal(animal).subscribe();
    }
  }

  newAnimal(animalDTO: AnimalDTO): void {
    const animal = this.createAnimal(animalDTO);
    this.animalApiService.newAnimal(animal).subscribe((value) => {
      animal.id = value.id;
      this.animals$.getValue().push(animal);
    })
  }

  deleteAnimal(id: string): void {
    const animalIdx = this.animals$.getValue().findIndex(animal => animal.data.animalId === id);
    this.animals$.getValue().splice(animalIdx, 1);
    this.animalApiService.deleteAnimal(id).subscribe();
  }

  private addAnimals(dto: AnimalDTO[]): void {
    const animals = dto.map(object => this.createAnimal(object));
    this.animals$.next(animals);
  }
}
