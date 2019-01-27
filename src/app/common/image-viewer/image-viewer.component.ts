import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent implements OnInit {

	@Input() url: any;
	@Output() closeEmmit = new EventEmitter<any>();

	constructor() { }

	closeViewer(event) {
	    this.closeEmmit.emit(event);
	}


	ngOnInit() {
	}

}
