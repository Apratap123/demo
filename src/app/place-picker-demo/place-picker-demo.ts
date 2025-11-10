import { Component, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-place-picker-demo',
  imports: [],
  templateUrl: './place-picker-demo.html',
  styleUrl: './place-picker-demo.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlacePickerDemo implements AfterViewInit {
  @ViewChild('placePicker', { static: false }) placePickerRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // Listen for place selection events from the web component
    const el = this.placePickerRef?.nativeElement;
    if (el) {
      el.addEventListener('gmpx-place-changed', (event: any) => {
        console.log('Place selected:', event.detail);
        this.onPlaceSelected(event.detail);
      });
    }
  }

  onPlaceSelected(placeDetails: any) {
    console.log('Selected place details:', placeDetails);
    // Handle the selected place data here
    // You can emit events, update properties, call services, etc.
  }
}
