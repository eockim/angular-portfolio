import { Injectable } from '@angular/core';
import { Project } from './project';
import { Css } from './project';
import { PROJECTS } from './mock-project';
import { CSS } from './mock-dashboardcss';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ProjectService {

  constructor(private _messageService: MessageService) { }

  getDashboard(): Observable<Project[]> {
    this._messageService.add('ProjectService: fetched dashboard');
    return of(PROJECTS);
  }

  getProjects(): Observable<Project[]> {
    this._messageService.add('ProjectService: fetched projects');
    return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    
    this._messageService.add(`ProjectService: fetched project name=${ PROJECTS.filter(project => project.id ==id).map(obj => obj.name) }`);
    return of(PROJECTS.find(project => project.id === id));

  }

  getDashboardClass() : Observable<Css[]> {

    //array mix, ie not support
    for(var i in CSS){
      let randomInt = Math.floor(Math.random() * CSS.length);
      [CSS[randomInt].name, CSS[randomInt >= CSS.length - 1 ? randomInt - 1 : randomInt + 1].name] 
      = [CSS[randomInt >= CSS.length - 1 ? randomInt - 1 : randomInt + 1].name, CSS[randomInt].name];
    }
    return of(CSS);
  }

}
