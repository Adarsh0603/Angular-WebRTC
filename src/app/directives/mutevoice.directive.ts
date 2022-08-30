import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMuteVoice]',
})
export class MutevoiceDirective {
  constructor(private elRef: ElementRef<HTMLVideoElement>) {
    this.elRef.nativeElement.volume = 0;
  }
}
