import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  pictures: any[] = [];

  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    this.pictureService.getAllPictures().subscribe(pictures => {
      this.pictures = pictures;
    });
  }
}
