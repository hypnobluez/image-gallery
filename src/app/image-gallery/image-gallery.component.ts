import { Component, OnInit, Input } from '@angular/core';
import { ImageGalleryData } from './image-gallery.interface';
import { MatDialog } from '@angular/material/dialog';

import { ImageGalleryModalComponent } from './image-gallery-modal/image-gallery-modal.component';

@Component({
  selector: 'be-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  @Input() data: ImageGalleryData[];

  @Input() column: number = 2;
  limit = 4;
  indexArr: any[] = [];

  constructor(private modal: MatDialog) {}

  ngOnInit() {
    let rest = this.data.length % this.limit;
    let count = Math.floor(this.data.length / this.limit);
    this.indexArr = new Array(this.limit + 1).fill(count);
    this.indexArr[0] = 0;
    for (var i = 1; i < this.indexArr.length; i++) {
      this.indexArr[i] = this.indexArr[i - 1] + count;
      if (rest != 0) {
        this.indexArr[i]++;
        rest--;
      }
    }
  }

  showModal(e, id) {
    e.preventDefault();
    const dialogRef = this.modal.open(ImageGalleryModalComponent, {
      panelClass: 'modal-lg',
    });
    dialogRef.componentInstance.modalImageSrc = this.data[id - 1].url;
    dialogRef.componentInstance.modalImageId = id;
    dialogRef.componentInstance.data = this.data;
  }
}
