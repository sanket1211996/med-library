import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarymanagerAppComponent } from './librarymanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { LibraryService } from './services/library.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfodailogComponent } from './components/infodailog/infodailog.component';

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
    InfodailogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    //For other module we have to use forChild()
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers:[
    LibraryService //Added the required service
  ]
})
export class LibrarymanagerModule { }
