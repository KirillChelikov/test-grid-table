import {AnimalDTO} from "./AnimalDTO";

export interface CowDTO extends AnimalDTO {
  healthIndex: string;
  endDate: string;
  minValueDateTime: string;
  type: string;
  cowId: string;
  eventId: string;
  deletable: string;
  lactationNumber: string;
  daysInLactation: string;
  ageInDays: string;
  startDateTime: string;
  reportingDateTime: string;
}
