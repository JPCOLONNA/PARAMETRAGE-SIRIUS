//Angular
import { Injectable } from '@angular/core';
//Models 
import { ParametragePlanData } from "../models/parametrage-plan-data";



@Injectable()
export class PlanService
{
    get(): ParametragePlanData
    {
        let planData: ParametragePlanData;
        planData = new ParametragePlanData();
        planData.planId;
        planData.typePlan="test typeplan";
        planData.description="test description";
        planData.contrat="test contrat";
        planData.typeContrat="test typeContrat";
        planData.college="test college";
        planData.regime="test regime";
        planData.typeCotisation="test typeCotisation";
        return planData;
    }
}
