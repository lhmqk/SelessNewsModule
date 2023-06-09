import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ViewEncapsulation } from '@angular/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swipercategorie',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './swipercategorie.component.html',
  styleUrls: ['./swipercategorie.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipercategorieComponent {}
