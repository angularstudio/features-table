import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { MatTableModule }         from '@angular/material/table';
import { FeaturesTableComponent } from './features-table.component';

@NgModule({
    declarations: [ FeaturesTableComponent ],
    imports: [

        CommonModule,
        MatTableModule

    ],
    exports: [ FeaturesTableComponent ]
})
export class FeaturesTableModule {
}
