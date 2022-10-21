import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse', pure: false })
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (!value) {
      return value;
    } else {
      let newStr: string = '';

      for (let i = value.length - 1; i >= 0; i--) {
        newStr += value[i];
      }
      return newStr;
    }
  }
}
