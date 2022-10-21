import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (value === '') {
      return value;
    }

    if (value.length % 2 === 0) {
    }
  }
}
