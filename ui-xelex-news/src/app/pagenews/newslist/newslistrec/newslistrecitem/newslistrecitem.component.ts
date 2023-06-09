import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListRecItem } from './news-list-rec-item';

@Component({
  selector: 'app-newslistrecitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newslistrecitem.component.html',
  styleUrls: ['./newslistrecitem.component.css'],
})
export class NewslistrecitemComponent {
  @Input() newsListRecItem!: NewsListRecItem;
}
