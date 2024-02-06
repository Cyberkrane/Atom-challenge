import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!value || !Array.isArray(value)) {
      return value; 
    }

    const resultSearch = [];
    for (const movie of value) {
      if (movie.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSearch.push(movie);
      }
    }

    return resultSearch; 
  }
}
