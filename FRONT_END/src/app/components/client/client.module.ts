import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared-module.module';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateDirective } from 'src/app/validate.directive';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createAccount', component: CreateAccountComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    // ValidateDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    // ValidateDirective,
  ]
})
export class ClientModule { }
