//Modules 
import { NgModule } from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ParametragePlanComponent } from "../components/parametrage/plan/parametrage-plan.component";
import { ParametragePlanFicheComponent } from '../components/parametrage/plan-fiche/parametrage-plan-fiche.component';
import { MdSidenavModule, MdCardModule, MdTableModule, MdPaginatorModule, MdTooltipModule, MdInputModule, MdSelectModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FlexLayoutModule } from "@angular/flex-layout";

//Services
import { PlanService } from "../services/plan.service";

@NgModule({
  declarations: [
    ParametragePlanComponent, 
    ParametragePlanFicheComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MdCardModule,
    MdTableModule, 
    MdPaginatorModule,
    CdkTableModule,
    MdTooltipModule,
    FormsModule,
    MdInputModule,
    MdSelectModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    PlanService
  ]
})

export class ParametrageModule { }
