"use strict";

import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Router } from "@angular/router";
import { Navigation } from "../../services/navigation.service";

/**
 * Composant Accueil 
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: "./home.component.html",
    styleUrls: ["home.component.scss"],
    selector: 'app-parametrage-plan',
})
export class HomeComponent implements OnInit, AfterViewInit {

    /**
     * Creates an instance of HomeComponent.
     *
     * @param {Router} router
     *
     * @memberOf HomeComponent
     */
    constructor(private router: Router,
                private http: Http,
                private navigation : Navigation) {
    }

    /**
     * Initialisation du composant.
     */
    ngOnInit() {
    }

    /**
     * Initialisation de la vue.
     */
    ngAfterViewInit() {
    }

    //Redirection vers l'espace de gestion des assurés
    onGoAssures()
    {
        this.router.navigate(["/assures"]);
    }

    //Redirection vers l'espace de gestion des entreprises
    onGoSocietes()
    {
        this.router.navigate(["/societes"]);
    }

    //Redirection vers l'espace de gestion des assurés
    onGoParametrage()
    {
        this.navigation.setSelectedId('liparametrage-plan');
        this.router.navigate(["/parametrage-plan"]);
    }
}