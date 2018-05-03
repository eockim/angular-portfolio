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
  projects: Project[] = [];
  projectColors: Css[] = [];

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.getDashboard();
    this.getProjectCss();
  }

  getDashboard(): void {
    this._projectService.getDashboard()
      .subscribe(projects => this.projects = projects.slice(projects.length - 4, projects.length).reverse() );
      
  }

  getProjectCss(): void{
    this._projectService.getDashboardClass()
      .subscribe(css => this.projectColors = css);
  }


}