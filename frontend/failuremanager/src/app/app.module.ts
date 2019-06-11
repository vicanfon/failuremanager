import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// to delete
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
// to delete

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlarmComponent } from './components/alarm/alarm.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlarmDetailComponent } from './components/alarm/alarm-detail/alarm-detail.component';
import { MachineComponent } from './components/machine/machine.component';
import { SigninComponent } from './auth/signin/signin.component';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import { MessagesComponent } from './components/messages/messages.component';
import {AuthGuardService} from './services/auth-guard.service';
import { SettingsComponent } from './components/settings/settings.component';
import { AlarmManualComponent } from './components/alarm/alarm-manual/alarm-manual.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { InterventionDetailComponent } from './components/intervention/intervention-detail/intervention-detail.component';
import { InterventionManualComponent } from './components/intervention/intervention-manual/intervention-manual.component';
import {DropdownModule} from 'primeng/dropdown';



// table
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {ChartModule} from 'primeng/chart';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserNewComponent } from './components/user/user-new/user-new.component';



@NgModule({
  declarations: [
    AppComponent,
    AlarmComponent,
    DashboardComponent,
    NavbarComponent,
    AlarmDetailComponent,
    MachineComponent,
    SigninComponent,
    MessagesComponent,
    SettingsComponent,
    AlarmManualComponent,
    InterventionComponent,
    InterventionDetailComponent,
    InterventionManualComponent,
    ToolbarComponent,
    UserComponent,
    UserDetailComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TableModule,
    SliderModule,
    ChartModule,
    DynamicDialogModule,
    ButtonModule,
    DialogModule,
    DropdownModule
  ],
  providers: [DataService, AuthService, AuthGuardService, DialogService, DynamicDialogRef, DynamicDialogConfig],
  bootstrap: [AppComponent],
  entryComponents: [AlarmDetailComponent, UserDetailComponent, UserNewComponent]
})
export class AppModule { }
