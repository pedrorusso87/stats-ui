import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { StatsPageModule } from './stats-page/stats-page.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    StatsPageModule
  ]
})
export class ComponentsModule { }
