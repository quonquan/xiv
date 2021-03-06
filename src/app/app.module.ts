import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Angular materials.
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

// Angular animations for material.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components.
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';

// Services.
import { FirebaseService } from './shared/firebase_service';
import { UserService } from './shared/user_service';
import { LoginStateService } from './shared/login_state_service';
import { ScheduleService } from './shared/schedule_service';

const appRoutes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'members', redirectTo: 'schedule', pathMatch: 'full' },
  { path: '', redirectTo: 'schedule', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    ScheduleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [FirebaseService, UserService, LoginStateService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
