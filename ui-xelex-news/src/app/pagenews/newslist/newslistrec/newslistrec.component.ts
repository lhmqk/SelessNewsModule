import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistrecitemComponent } from './newslistrecitem/newslistrecitem.component';
import { NewsListRecItem } from './newslistrecitem/news-list-rec-item';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-newslistrec',
  standalone: true,
  imports: [CommonModule, NewslistrecitemComponent],
  templateUrl: './newslistrec.component.html',
  styleUrls: ['./newslistrec.component.css'],
})
export class NewslistrecComponent {
  newsListRecItemList: NewsListRecItem[] = [];
  newsService: NewsService = inject(NewsService);

  constructor() {
    this.newsService.getAllNewsItem().then((newsListRecItemList) => {
      this.newsListRecItemList = newsListRecItemList;
    });
  }
}
