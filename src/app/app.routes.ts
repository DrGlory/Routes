// import { Routes } from '@angular/router';
// export const routes: Routes = [];

// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];



