import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechado'
})
export class FechadoPipe implements PipeTransform {
  transform(valores: string[]): string[] {
    const fechado = 'Fechado!';

    if (!valores || valores.length < 1) {
      return [fechado];
    } else {
      valores.map(valor => {
        if (valor === undefined || valor === '' || valor === null) {
          valor = fechado;
        }
      });

      return valores;
    }
  }
}
