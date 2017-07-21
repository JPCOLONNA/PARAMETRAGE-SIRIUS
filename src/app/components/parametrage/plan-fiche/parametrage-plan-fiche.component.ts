//import générique
import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

//Models
import { CommonPage } from "../../../models/CommonPage";
import { ParametragePlanData } from '../../../models/parametrage-plan-data';

@Component({
  selector: 'app-parametrage-plan-fiche',
  templateUrl: './parametrage-plan-fiche.component.html',
  styleUrls: ['./parametrage-plan-fiche.component.scss']
})
export class ParametragePlanFicheComponent extends CommonPage implements OnChanges {

  @Input() plan: ParametragePlanData;
  parametragePlanForm : FormGroup;

  constructor( private fb: FormBuilder, private router: Router) { 
    super();
    this.titre="Paramétrage Plan";
    this.color= "purple";
    //TODO récupérer le contenu du plan à modifier
    this.createForm();
  }

  createForm()
  {
    /*this.parametragePlanForm = this.fb.group({
      planId:         [this.plan.planId, Validators.required],
      typePlan:       [this.plan.typePlan, Validators.required],
      description:    [this.plan.description, Validators.required],
      contrat:        [this.plan.contrat, Validators.required],
      typeContrat:    [this.plan.typeContrat, Validators.required],
      college:        [this.plan.college, Validators.required],
      regime:         [this.plan.regime, Validators.required],
      typeCotisation: [this.plan.typeCotisation, Validators.required]
    });*/

    this.parametragePlanForm = this.fb.group({
      planId:         ["", Validators.required],
      typePlan:       ["", Validators.required],
      description:    ["", Validators.required],
      contrat:        ["", Validators.required],
      typeContrat:    ["", Validators.required],
      college:        ["", Validators.required],
      regime:         ["", Validators.required],
      typeCotisation: ["", Validators.required]
    });

    this.parametragePlanForm.setValue({
      planId:         "a",
      typePlan:       "b",
      description:    "c",
      contrat:        "d",
      typeContrat:    "e",
      college:        "f",
      regime:         "g",
      typeCotisation: "h"
    })
    
    
    console.log("createForm");


  }
    
  ngOnChanges()
  {
    this.parametragePlanForm.reset({
      typePlan: this.plan.typePlan,
      description: this.plan.description,
      contrat: this.plan.contrat,
      typeContrat: this.plan.typeContrat,
      college: this.plan.college,
      regime: this.plan.regime,
      typeCotisation: this.plan.typeCotisation
    })
    console.log("ngOnChanges");
  }

  onsubmit()
  {
    console.log("Statut form : "+this.parametragePlanForm.status);
    if(this.parametragePlanForm.status == "VALID")
      this.plan = this.preparePlan();
   
    this.ngOnChanges();
  }

  preparePlan(): ParametragePlanData
  {
    const formModel = this.parametragePlanForm.value;

    const savePlan: ParametragePlanData = {
      planId: formModel.planId,
      typePlan: formModel.typePlan as string,
      description: formModel.description as string,
      contrat: formModel.contrat as string,
      typeContrat: formModel.typeContrat as string,
      college: formModel.college as string,
      regime: formModel.regime as string,
      typeCotisation: formModel.typeCotisation as string
    }
    return savePlan;
  }

  revert() { this.ngOnChanges();}

  onListPlan()
  {
    this.router.navigate(["parametrage-plan"]);
  }

}
