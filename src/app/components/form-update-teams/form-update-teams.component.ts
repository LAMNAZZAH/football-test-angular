import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/core/service/team.service';

@Component({
  selector: 'app-form-update-teams',
  templateUrl: './form-update-teams.component.html',
  styleUrls: ['./form-update-teams.component.css']
})
export class FormUpdateTeamsComponent implements OnInit {
  constructor(private service:TeamService,private route:ActivatedRoute,private router:Router){}

  id:any;
  nom="";
  description="";
  typeChamp="";

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getTeam(this.id).subscribe((teams:any) =>{
      this.nom = teams.nom;
      this.description = teams.description;
      this.typeChamp = teams.typeChamp;
    })
  }

  actionUpdate(){
    this.service.updateTeam({id:this.id,nom:this.nom,description:this.description,typeChamp:this.typeChamp},this.id).subscribe();
    this.router.navigateByUrl("/dashboard");
  }

}
