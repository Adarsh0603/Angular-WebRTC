import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { WebrtcService } from '../webrtc.service';

@Component({
  selector: 'app-takepicture',
  templateUrl: './takepicture.component.html',
  styleUrls: ['./takepicture.component.css'],
})
export class TakepictureComponent implements OnInit {
  localStream$!: Observable<MediaStream>;
  @ViewChild('canvas', { static: true }) canvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('video', { static: true }) video?: ElementRef<HTMLVideoElement>;

  isCaptured: boolean = false;
  constructor(private wr: WebrtcService) {}

  ngOnInit(): void {
    this.wr.getUserMedia(
      this.video?.nativeElement.width,
      this.video?.nativeElement.height
    );
    this.localStream$ = this.wr.localStream$;
  }

  onCapture() {
    var videoEl = this.video!!.nativeElement;

    this.canvas?.nativeElement.setAttribute('width', videoEl.width.toString());
    this.canvas?.nativeElement.setAttribute(
      'height',
      videoEl.height.toString()
    );
    this.canvas?.nativeElement
      .getContext('2d')
      ?.drawImage(
        this.video!.nativeElement,
        0,
        0,
        videoEl.width,
        videoEl.height
      );
    this.isCaptured = true;
  }
  download() {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = this.canvas!.nativeElement.toDataURL();
    link.click();
  }
}
