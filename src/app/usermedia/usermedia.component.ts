import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebrtcService } from '../webrtc.service';

@Component({
  selector: 'app-usermedia',
  templateUrl: './usermedia.component.html',
  styleUrls: ['./usermedia.component.css'],
})
export class UsermediaComponent implements OnInit {
  localStream!: MediaStream;
  constructor(private wr: WebrtcService) {}

  ngOnInit(): void {
    this.wr.getUserMedia();
    this.wr.localStream$.subscribe((mediaStream) => {
      if (mediaStream) this.localStream = mediaStream;
    });
  }
}
