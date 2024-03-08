import { Routes } from '@angular/router';
import { PictureOfTheDayComponent } from './picture-of-the-day/picture-of-the-day.component';
import { RandomPicturesComponent } from './random-pictures/random-pictures.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

export const routes: Routes = [
    {path: 'random', component: RandomPicturesComponent},
    {path: 'carousel', component: ImageCarouselComponent},
    {path: '', component: PictureOfTheDayComponent}
];
