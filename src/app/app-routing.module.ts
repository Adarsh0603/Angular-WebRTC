import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsermediaComponent } from './usermedia/usermedia.component';
import { TakepictureComponent } from './takepicture/takepicture.component';
import { RecordvideoComponent } from './recordvideo/recordvideo.component';
import { ScreenStreamComponent } from './screen-stream/screen-stream.component';

const routes: Route[] = [
  {
    path: '',
    component: UsermediaComponent,
  },
  {
    path: 'takepicture',
    component: TakepictureComponent,
  },
  {
    path: 'recordstream',
    component: RecordvideoComponent,
  },
  {
    path: 'screenstream',
    component: ScreenStreamComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
