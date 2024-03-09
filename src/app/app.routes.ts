import { Routes } from '@angular/router';
import { PictureOfTheDayComponent } from './picture-of-the-day/picture-of-the-day.component';
import { RandomPicturesComponent } from './random-pictures/random-pictures.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { TieredMenuComponent } from './tiered-menu/tiered-menu.component';

export const routes: Routes = [
    {path: 'galleria', component: RandomPicturesComponent},
    {path: 'carousel', component: ImageCarouselComponent},
    {path: 'user', component: RandomUserComponent},
    {path: 'tiered', component: TieredMenuComponent},
    {path: '', component: PictureOfTheDayComponent}
];
