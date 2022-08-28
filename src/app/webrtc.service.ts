import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebrtcService {
  localStream$ = new BehaviorSubject<MediaStream>(new MediaStream());
  constructor() {}

  async getUserMedia() {
    var localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    this.localStream$.next(localStream);
  }
}
