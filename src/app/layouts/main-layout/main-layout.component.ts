import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  sideMode: string = 'side';

  ngOnInit() {
    this.sidenav.open()
  }

  toggleNav() {
    this.sidenav.toggle()
  }
}
