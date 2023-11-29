import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform{
  transform(value: boolean): 'vuela' | 'no vuela' {
    // Si el value es true vuel, sino, no vuela
    return value ? 'vuela': 'no vuela'
  }

}
