import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Angular materials.
import { MatButtonModule, MatToolbarModule } from '@angular/material';

// Angular animations for material.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components.
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

// Services.
import { FirebaseService } from './shared/firebase_service';
import { UserService } from './shared/user_service';
import { LoginStateService } from './shared/login_state_service';

const appRoutes: Routes = [
  { path: '/schedule' },
  { path: '/members' },
  { path: '', redirectTo: '/schedule', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent, MainComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [FirebaseService, UserService, LoginStateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
