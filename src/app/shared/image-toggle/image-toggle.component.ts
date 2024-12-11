import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-image-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-toggle.component.html',
  styleUrl: './image-toggle.component.css'
})
export class ImageToggleComponent {
  @Input() image1: string = '';
  @Input() image2: string = '';
  @Input() buttonText: string = '';

  @Output() buttonClicked = new EventEmitter<void>();

  isButtonEnabled = false;
  currentImage: string = '';
  private isInsideComponent: boolean = false;

  ngOnInit(): void {
    this.currentImage = this.image1;
  }

  onSingleClick(): void {
    this.currentImage = this.image2;
  }

  onDoubleClick(): void {
    this.isButtonEnabled = true;
    this.buttonClicked.emit();
  }

  onComponentClick(event: MouseEvent): void {
    this.isInsideComponent = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isInsideComponent) {
      this.resetImage();
    }
    this.isInsideComponent = false;
  }

  resetImage(): void {
    this.currentImage = this.image1;
  }

}
