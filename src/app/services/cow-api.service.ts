import {AnimalApiService} from "./animal-api.service";
import {Injectable} from "@angular/core";

@Injectable()
export default class CowApiService extends AnimalApiService {
  override type = 'cow';
}
