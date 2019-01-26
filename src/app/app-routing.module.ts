import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './/components/login/login.component';
import {AuditImagesComponent} from './/components/audit-images/audit-images.component';

const routes: Routes = [
		{ path: '', redirectTo: '/audit-images', pathMatch: 'full' },
		{ path: 'login', component: LoginComponent },
		{ path: 'audit-images', component: AuditImagesComponent }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
