import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsermediaComponent } from './usermedia/usermedia.component';
import { TakepictureComponent } from './takepicture/takepicture.component';

const routes: Route[] = [
  {
    path: '',
    component: UsermediaComponent,
  },
  {
    path: 'takepicture',
    component: TakepictureComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
