import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { StatsPageModule } from './stats-page/stats-page.module';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
@NgModule({
  declarations: [HomeComponent, TeamsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    StatsPageModule
  ]
})
export class ComponentsModule { }
