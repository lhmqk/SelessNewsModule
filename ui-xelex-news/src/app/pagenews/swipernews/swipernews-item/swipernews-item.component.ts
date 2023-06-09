import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipernewsItem } from './swipernews-item';

import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ViewEncapsulation } from '@angular/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swipernews-item',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './swipernews-item.component.html',
  styleUrls: ['./swipernews-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipernewsItemComponent {
  @Input() swipernewsItem!: SwipernewsItem;
}
