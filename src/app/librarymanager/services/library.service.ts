import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnotomyInfo } from '../models/anotomyInfo';
import { MedLibraryData } from '../models/medlibrarydata';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  //rxjs 
  private _medLibraryData: BehaviorSubject<MedLibraryData>;
  medLibURL = 'https://asctb-api.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0';
  anotomyInfo = 'https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/';


  private medDataStore: {
    medlibrarydata: MedLibraryData
  }

  constructor(private http: HttpClient) { 
    this.medDataStore = { medlibrarydata:{data:[],csv:""} };
    this._medLibraryData =  new BehaviorSubject<MedLibraryData>({data:[],csv:""});
  }

  get medLibraryData(): Observable<MedLibraryData> {
    return this._medLibraryData.asObservable();
  }

  loadAll() {
    
    return this.http.get<MedLibraryData>(this.medLibURL)
      .subscribe(data => {
        this.medDataStore.medlibrarydata = data;
        this._medLibraryData.next(Object.assign({}, this.medDataStore).medlibrarydata);
      }, error => {
        console.log("failed to fetch users: ", error);
      });
  }

  getAnatomyInfo(id: string): Observable<AnotomyInfo> {
    return this.http.get<AnotomyInfo>(this.anotomyInfo+id);
  }
}
