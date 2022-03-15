import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TableComponent} from "./table/table.component";
import {CowTableContainerComponent} from "./animal-table-container/cow-table-container.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AnimalInterceptor} from "./animal.interceptor";
import CowService from "./services/cow.service";
import CowApiService from "./services/cow-api.service";
import {AnimalApiService} from "./services/animal-api.service";
import {FormsModule} from "@angular/forms";

export const ANIMAL_SERVICE_TOKEN = new InjectionToken<string>('animal_service');

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CowTableContainerComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AnimalInterceptor,
    multi: true
  },
    AnimalApiService,
    CowApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
