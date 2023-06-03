import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SideBarComponent } from 'src/app/shared/side-bar/side-bar.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormUpdateTeamsComponent } from 'src/app/components/form-update-teams/form-update-teams.component';
import { PreviewTeamComponent } from 'src/app/components/preview-team/preview-team.component';
import { FormTeamsComponent } from 'src/app/components/form-teams/form-teams.component';
import { ListTeamsComponent } from 'src/app/components/list-teams/list-teams.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FormUpdateTeamsComponent,
    FormTeamsComponent,
    PreviewTeamComponent,
    ListTeamsComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
