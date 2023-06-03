import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getTeam(id:any) {
    return this.http.get("http://localhost:3000/teams/"+id)
  }

  getAllTeams() {
    return this.http.get("http://localhost:3000/teams")
  }

  createTeam(team:any) {
    return this.http.post("http://localhost:3000/teams",team)
  }

  updateTeam(team:any,id:any) {
    return this.http.put("http://localhost:3000/teams/"+id,team)
  }

  deleteTeam(id:any) {
    return this.http.delete("http://localhost:3000/teams/"+id)
  }

}
