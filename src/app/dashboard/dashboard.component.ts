import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Css } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  projects1st: Project[] = [];
  projects2nd: Project[] = [];
  projectColors: Css[] = [];

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.getDashboard1st();
    this.getDashboard2nd();
    this.getProjectCss();
  }

  getDashboard1st(): void {
    this._projectService.getDashboard()
      .subscribe(projects => this.projects1st = projects.slice(projects.length - 2, projects.length).reverse() );
      
  }

  getDashboard2nd(): void {
    this._projectService.getDashboard()
      .subscribe(projects => this.projects2nd = projects.slice(projects.length - 4, projects.length - 2).reverse());

  }

  getProjectCss(): void{
    this._projectService.getDashboardClass()
      .subscribe(css => this.projectColors = css);
  }


}