import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  element : HTMLAnchorElement;
  @HostListener('mouseover') onmouseover(){
    this.el.nativeElement.style.backgroundColor= 'pale yellow';
  }
  @HostListener('mouseenter') onmouseenter(){
    this.el.nativeElement.style.backgroundColor= 'sky blue';
  }
 /* @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.background= 'grey';
  }
 */
  @HostListener('mouseout') onmouseout(){
    this.el.nativeElement.style.backgroundColor= 'white';
  }
  constructor(private el :ElementRef, private render: Renderer) {
    console.log(el);
    el.nativeElement.style.background = 'skyblue';
   }

}
