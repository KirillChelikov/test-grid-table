import {Component, OnInit} from "@angular/core";
import CowService from "../services/cow.service";

@Component({
  selector: 'app-cow-table-container',
  templateUrl: './cow-table-container.component.html'
})
export class CowTableContainerComponent implements OnInit {
  public headers: string[] = [
    'animalId',
    'healthIndex',
    'endDate',
    'minValueDateTime',
    'type',
    'cowId',
    'eventId',
    'deletable',
    'lactationNumber',
    'daysInLactation',
    'ageInDays',
    'startDateTime',
    'reportingDateTime'];

  constructor(public cowService: CowService) {
  }

  ngOnInit() {
    this.cowService.fetchAnimals().subscribe();
  }
}
