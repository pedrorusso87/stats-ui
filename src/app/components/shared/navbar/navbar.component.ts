import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from '../../auth/login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showNav = true;
  registeredUser: any;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onLoginClicked(): void {
    this.showNav = false;
    const dialogRef = this.dialog.open(LoginDialogComponent, {
     width: '380px',
     backdropClass: 'backdropBackground'
    })

    dialogRef.afterClosed().subscribe(() => {
      this.showNav = true;
      console.log('The dialog was closed');
    });
  }

}

