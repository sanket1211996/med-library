import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarymanagerAppComponent } from './librarymanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { LibraryService } from './services/library.service';

const routes: Routes = [
  {path:'', component: LibrarymanagerAppComponent,
    children: [
      { path:'', component: MainContentComponent}
    ]
  }, 
  {path:'**',redirectTo:''}
];


@NgModule({
  declarations: [
    LibrarymanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    //For other module we have to use forChild()
    RouterModule.forChild(routes)
  ],
  providers:[
    LibraryService //Added the required service
  ]
})
export class LibrarymanagerModule { }
