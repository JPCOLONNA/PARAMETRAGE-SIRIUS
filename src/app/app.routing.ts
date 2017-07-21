import { ModuleWithProviders, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./components/index/index.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/common/PageNotFound/page-not-found.component";
import { AccessDeniedComponent } from "./components/common/accessDenied/access-denied.component";
import { ParametragePlanComponent } from "./components/parametrage/plan/parametrage-plan.component";
import { ParametragePlanFicheComponent } from "./components/parametrage/plan-fiche/parametrage-plan-fiche.component";


import { AuthGuardService } from "./services/auth-guard.service"; 


const appRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });