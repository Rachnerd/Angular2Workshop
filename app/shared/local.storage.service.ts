import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
    get(key:string):any {
        return localStorage.getItem(key);
    }

    set(key:string, data:any):void {
        localStorage.setItem(key, JSON.stringify(data));
    }
}