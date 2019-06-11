import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AlarmComponent } from './components/alarm/alarm.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachineComponent } from './components/machine/machine.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './services/auth-guard.service';
import {SettingsComponent} from './components/settings/settings.component';
import {AlarmManualComponent} from './components/alarm/alarm-manual/alarm-manual.component';
import {InterventionComponent} from './components/intervention/intervention.component';
import {InterventionManualComponent} from './components/intervention/intervention-manual/intervention-manual.component';
import {InterventionDetailComponent} from './components/intervention/intervention-detail/intervention-detail.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'alarms', component: AlarmComponent, canActivate: [AuthGuardService] },
  { path: 'machines/:id', component: MachineComponent, canActivate: [AuthGuardService] },
  { path: 'interventions', component: InterventionComponent, canActivate: [AuthGuardService] },
  { path: 'interventions/:id', component: InterventionDetailComponent, canActivate: [AuthGuardService] },
  { path: 'master-data', component: SettingsComponent, canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent },
  { path: 'createAlarm', component: AlarmManualComponent, canActivate: [AuthGuardService] },
  { path: 'createIntervention', component: InterventionManualComponent, canActivate: [AuthGuardService] },
  { path: 'users', component: UserComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
