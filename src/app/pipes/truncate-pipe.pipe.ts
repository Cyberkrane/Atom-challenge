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
}
