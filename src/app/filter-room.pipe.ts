import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero'
import { forEach } from '@angular/router/src/utils/collection';
@Pipe({
  name: 'filterRoom'
})
export class FilterRoomPipe implements PipeTransform {

  transform(items: Hero[], search: string): Hero[] {
    if (!items) {
        return [];
    }
    if (!search) {
        return items;
    }
    return items.filter(hero => hero.drachen.find(drache=>drache.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())));
    //return items.filter(singleItem => singleItem.toLowerCase().includes(search.toLowerCase()));
    //return items.filter(singleItem => singleItem.drachen);
  }
}
