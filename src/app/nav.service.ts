import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NavService {

  selectedBurger = false;
  constructor() { }

  switch(): Observable<boolean>{
    if(this.selectedBurger){
      this.selectedBurger = false;
    }else{
      this.selectedBurger = true;
    }

    return of(this.selectedBurger);
  }

}
