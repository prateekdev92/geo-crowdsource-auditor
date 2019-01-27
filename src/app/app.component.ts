import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './common/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(public spinner: SpinnerService) {
	}

	OnInit(){
	}

}
