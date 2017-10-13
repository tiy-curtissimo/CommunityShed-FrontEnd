import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { LogInComponent } from '../log-in/log-in.component';
import { MyshedComponent } from '../myshed/myshed.component';
import { MygroupsComponent } from '../mygroups/mygroups.component';
import { CommunityShedComponent } from '../community-shed/community-shed.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { GroupdetailsComponent } from '../groupdetails/groupdetails.component';
import { GroupdetailsmembersComponent } from '../groupdetailsmembers/groupdetailsmembers.component';
import { TooldetailsComponent } from '../tooldetails/tooldetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',  component: HomepageComponent },
  { path: 'signup',  component: SignUpComponent },
  { path: 'login',  component: LogInComponent },
  { path: 'mygroups',  component: MygroupsComponent },
  { path: 'communityshed', component: CommunityShedComponent },
  { path: 'requestform', component: RequestFormComponent },
  { path: 'myshed', component: MyshedComponent },
  { path: 'groupdetails', component: GroupdetailsComponent },
  { path: 'groupdetailsmembers', component: GroupdetailsmembersComponent },
  { path: 'tooldetails/:id', component: TooldetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutesModule { }
