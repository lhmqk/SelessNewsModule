import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListCatItem } from './news-list-cat-item';

@Component({
  selector: 'app-newslistcat-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newslistcat-item.component.html',
  styleUrls: ['./newslistcat-item.component.css'],
})
export class NewslistcatItemComponent {
  @Input() newsListCatItem!: NewsListCatItem;
}
