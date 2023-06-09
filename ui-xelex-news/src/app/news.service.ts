import { Injectable } from '@angular/core';
import { NewsItem } from './news-item';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url = 'http://localhost:5119/news';
  constructor() {}

  async getAllNewsItem(): Promise<NewsItem[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
