import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenewsComponent } from './pagenews/pagenews.component';

const routes: Routes = [{ path: 'news', component: PagenewsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
