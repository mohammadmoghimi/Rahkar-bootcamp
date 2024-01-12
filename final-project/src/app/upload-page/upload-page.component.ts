import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.scss'
})
export class UploadPageComponent {
  description: string = '';
  selectedFile: File | null = null;

  constructor(private pictureService: PictureService) {}

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
  formData.append('description', this.description);
      formData.append('image', this.selectedFile);
      this.pictureService.uploadPicture(this.description , this.selectedFile).subscribe(response => {
        console.log('Picture uploaded successfully:', response);});
}
}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
