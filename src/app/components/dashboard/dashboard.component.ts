import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from 'ngx-webstorage';
import * as fromStats from '../stats-page/store';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.user = this.localStorageService.retrieve('username');
  }

  navigate(path: string): void {
    this.store.dispatch(new fromStats.GetTournaments())
    this.router.navigate([path]);
  }

}
