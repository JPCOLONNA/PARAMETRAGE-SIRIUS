"use strict";

import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "../../index/index.component";
import { LoginComponent } from "../../login/login.component";
import { HomeComponent } from "../../home/home.component";
import { PageNotFoundComponent } from "../../common/PageNotFound/page-not-found.component";
import { AccessDeniedComponent } from "../../common/accessDenied/access-denied.component";
import { ParametragePlanComponent } from "../../parametrage/plan/parametrage-plan.component";
import { ParametragePlanFicheComponent } from "../../parametrage/plan-fiche/parametrage-plan-fiche.component";


import { AuthGuardService } from "../../../services/auth-guard.service";


import { MenuItems } from "../../../models/menuItems";

import { AuthService } from "../../../services/auth.service";
import { MenuItemService } from "../../../services/menu-item.service";
import { MixinService } from "../../../services/mixin.service";
import { Navigation } from "../../../services/navigation.service";

//declare var jQuery:any;

/**
 * Navbar Component
 * 
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
    selector: "sidebar",
    templateUrl: "./sidebar.component.html",
    providers: [MixinService, AuthService]
})
export class SidebarComponent implements OnInit {
    // props
    rsc: any;
    selectedId: string;
    items: any[];
    isCollapsed: boolean = true;
    test: string = "test";
    
    map: {[key:string]:Component} = {}; 

    
    /*vappRoutes = [
    {
        path: "login",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: this.map['LoginComponent'],
    },
    {
        path: "accessdenied",
        component: AccessDeniedComponent
    },
    {
        path: "",
        component: IndexComponent,
        canActivate: [AuthGuardService],
        children: [
        {
            path: "",
            redirectTo: "/home",
            pathMatch: "full"
        },
        {
            path: "home",
            component: HomeComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: "parametrage-plan",
            component: ParametragePlanComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: "parametrage-plan-fiche",
            component: ParametragePlanFicheComponent,
            canActivate: [AuthGuardService]
        },
        {
            path: "parametrage-plan-fiche/:action/:planId",
            component: ParametragePlanFicheComponent,
            canActivate: [AuthGuardService]
        }
        
        
        ]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
    ];*/


    
    public toggled(open: boolean): void {
        console.log("Dropdown is now: ", open);
    }

      public select(id,event): void {
        /*if (jQuery(".active")!=null) {
            jQuery(".active").removeClass('active');
        }
        document.getElementById('li'+id).classList.add('active');*/
  
        //event.target.SidebarComponent.classList.add('active');
        alert(this.selectedId);
    }

public  appRoutes: Routes = [
  {
    path: "login",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { 
    path: "accessdenied",
    component: AccessDeniedComponent
  },
  {
    path: "",
    component: IndexComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "parametrage-plan",
        component: ParametragePlanComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "parametrage-plan-fiche",
        component: ParametragePlanFicheComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "parametrage-plan-fiche/:action/:planId",
        component: ParametragePlanFicheComponent,
        canActivate: [AuthGuardService]
      }
      
      
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];



    /**
     * Creates an instance of NavbarComponent.
     * 
     * @param {Router} router
     * @param {SettingsService} settingsSvc
     * @param {MenuItemService} menuItemService
     * @param {MixinService} mixinService
     * 
     * @memberOf NavbarComponent
     */
    constructor(private router: Router,
        private authService: AuthService,
        private menuItemService: MenuItemService,
        private mixinService: MixinService,
        private viewContainerRef: ViewContainerRef,
        private navigation: Navigation) {
            menuItemService.load().subscribe (
            value => {this.items = value;},
            error => console.log(error),
            () => console.log("Resources menu items loaded")
            );


            //console.log("composant "+this.viewContainerRef.element.nativeElement.component);
            //this.router.resetConfig(this.appRoutes);

        // this.initItems(menuItemService);
    }

    /*getSelectedId() {
        return this.navigation.getSelectedId();
    }


    setSelectedId(par) {
        return this.navigation.setSelectedId(par);
    }*/

    refreshRoutes() {
       

    }

    /**
     * Initialisation du composant
     * 
     * 
     * @memberOf NavbarComponent
     */
    ngOnInit() {
    }

    /**
     * Initialise la liste des items du menu
     * 
     * 
     * @memberOf NavbarComponent
     */
    initItems(menuItemService) {
         
    }

    /**
     * Logout app
     * 
     * 
     * @memberOf NavbarComponent
     */
    logout() {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("app_user");
        this.router.navigate(["/login"]);
    }
}
