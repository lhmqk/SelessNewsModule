import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipernewsComponent } from './swipernews/swipernews.component';
import { SwipercategorieComponent } from './swipercategorie/swipercategorie.component';
import { NewslistComponent } from './newslist/newslist.component';

@Component({
  selector: 'app-pagenews',
  standalone: true,
  imports: [
    CommonModule,
    SwipernewsComponent,
    SwipercategorieComponent,
    NewslistComponent,
  ],
  templateUrl: './pagenews.component.html',
  styleUrls: ['./pagenews.component.css'],
})
export class PagenewsComponent {}
