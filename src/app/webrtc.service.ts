import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebrtcService {
  localStream$ = new BehaviorSubject<MediaStream>(new MediaStream());
  constructor() {}

  async getUserMedia(width = 640, height = 480) {
    var localStream = await navigator.mediaDevices.getUserMedia({
      video: { width: width, height: height },
      audio: false,
    });

    this.localStream$.next(localStream);
  }
}
