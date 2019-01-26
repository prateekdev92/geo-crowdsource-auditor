import { Component, OnInit, ViewChild } from '@angular/core';
import { AuditImagesService } from './audit-images.service';
import { MatTableDataSource, MatTableModule, MatSort} from '@angular/material';
import { SpinnerService } from '..//..//common/spinner.service';

@Component({
  selector: 'app-audit-images',
  templateUrl: './audit-images.component.html',
  styleUrls: ['./audit-images.component.css']
})

export class AuditImagesComponent implements OnInit {

  constructor(private auditSrvc: AuditImagesService, private spinner: SpinnerService) { }

  	public listing;
  	public clicked = false;

  	displayedColumns: string[] = ['id', 'location'  ,'timestamp', 'landobservations', 'photos', 'action'];

  	@ViewChild(MatSort) sort: MatSort;

  	searchReports() {

  		this.spinner.showLoading();

	    this.auditSrvc.getImages().subscribe((data:any = {}) => {
	      
	      this.listing = new MatTableDataSource(data);

	      this.listing.sort = this.sort;

	      this.spinner.hideLoading()
      	    
	    });  

	}


	ngOnInit() {
		this.searchReports();
		
	}

}
