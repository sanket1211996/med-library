import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarymanagerAppComponent } from './librarymanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [
    LibrarymanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LibrarymanagerModule { }
