import {Component, ViewEncapsulation} from '@angular/core';
import {StorageService} from './shared/local.storage.service';

@Component({
    selector   : 'app',
    templateUrl: './app/app.component.html',
    styles: [require("!raw!sass!./app.component.scss")],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private localStorage:StorageService) {

    }
}