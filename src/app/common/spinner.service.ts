import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

	public loading = false;

	constructor(){}

	showLoading(){
		this.loading = true;
	}

	getLoading(){
		return this.loading;
	}
	
	hideLoading(){
		this.loading = false;
	}
	
}