import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistcatItemComponent } from '../newslistcat-item/newslistcat-item.component';
import { NewsListCatItem } from '../newslistcat-item/news-list-cat-item';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-newslistcat-bt',
  standalone: true,
  imports: [CommonModule, NewslistcatItemComponent],
  templateUrl: './newslistcat-bt.component.html',
  styleUrls: ['./newslistcat-bt.component.css'],
})
export class NewslistcatBtComponent {
  findBt(people: any[]): any[] {
    return people.filter((p) => p.categorie == 'Bản tin');
  }

  newsListCatItemList: NewsListCatItem[] = [];

  newsService: NewsService = inject(NewsService);

  constructor() {
    this.newsService.getAllNewsItem().then((newsListCatItemList) => {
      this.newsListCatItemList = newsListCatItemList;
    });
  }
}
