import {HttpModule} from "@angular/http";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {StorageService} from './shared/local.storage.service';
import {HomeComponent} from './+home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
    providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}, StorageService],
    bootstrap   : [AppComponent]
})
export class AppModule {

}