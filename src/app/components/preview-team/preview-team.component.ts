import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/core/service/team.service';

@Component({
  selector: 'app-preview-team',
  templateUrl: './preview-team.component.html',
  styleUrls: ['./preview-team.component.css']
})
export class PreviewTeamComponent implements OnInit {
  constructor(private service:TeamService,private route:ActivatedRoute){}

  team:any;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getTeam(id).subscribe(teams =>{
      this.team = teams;
    })
  }


}
