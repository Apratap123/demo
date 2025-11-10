import { Routes } from '@angular/router';
import { PlacePickerDemo } from './place-picker-demo/place-picker-demo';

export const routes: Routes = [
  { path: '', component: PlacePickerDemo },
  { path: 'place-picker', component: PlacePickerDemo },
];
