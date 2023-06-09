import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistcatBtComponent } from './newslistcat-bt/newslistcat-bt.component';

@Component({
  selector: 'app-newslistcat',
  standalone: true,
  imports: [CommonModule, NewslistcatBtComponent],
  templateUrl: './newslistcat.component.html',
  styleUrls: ['./newslistcat.component.css'],
})
export class NewslistcatComponent {}
