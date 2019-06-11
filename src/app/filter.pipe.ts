import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDrache'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string): any[] {
    if (!items) {
        return [];
    }
    if (!search) {
        return items;
    }

    return items.filter(singleItem => singleItem.toLowerCase().startsWith(search.toLowerCase()));
    //return items.filter(singleItem => singleItem.drachen);
  }

}
