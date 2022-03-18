import TableRow from "../interfaces/TableRow";
import {AnimalDTO} from "../interfaces/AnimalDTO";

export default class Animal implements TableRow {
  data: AnimalDTO;

  constructor(data: AnimalDTO) {
    this.data = data;
  }

  set id(id: string) {
    this.data.animalId = id;
  }

  edit(newData: AnimalDTO): void {
    Object.keys(newData).forEach((key) => {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = newData[key];
      }
    });
  }
}
