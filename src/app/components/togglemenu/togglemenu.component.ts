import { Component, OnInit } from '@angular/core';

import { MenuItems } from "../../models/menuItems";
import { MenuItemService } from "../../services/menu-item.service";
import { Navigation } from "../../services/navigation.service";

@Component({
  selector: 'app-togglemenu',
  templateUrl: './togglemenu.component.html',
  styleUrls: ['./togglemenu.component.scss']
})
export class TogglemenuComponent implements OnInit {

  items: any[];

  constructor(private menuItemService: MenuItemService,
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

  ngOnInit() {
  }

}
