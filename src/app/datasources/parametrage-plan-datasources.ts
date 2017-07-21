
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk';
import { ParametragePlanData } from '../models/parametrage-plan-data';
import { ParametragePlanDatabase } from '../database/parametrage-plan-database';
import { MdPaginator } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

/**
 * Mise en place de l'observable sur la liste des plans de paramétrage
 */
export class ParametragePlanDatasource extends DataSource<any> {
  
  constructor(private _parametragePlanDatabase: ParametragePlanDatabase, private _paginator: MdPaginator) {
    super();
  }

  /** Fonction de connexion appelée par le tableau pour récupérer le flux contenant la liste des plans de paramétrage. */
  connect(): Observable<ParametragePlanData[]> {
    const displayDataChanges = [
      this._parametragePlanDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._parametragePlanDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}