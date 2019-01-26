import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuditImagesComponent } from '../audit-images.component';
import { AuditImagesService } from '../audit-images.service';
import { ToastrService } from 'ngx-toastr';

export interface DialogData {
  photos: string;
}

@Component({
  selector: 'app-audit-images-action',
  templateUrl: './audit-images-action.component.html',
  styleUrls: ['./audit-images-action.component.css']
})

export class AuditImagesActionComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AuditImagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private auditSrvc: AuditImagesService, private toaster: ToastrService) {}

		public feedback:any = {};
		public action_items = [
			{id:'1', name:"Approved"},
			{id:'2', name:"Rejected Because of Photos"},
			{id:'3', name:"Rejected Because of Classifications"},
			{id:'4', name:"Rejected Because of Location"},
			{id:'5', name:"Rejected"}

		];

		public images;
		public imageIndex = 0;

		nextImage(){
			if(this.imageIndex < (this.images.length-1)){
			  ++this.imageIndex;
			}
		}

		prevImage(){
			if(this.imageIndex > 0){
			  --this.imageIndex;
			}
		}

		submitFeedback(){
			
			this.auditSrvc.submitFeedback(this.feedback).subscribe((data:any = {}) => {
	     	
	     		this.toaster.success("Successfully Submitted");

	     		this.closeDialog(true);
      	    
	    	});  
		}

		closeDialog(flag){
			if(flag){
			 this.dialogRef.close(this.data);
			}
		}

		ngOnInit() {
			this.images = this.data.photos;
		}

}
