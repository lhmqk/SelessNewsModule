import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistrecComponent } from './newslistrec/newslistrec.component';
import { NewslistcatComponent } from './newslistcat/newslistcat.component';

@Component({
  selector: 'app-newslist',
  standalone: true,
  imports: [CommonModule, NewslistrecComponent, NewslistcatComponent],
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css'],
})
export class NewslistComponent {}
