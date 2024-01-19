import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PictureService } from '../picture.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  pictures: any[] = [];
  searchQuery:string = '' ;

  constructor(private pictureService:PictureService
    , private router :Router){}

    fullList() {  
    this.pictureService.getAllPictures().subscribe(pictures => {
      this.pictures = pictures;
    });
}

  onSearch(){ 
       this.pictureService.getAllPictures(this.searchQuery).subscribe(pictures => {
       this.pictures = pictures;
     });
  }

  onClick() {
    this.router.navigateByUrl("upload")
  }
}
