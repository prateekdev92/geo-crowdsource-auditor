import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './/components/login/login.component';
import {AuditImagesComponent} from './/components/audit-images/audit-images.component';
import {AppRootContainerComponent} from './/components/app-root-container/app-root-container.component'
const routes: Routes = [
		{ path: 'login', component: LoginComponent },
		{ path: '', component: AppRootContainerComponent, 
		    children: [
		      { path: '', redirectTo: 'audit-images', pathMatch: 'full'},
			      { path: 'audit-images', 
	        component: AuditImagesComponent
	      }
			]
		}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
