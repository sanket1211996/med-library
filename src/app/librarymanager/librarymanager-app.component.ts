import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-librarymanager-app',
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LibrarymanagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
