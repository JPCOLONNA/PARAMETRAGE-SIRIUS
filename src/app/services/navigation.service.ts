//Angular
import { Injectable } from '@angular/core';




@Injectable()
export class Navigation
{
    public selectedId:string;
    
    getSelectedId() {
        return this.selectedId;
    }

    setSelectedId(pSelected) {
        this.selectedId=pSelected;
    }
}
