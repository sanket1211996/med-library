import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Anotomy } from '../../models/anotomy';
import { MedLibraryData } from '../../models/medlibrarydata';
import { LibraryService } from '../../services/library.service';
import { InfodailogComponent } from '../infodailog/infodailog.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  medLibData!: Observable<MedLibraryData>;
  displayedColumns: string[] = ['id', 'name'];
  anotomyList: Array<Anotomy> = [];
  dataSource!: MatTableDataSource<Anotomy>;

  constructor(
    private libraryService: LibraryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.medLibData = this.libraryService.medLibraryData;
    this.libraryService.loadAll();
    this.medLibData.subscribe( data => {
      console.log(data);
      this.buildUiModal(data);
    },
     error=> {
       console.log('Error occured main content load:', error);
     })
  }

  buildUiModal(medLibData: MedLibraryData) {    
    for (let row of medLibData.data) {
      for(let anotomy of row.anatomical_structures) {
        this.anotomyList.push({ id: anotomy.id,name: anotomy.name });   
      }
    }

    this.anotomyList = this.anotomyList.filter(
      (thing, i, arr) => arr.findIndex(t => t.name === thing.name) === i
    );
    console.log("This is list:",this.anotomyList[0]);
    this.dataSource = new MatTableDataSource<Anotomy>(this.anotomyList);
  }

  openDialog(id: string) {
    id = id.replace(':','_');
    console.log("clicked id:", id);
    let dialogRef = this.dialog.open(InfodailogComponent, {
      width: '250px',
      data: id,
    });
    

  }

}
