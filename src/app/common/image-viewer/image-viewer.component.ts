import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent implements OnInit {

	@Input() url: string;
	@Output() onClick = new EventEmitter<any>();

	constructor() { }

	onClickButton(event) {
	    this.onClick.emit(event);
	}

	ngOnInit() {
	}

}
