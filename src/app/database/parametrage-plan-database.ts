import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ParametragePlanData } from '../models/parametrage-plan-data';
import { PLANS } from '../mocks/parametrage-plan';

/**
 * Récupération des plans de paramétrage depuis un mocks ou un webservice
 */
export class ParametragePlanDatabase
{
    /** Adapte la liste des plans de paramétrage à chaque changement de données */
    dataChange: BehaviorSubject<ParametragePlanData[]> = new BehaviorSubject<ParametragePlanData[]>([]);
    get data(): ParametragePlanData[] { return this.dataChange.value; }

    constructor() {
        //Chargement de la liste des plans de paramétrage selon un mocks (//TO DO webservice)
        for (let i = 0; i < PLANS.length; i++) 
        { 
            const copiedData = this.data.slice();
            copiedData.push(PLANS[i]);
            this.dataChange.next(copiedData); 
        }
    }
}