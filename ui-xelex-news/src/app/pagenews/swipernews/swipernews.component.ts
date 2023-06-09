import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipernewsItem } from './swipernews-item/swipernews-item';
import { NewsService } from 'src/app/news.service';

import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ViewEncapsulation } from '@angular/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swipernews',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './swipernews.component.html',
  styleUrls: ['./swipernews.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipernewsComponent {
  swipernewsItemList: SwipernewsItem[] = [];
  newsService: NewsService = inject(NewsService);

  constructor() {
    this.newsService.getAllNewsItem().then((swipernewsItemList) => {
      this.swipernewsItemList = swipernewsItemList;
    });
  }
}
