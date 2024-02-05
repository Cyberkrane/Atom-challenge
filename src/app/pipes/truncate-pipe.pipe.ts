import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipePipe implements PipeTransform {

  transform(value: string) {
    if (value.length > 10) {
      return value.substring(0, 15) + '...';
    }
    return value;
  }

  // transform(value: string, length: number, symbol: string) {
  //   return value.split(' ').slice(0, length).join(' ') + symbol;
  // }

}
