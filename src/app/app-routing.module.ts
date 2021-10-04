import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'librarymanager', loadChildren:()=>import('./librarymanager/librarymanager.module').then(m => m.LibrarymanagerModule)},
  {path:'**',redirectTo:'librarymanager'}
];

@NgModule({
  //For main module we have to use forRoot()
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
