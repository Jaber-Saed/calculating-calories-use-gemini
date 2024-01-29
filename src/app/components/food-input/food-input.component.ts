import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './food-input.component.html',
  styleUrl: './food-input.component.scss'
})
export class FoodInputComponent {
  @Output() calculateCalories = new EventEmitter<string>();
  @Output() uploadImage = new EventEmitter<File>();

  @ViewChild('imageInput') imageInput!: ElementRef;

  foodDescription: string = '';
  selectedImage: File | null = null;

  onCalculateCalories() {
    this.calculateCalories.emit(this.foodDescription);
  }

  onImageSelected(event: any) {
    const files = event.target.files as FileList;
    if (files.length > 0) {
      this.selectedImage = files[0];
      this.uploadImage.emit(this.selectedImage);
    }
  }

  showImageInput() {
    // Trigger a click on the file input when the user clicks the upload icon
    this.imageInput.nativeElement.click();
  }

}
