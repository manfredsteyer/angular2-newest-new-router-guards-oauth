import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({ selector: '[emphasize]' })
export class Emphasize {

  public originalStyles: any;
  public _borderColor: string = "orange";

  @Input('emphasize') bgColor: string;
  @Input() set borderColor(color: string) {
    this._borderColor = color || this._borderColor;
  }

  constructor(private el: ElementRef) {
    this.originalStyles = {
      border: this.el.nativeElement.style.border,
      bgColor: this.el.nativeElement.style.backgroundColor
    };
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.toggleEmphasize(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleEmphasize(false);
  }

  toggleEmphasize(active) {
    if (active) {
      this.el.nativeElement.style.border = `2px solid ${this._borderColor}`;
      this.el.nativeElement.style.backgroundColor = this.bgColor || "yellow";
    } else {
      this.el.nativeElement.style.border = this.originalStyles.border;
      this.el.nativeElement.style.backgroundColor = this.originalStyles.bgColor;
    }
  }
}