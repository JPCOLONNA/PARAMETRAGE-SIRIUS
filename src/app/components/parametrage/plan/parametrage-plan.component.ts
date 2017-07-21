//import générique
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { Router } from "@angular/router";


//Import paramétrage
import { ParametragePlanDatasource } from '../../../datasources/parametrage-plan-datasources';
import { ParametragePlanDatabase } from '../../../database/parametrage-plan-database';

//Models
import { CommonPage } from "../../../models/CommonPage";
import { ParametragePlanData } from "../../../models/parametrage-plan-data";

// Mocks
import { PLANS } from "../../../mocks/parametrage-plan";

// Tech
import { MdPaginatorIntlFrench } from "../../../tech/MdPaginatorIntlFrench";

@Component({
  selector: 'app-parametrage-plan',
  templateUrl: './parametrage-plan.component.html',
  styleUrls: ['./parametrage-plan.component.scss']
})


export class ParametragePlanComponent extends CommonPage implements OnInit  {

  //Liste des colonnes du tableau de visualisation des plans de paramétrage (ordre respecté)
  displayedColumns = ['planId', 'typePlan', 'description', 'contrat','typeContrat','college','typeCotisation','regime','action'];

  //Pour récupération de la listes des plans de paramétrage
  parametragePlanDatabase = new ParametragePlanDatabase();
  // La table pour affichage de la liste se base sur une datasource
  dataSource: ParametragePlanDatasource | null;

  //infos bulle avec le bouton
  position = 'below';

  @ViewChild(MdPaginator) paginator: MdPaginator;

  constructor(private router: Router) { 
    super();
    this.titre="Paramétrage Plan";
    this.color= "purple";
    //this.paginator._intl.itemsPerPageLabel = 'Registros por página';
    //this.paginator._intl = new MdPaginatorIntlFrench();
  }

/**
 * Initialise la liste des plans selon la datasource
 */
  ngOnInit() {
    this.dataSource = new ParametragePlanDatasource(this.parametragePlanDatabase, this.paginator);
    this.paginator._intl = new MdPaginatorIntlFrench();
  }

  onAjoutPlan()
  {
    this.router.navigate(["parametrage-plan-fiche"]);
  }

}
