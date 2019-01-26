import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from '../../common/urlConfig.service';

@Injectable({
  providedIn: 'root'
})
export class AuditImagesService {

  constructor(private urlConfig: UrlConfigService, private http: HttpClient) { }

  getImages(): Observable<any> {

	var url = this.urlConfig.auditImages().get_images;

	 return this.http.get(url).pipe(
	     map(this.extractData));
	}

	private extractData(res: Response) {
		let body = res;
		return body || { };
	}

}