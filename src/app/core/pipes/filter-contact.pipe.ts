import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return value;
  }

}
