import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFechado]'
})
export class FechadoDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input() valor: string[];

  ngOnInit(): void {
    if (!this.valor || this.valor.length < 1) {
      this.alterarPropriedade();
    } else {
      this.valor.forEach(valor => {
        if (valor === '') {
          this.alterarPropriedade();
        }
      });
    }
    return;
  }

  alterarPropriedade() {
    const elemento = this.elementRef.nativeElement;
    this.renderer.setStyle(elemento, 'font-weight', '500');
    this.renderer.setStyle(elemento, 'color', 'red');
    return;
  }
}
