import { Component,  ElementRef,  inject,  Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostListener()
  @Input({required: true}) label!: string;
  private el = inject(ElementRef);

  onClick() {
    console.log(`Control ${this.label} clicked`);
  }
}
