import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebrtcService {
  localStream$ = new BehaviorSubject<MediaStream>(new MediaStream());
  screenStream$ = new BehaviorSubject<MediaStream>(new MediaStream());
  constructor() {}

  async getUserMedia(width = 640, height = 480) {
    console.log('here');
    try {
      var localStream = await navigator.mediaDevices.getUserMedia({
        video: { width: width, height: height },
        audio: true,
      });
      console.log('down');

      this.localStream$.next(localStream);
    } catch (e) {
      console.log(e);
    }
  }

  async getDisplayMedia(audio: boolean = true) {
    var screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    var audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    var audioTrack;
    [audioTrack] = audioStream.getAudioTracks();
    screenStream.addTrack(audioTrack);
    this.screenStream$.next(screenStream);
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
