import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from '../../auth/login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  disableLogin = false;
  registeredUser: any;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onLoginClicked(): void {
    this.disableLogin = true;
    const dialogRef = this.dialog.open(LoginDialogComponent, {
     width: '500px'
    })

    dialogRef.afterClosed().subscribe(() => {
      this.disableLogin = false;
      console.log('The dialog was closed');
    });
  }

}

