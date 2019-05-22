import { Component, OnInit , ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit} from '@angular/core';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css'],
})
export class ThumbnailComponent implements OnInit, AfterViewInit {

  @Input() public user : User;

  @Input() public file : File;

  @Output() public loaded = new EventEmitter<File>();

  @Output() public onLoadError = new EventEmitter<any>();

  @ViewChild('thumbnailCanvas') public thumbnailView: ElementRef;

  private thumbnailCanvas: HTMLCanvasElement;


  constructor() { }

  ngOnInit() {
    this.thumbnailCanvas = this.thumbnailView.nativeElement;
  }

  ngAfterViewInit(){
    try{
      this.loadThumbnail(this.file);
    }catch (error){
      this.onLoadError.emit(error);
    }
  }

  private loadThumbnail(file : File){
    this.loaded.emit(file);
  }

  

}
