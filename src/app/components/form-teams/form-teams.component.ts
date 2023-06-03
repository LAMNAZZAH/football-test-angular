import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/core/service/team.service';

@Component({
  selector: 'app-form-teams',
  templateUrl: './form-teams.component.html',
  styleUrls: ['./form-teams.component.css']
})
export class FormTeamsComponent{
  constructor(private service:TeamService,private router:Router){}

  nom = "";
  description = "";
  typeChamp = "";

  actionCreate(): void {
    this.router.navigateByUrl("/dashboard");
    this.service.createTeam({nom:this.nom,description:this.description,typeChamp:this.typeChamp}).subscribe();
  }



}
