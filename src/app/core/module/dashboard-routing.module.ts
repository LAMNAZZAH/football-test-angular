import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamsComponent } from 'src/app/components/form-teams/form-teams.component';
import { FormUpdateTeamsComponent } from 'src/app/components/form-update-teams/form-update-teams.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ListTeamsComponent } from 'src/app/components/list-teams/list-teams.component';
import { PreviewTeamComponent } from 'src/app/components/preview-team/preview-team.component';

const routes: Routes = [
  { path: '', component:LayoutComponent,children:[
    {path: '', component:ListTeamsComponent},
    {path: 'preview/:id', component:PreviewTeamComponent},
    {path: 'create', component:FormTeamsComponent},
    {path: 'update/:id', component:FormUpdateTeamsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
