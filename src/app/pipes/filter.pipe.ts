import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string): unknown {
    if (value.length === 0) {
      return value;
    }

    let arr = [];

    for (let item of value) {
      if (item.status === filterString) {
        arr.push(item);
      }
    }

    return arr;
  }
}
