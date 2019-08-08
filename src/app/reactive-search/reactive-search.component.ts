import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html'
})
export class ReactiveSearchComponent implements OnInit {

  data$: Observable<any[]>;
  searchControl: FormControl = new FormControl();
  formGroup: FormGroup = new FormGroup({ search: this.searchControl });

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.data$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: string) => this.searchMusic(value))
    );
  }

  searchMusic(value: string): Observable<any[]> {

    let term = value.replace(' ', '+');
    let url = `https://itunes.apple.com/search?term=${term}&entity=album&limit=25`;

    return this.httpClient.get<any>(url).pipe(
      map(json => json.results)
    );
  }
}
