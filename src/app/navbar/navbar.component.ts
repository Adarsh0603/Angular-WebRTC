import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  routes: any[] = [
    {
      route: '/',
      text: 'Local Stream',
    },
    {
      route: '/takepicture',
      text: 'Take Picture',
    },
  ];
  ngOnInit(): void {}
}
