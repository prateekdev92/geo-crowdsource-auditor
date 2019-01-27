import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { AuditImagesService } from './audit-images.service';
import { MatTableDataSource, MatTableModule, MatSort} from '@angular/material';
import { SpinnerService } from '..//..//common/spinner.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatInput} from '@angular/material';
import {AuditImagesActionComponent} from './audit-images-action/audit-images-action.component'

@Component({
  selector: 'app-audit-images',
  templateUrl: './audit-images.component.html',
  styleUrls: ['./audit-images.component.css']
})


export class AuditImagesComponent implements OnInit {

@Output() getPendingCount = new EventEmitter();

  constructor(private auditSrvc: AuditImagesService, private spinner: SpinnerService, 
  	public dialog: MatDialog) { }

  	public listing;
  	public clicked = false;
  	public loadImageViewer = false;
  	public showImage = false;
  	

  	displayedColumns: string[] = ['id', 'location'  ,'timestamp', 'landobservations', 'photos', 'action'];

  	@ViewChild(MatSort) sort: MatSort;

  	searchReports() {

  		this.spinner.showLoading();

	    this.auditSrvc.getImages().subscribe((data:any = {}) => {
	      
	      this.listing = new MatTableDataSource(data);

	      this.listing.sort = this.sort;

	      this.sendCount();

	      this.spinner.hideLoading();
      	    
	    });  

	}

  	openDialog(i): void {

	    const dialogRef = this.dialog.open(AuditImagesActionComponent, {
	      width: '800px',
	      height: '266px',
	      data: i
	    });

	    dialogRef.afterClosed().subscribe(result => {

	    	if(result){
	    		let idx = this.listing.data.indexOf(result);
	    		if(idx!=-1){
	    			this.listing.data.splice(idx, 1);
	    			this.listing = new MatTableDataSource(this.listing.data);
	    			this.sendCount();
	    		}
	    		
	    	}
	    });

  	}

  	sendCount() {
  		this.getPendingCount.emit(this.listing.data.length);
  	}

	ngOnInit() {
		this.searchReports();
		
	}

}
