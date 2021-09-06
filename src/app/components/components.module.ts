import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { StatsComponent } from './stats/stats.component';
import { StoreModule } from '@ngrx/store';
import * as fromStats from './stats/store/reducers';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DashboardComponent, StatsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    StoreModule.forFeature('tournaments', fromStats.reducers)
  ]
})
export class ComponentsModule { }
