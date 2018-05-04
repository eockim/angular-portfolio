import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'KHJ portfolio';

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

  selectedBurger = false;

  switch(){
    return this.navService
      .switch().subscribe(sw => this.selectedBurger = sw);
  }
 
}
