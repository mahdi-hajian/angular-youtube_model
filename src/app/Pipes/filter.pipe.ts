import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // اگر غیر فعال باشد همیشه فیلترینگ رو انجام میدهد. مثلا اگر سرچ کرده باشیم هم هی بروزرسانی میکنه
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, fString: string, prop:string): any {
    if (value.length === 0 || fString === '') {
      return value;
    } 
    const tempArray =[];
    for (const item of value) {
      if (item[prop] === fString) {
        tempArray.push(item);
      }
    }
    return tempArray;
  }

}
