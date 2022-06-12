import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ImageGalleryData } from '../image-gallery.interface';

@Component({
  selector: 'be-image-gallery-modal',
  templateUrl: './image-gallery-modal.component.html',
  styleUrls: ['./image-gallery-modal.component.scss'],
})
export class ImageGalleryModalComponent implements OnInit {
  public modalImageSrc: string;
  public modalImageId: number;

  public data: ImageGalleryData[];

  constructor(private modalRef: MatDialogRef<ImageGalleryModalComponent>) {}

  ngOnInit() {}

  closeModal() {
    this.modalRef.close();
  }
}
