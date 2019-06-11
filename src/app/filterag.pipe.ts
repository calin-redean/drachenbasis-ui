import { Pipe, PipeTransform } from '@angular/core';
import { AG } from './ag'

@Pipe({
  name: 'filterag'
})
export class FilteragPipe implements PipeTransform {

  transform(items: AG[], searchKind: String, searchDay: String, searchStart: String, searchAGName: String): any {

    if (!items)
      return [];

    if (searchKind.length == 0 && searchDay.length ==0 && searchStart.length ==0 && searchAGName.length ==0)
    return items;

    if (searchKind.length > 0 && searchDay.length > 0 && searchStart.length > 0 && searchAGName.length > 0)
     return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase()) &&
          item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase()) &&
          item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
        )
    
    if (searchKind.length > 0 && searchDay.length > 0 && searchStart.length > 0 )
     return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase()) &&
          item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase())
        )

    if (searchKind.length > 0 && searchDay.length && searchAGName.length > 0)
    return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase()) &&
          item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
        )

    if (searchKind.length > 0 && searchStart.length > 0 && searchAGName.length > 0)
    return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase()) &&
          item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
        )

    if (searchDay.length > 0 && searchStart.length > 0 && searchAGName.length > 0)
        return items.filter(item=> 
            item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase()) &&
            item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase()) &&
            item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
          )
   

    if (searchKind.length > 0 && searchDay.length)
     return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase())
        )

    if (searchKind.length > 0 && searchStart.length > 0)
     return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase())
        )

    if (searchKind.length > 0 && searchAGName.length > 0)
    return items.filter(item=> 
          item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase()) &&
          item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
        )

    if (searchStart.length > 0 && searchAGName.length > 0)
    return items.filter(item=> 
        item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase()) &&
        item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
      )
  
    if (searchDay.length > 0 && searchStart.length > 0)
        return items.filter(item=> 
             item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase()) &&
             item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase())
           )

    if (searchDay.length > 0 && searchAGName.length > 0)
    return items.filter(item=> 
        item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase()) &&
        item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
      )
   
    if (searchDay.length > 0)
     return items.filter(item=> 
        item.day.toLocaleLowerCase().includes(searchDay.toLocaleLowerCase())
      )
    if (searchKind.length > 0)
     return items.filter(item=> 
      item.first_name.toLocaleLowerCase().startsWith(searchKind.toLocaleLowerCase())
    )
    if (searchStart.length > 0)
     return items.filter(item=> 
        item.von.toLocaleLowerCase().includes(searchStart.toLocaleLowerCase())
      )
    if (searchAGName.length > 0)
     return items.filter(item=> 
        item.ag_name.toLocaleLowerCase().includes(searchAGName.toLocaleLowerCase())
      )
  }
}
