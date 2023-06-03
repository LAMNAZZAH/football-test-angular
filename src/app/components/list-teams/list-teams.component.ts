import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/service/team.service';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  constructor(private service:TeamService){}
  listTeams:any;


  ngOnInit(): void {
    this.service.getAllTeams().subscribe(teams =>{
      this.listTeams = teams;
    })
  }

  actionDelete(id:any){
    this.service.deleteTeam(id).subscribe();
  }


}
