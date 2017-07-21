import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {MenuItems} from '../models/MenuItems';

@Injectable()
export class MenuItemService {
  
  constructor(private http: Http) { 
  }

  load(): Observable<MenuItems[]>
  {
      return this.http.get("res/_menu-item.json").map((res: Response) => {return res.json().parametrage as MenuItems[]});
  }

}
