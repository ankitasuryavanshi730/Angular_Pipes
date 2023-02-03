import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pi'
})
export class PiPipe implements PipeTransform {

  transform(value: number,): number {
    return  Math.PI * value;
  }

}
