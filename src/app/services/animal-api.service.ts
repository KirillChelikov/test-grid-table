import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import Animal from "../classes/Animal";
import {Observable} from "rxjs";
import {AnimalDTO} from "../interfaces/AnimalDTO";

@Injectable()
export class AnimalApiService {
  protected type: string;
  constructor(private http: HttpClient) {
  }

  getAnimals(): Observable<AnimalDTO[]> {
    return this.http.get<AnimalDTO[]>(`animal/${this.type}/`)
  }

  newAnimal(animal: Animal): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(`animal/${this.type}/`, animal);
  }

  editAnimal(animal: Animal): Observable<unknown> {
    return this.http.put(`animal/${this.type}/${animal.data.animalId}`, animal)
  }

  deleteAnimal(id: string): Observable<unknown> {
    return this.http.delete(`animal/${this.type}/${id}`)
  }
 }
