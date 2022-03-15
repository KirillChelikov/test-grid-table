import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import Animal from "../classes/Animal";
import {map, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export abstract class AnimalService {
  protected type: string;
  constructor(private http: HttpClient) {
  }

  abstract createAnimals(data: AnimalDTO[]): Animal[]

  getAnimals(): Observable<Animal[]> {
    return this.http.get(`animal/${this.type}/`).pipe(
      map((data:any) => this.createAnimals(data.result))
    )
  }

  newAnimal(animal: Animal): Observable<any> {
    return this.http.post(`animal/${this.type}/`, animal);
  }

  editAnimal(animal: Animal): Observable<any> {
    return this.http.put(`animal/${this.type}/${animal.data.animalId}`, animal)
  }

  deleteAnimal(id: number): Observable<any> {
    return this.http.delete(`animal/${this.type}/${id}`)
  }
 }
