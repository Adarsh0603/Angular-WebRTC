import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { WebrtcService } from '../webrtc.service';

@Component({
  selector: 'app-usermedia',
  templateUrl: './usermedia.component.html',
  styleUrls: ['./usermedia.component.css'],
})
export class UsermediaComponent implements OnInit {
  localStream$!: Observable<MediaStream | null>;
  constructor(private wr: WebrtcService) {}

  ngOnInit(): void {
    this.localStream$ = this.wr.localStream$;
  }

  onClick() {
    this.wr.getUserMedia(800, 600);
  }
}
