import { Pipe, PipeTransform } from '@angular/core';
import { DracheActivity } from './dracheactivity';

@Pipe({
  name: 'filterkind'
})
export class FilterkindPipe implements PipeTransform {

  transform(items: DracheActivity[], search: string, searchEssen: string, searchHomework: string): any[] {

    let fItems: DracheActivity[] = items;

    if (!items) {
        return [];
    }

    if (search.length > 0) {
      search = search.trim();
      fItems = fItems.filter(singleItem => singleItem.first_name.toLowerCase().startsWith(search.toLowerCase()));
    }

    if (searchEssen.length > 0) {
      if (searchEssen == 'true')
        fItems = fItems.filter(singleItem => singleItem.essenStatus);
      else 
        fItems = fItems.filter(singleItem => !singleItem.essenStatus);
    }
    
    if (searchHomework.length > 0) {
      if (searchHomework == 'true')
        fItems = fItems.filter(singleItem => singleItem.hausaufgabenStatus);
      else
        fItems = fItems.filter(singleItem => !singleItem.hausaufgabenStatus);
    }

    return fItems;
    //return items.filter(singleItem => singleItem.drachen);
  }
}
