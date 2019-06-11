import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { PresenceComponent }  from './presence/presence.component';
import { WebcamsComponent }  from './webcams/webcams.component';
import { RfidreaderComponent }  from './rfidreader/rfidreader.component';
import { ActivityComponent }  from './activity/activity.component';
import { EssenComponent }  from './essen/essen.component';
import { HomeworkComponent }  from './homework/homework.component';
import { AgComponent }  from './ag/ag.component';
import { AgadminComponent }  from './agadmin/agadmin.component';

const routes: Routes = [
  { path: '', redirectTo: '/activity', pathMatch: 'full' },
  { path: 'rooms', component: DashboardComponent },
  { path: 'webcams', component: WebcamsComponent },
  { path: 'readers', component: RfidreaderComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'essen', component: EssenComponent },
  { path: 'homework', component: HomeworkComponent },
  { path: 'ag', component: AgComponent },
  { path: 'agadmin', component: AgadminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
