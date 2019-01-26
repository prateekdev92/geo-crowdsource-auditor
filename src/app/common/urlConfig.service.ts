import { Injectable } from '@angular/core';

@Injectable()
export class UrlConfigService {

	readServerUrl: string;
	writeServerUrl: string;

	constructor() {

		this.readServerUrl = 'https://api.myjson.com/';
		this.writeServerUrl = 'https://demo0929535.mockable.io/';

		// if (location.href.indexOf('prod.com') != -1) {

		// 	this.serverURL = "https://api.myjson.com/";

		// } else if (location.href.indexOf('demo.com') != -1) {

		// 	this.serverURL = "https://api.myjson.com/";

		// }


	}

	auditImages(){
		return {
			get_images: this.readServerUrl + "bins/jpfmg",
			postFeedback: this.writeServerUrl + "evaluate"
		}
	}



}