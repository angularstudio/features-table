import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource }       from '@angular/material/table';
import { Feature }                  from './feature';
import { FeaturesTable }            from './features-table';

@Component({

    selector: 'features-table',
    template: `

        <div class="wrapper">

            <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

                <tr>

                    <th *ngFor="let column of config.columns">{{ column.label }}</th>

                </tr>

                <tr *ngFor="let row of config.rows">

                    <td *ngFor="let column of config.columns">{{ row[ column.id ] }}</td>

                </tr>

            </table>

        </div>

    `,
    styleUrls: [ 'features-table.component.scss' ]

})
export class FeaturesTableComponent implements OnInit {

    @Input() public config: FeaturesTable;


    public dataSource: MatTableDataSource<Feature>;

    public ngOnInit(): void {

    }

}
