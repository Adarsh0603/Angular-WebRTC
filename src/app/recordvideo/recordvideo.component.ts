import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { WebrtcService } from '../webrtc.service';

@Component({
  selector: 'app-recordvideo',
  templateUrl: './recordvideo.component.html',
  styleUrls: ['./recordvideo.component.css'],
})
export class RecordvideoComponent implements OnInit, OnDestroy {
  localStream$!: Observable<MediaStream>;
  stream?: MediaStream;
  streamSub!: Subscription;

  isRecorded: boolean = false;
  isRecording: boolean = false;

  supportedMimeTypes: string[] = [];
  selectedMimeType: string = '';

  recordedSlices: any[] = [];
  recordedData: SafeUrl = '';
  mediaRecorder?: MediaRecorder;

  constructor(private wr: WebrtcService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.wr.getUserMedia();
    this.localStream$ = this.wr.localStream$;
    this.streamSub = this.localStream$.subscribe((stream) => {
      if (stream) this.stream = stream;
    });
    this.supportedMimeTypes = this.wr.getSupportedMimeTypes();
    this.selectedMimeType = this.supportedMimeTypes[0];
  }

  onRecordStartStop() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this.startRecording();
    } else this.stopRecording();
  }

  startRecording() {
    this.isRecorded = false;
    this.recordedSlices = [];

    try {
      this.mediaRecorder = new MediaRecorder(this.stream!, {
        mimeType: this.selectedMimeType,
      });
    } catch (e) {
      console.log('Error while creating media recorder: ' + e);
      return;
    }

    this.isRecording = true;

    this.mediaRecorder.ondataavailable = (event) => {
      this.recordedSlices = [...this.recordedSlices, event.data];
    };
    this.mediaRecorder.start();
  }

  stopRecording() {
    this.mediaRecorder!.stop();
    this.isRecorded = true;
    this.isRecording = false;
    this.recordedData = '';
  }
  playRecording() {
    const mimeType = this.selectedMimeType.split(';', 1)[0];
    const combinedSlice = new Blob(this.recordedSlices, { type: mimeType });
    this.recordedData = this.sanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(combinedSlice)
    );
  }
  download() {
    const blob = new Blob(this.recordedSlices, { type: 'video/webm' });
    const url = window.URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.download = 'filename.webm';
    link.href = url;
    link.click();
  }

  ngOnDestroy(): void {
    this.streamSub.unsubscribe();
  }
}
