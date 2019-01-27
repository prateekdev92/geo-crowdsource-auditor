import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-root-container',
  templateUrl: './app-root-container.component.html',
  styleUrls: ['./app-root-container.component.css']
})
export class AppRootContainerComponent implements OnInit {

  constructor(private router : Router) { }

  public pendingCount = 0;

  	logout():void {
		this.router.navigate(["login"]);
	}

	showCount(data: any){
		this.pendingCount = data;
	}

  ngOnInit() {
  }

}
