import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsermediaComponent } from './usermedia/usermedia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { TakepictureComponent } from './takepicture/takepicture.component';
import { RecordvideoComponent } from './recordvideo/recordvideo.component';
import { MutevoiceDirective } from './directives/mutevoice.directive';
import { ScreenStreamComponent } from './screen-stream/screen-stream.component';
@NgModule({
  declarations: [
    AppComponent,
    UsermediaComponent,
    NavbarComponent,
    TakepictureComponent,
    RecordvideoComponent,
    MutevoiceDirective,
    ScreenStreamComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
