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

  getSupportedMimeTypes() {
    const possibleTypes = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=h264,opus',
      'video/mp4;codecs=h264,aac',
    ];
    return possibleTypes.filter((mimeType) => {
      return MediaRecorder.isTypeSupported(mimeType);
    });
  }
}
