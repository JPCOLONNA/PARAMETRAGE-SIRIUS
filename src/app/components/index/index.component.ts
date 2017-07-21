"use strict";

import { Component, OnInit, ViewChild  } from "@angular/core";
import { Router } from "@angular/router";
import { MdSidenav } from '@angular/material';

/**
 * Index component
 * 
 * @export
 * @class IndexComponent
 */
@Component({
    templateUrl: "./index.component.html"
    
})
export class IndexComponent implements OnInit {

//@ViewChild(MdSidenav) sidenav : MdSidenav;

constructor() {
    
}

ngOnInit() {
 //   this.sidenav.open();
}


}