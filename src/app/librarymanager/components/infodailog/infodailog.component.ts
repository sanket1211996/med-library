import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnotomyInfo } from '../../models/anotomyInfo';
import { Term } from '../../models/term';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-infodailog',
  templateUrl: './infodailog.component.html',
  styleUrls: ['./infodailog.component.scss']
})
export class InfodailogComponent implements OnInit {

  term!: Term;

  constructor(
    @Inject(MAT_DIALOG_DATA) public anotomyID: string,
    private libraryService: LibraryService,
    ) { }

  ngOnInit(): void {
      this.fetchData(this.anotomyID);
  }

  fetchData(id: any) {
    if(id ==="" || id === "not found in UBERON")
      return
    this.libraryService.getAnatomyInfo(id)
    .subscribe( 
      data => {
       this.buildUiModal(data);      
      }, 
      error => {
        console.log(error);
    });
  }

  buildUiModal(anotomyInfo: AnotomyInfo) {
    for(let eterms of anotomyInfo._embedded.terms) {
      this.term = {label: eterms.label, link:eterms.obo_id, defination: eterms.annotation.definition}
    }
    console.log(this.term);
  }

}
