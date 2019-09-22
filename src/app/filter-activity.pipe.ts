import { Pipe, PipeTransform } from '@angular/core';
import { DracheActivity } from './dracheactivity'

@Pipe({
  name: 'filterActivity'
})
export class FilterActivityPipe implements PipeTransform {

  transform(items: DracheActivity[], search: string, searchclass: string, searchgroup: string, arrival: string, leaving: string, presence: string ): any {

    if (!items) {
      return [];
    }

    if (search.length == 0 && searchclass.length == 0 && searchgroup.length == 0 && presence.length == 0 && arrival.length == 0 && leaving.length == 0)
    return items;
    
    if (search.length>0 && searchclass.length>0 && presence.length>0 && arrival.length>0 && leaving.length >0 ){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                  singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                  singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                  singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) &&
                  singleItem.status.includes(presence)
                )
      );
    }
    if (searchclass.length>0 && presence.length>0 && arrival.length>0 && leaving.length >0 ){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                  singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                  singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) &&
                  singleItem.status.includes(presence)
                )
      );
    }

    if (search.length>0 && presence.length>0 && arrival.length>0 && leaving.length >0 ){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                  singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                  singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) &&
                  singleItem.status.includes(presence)
                )
      );
    }

    if (search.length>0 && searchclass.length>0 && arrival.length>0 && leaving.length >0 ){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                  singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                  singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                  singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase())
                )
      );
    }    
    
    if (search.length>0 && searchclass.length>0 && presence.length>0 && leaving.length >0 ){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                  singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                  singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) &&
                  singleItem.status.includes(presence)
                )
      );
    }

    if ( presence.length>0 && arrival.length>0 && leaving.length > 0){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                  singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) &&
                  singleItem.status.includes(presence)
                )
      );
    }

    if (search.length>0 && searchclass.length>0 && presence.length>0 && arrival.length>0){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                  singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                  singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                  singleItem.status.includes(presence)
                )
      );
    }


    if (search.length>0 && searchclass.length>0){
      search = search.trim();
      return items.filter(
        singleItem => 
                  (
                  singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                  singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase())
                )
      );  
    }  
      if (search.length>0 && presence.length>0){
        search = search.trim();
        return items.filter(
          singleItem => 
                    (
                    singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) &&
                    singleItem.status.includes(presence)
                  )
        );
      }         
      if (searchclass.length>0 && presence.length>0){
        search = search.trim();
        return items.filter(
          singleItem => 
                    (
                    singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                    singleItem.status.includes(presence)
                  )
        );
      }

      if (arrival.length>0 && presence.length>0){
        return items.filter(
          singleItem => 
                    (
                    singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                    singleItem.status.includes(presence)
                  )
        );
      }

      if (leaving.length>0 && presence.length>0){
        return items.filter(
          singleItem => 
                    (
                    singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) &&
                    singleItem.status.includes(presence)
                  )
        );
      }


      if (searchclass.length> 0 && arrival.length>0 && leaving.length>0){
        return items.filter(
          singleItem => 
                    (
                    singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                    singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase()) &&
                    singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) 
                  )
        );
      }
      

      if (arrival.length>0 && leaving.length>0){
        return items.filter(
          singleItem => 
                    (
                    singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase()) &&
                    singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase()) 
                  )
        );
      }

      if (search.length>0){
        search = search.trim();
        return items.filter(
          singleItem => 
                    (
                    singleItem.first_name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
                  )
        );
      }               
      if (searchclass.length>0){
        search = search.trim();
        return items.filter(
          singleItem => 
                    (
                    singleItem.schoolclass.toLocaleLowerCase().startsWith(searchclass.toLocaleLowerCase())
                  )
        );
      }
      if (searchgroup.length>0){
        search = search.trim();
        return items.filter(
          singleItem => 
                    (
                    singleItem.group.toLocaleLowerCase().startsWith(searchgroup.toLocaleLowerCase())
                  )
        );
      } 
      if (presence.length>0){
        search = search.trim();
        return items.filter(
          singleItem => 
                    (
                    singleItem.status.includes(presence)
                  )
        );
      }
      if (leaving.length>0){
        leaving = leaving.trim();
        return items.filter(
          singleItem => 
                    (
                      singleItem.leaving.toLocaleLowerCase().startsWith(leaving.toLocaleLowerCase())
                  )
        );      
      }   
      if (arrival.length>0){
        arrival = arrival.trim();
        return items.filter(
          singleItem => 
                    (
                      singleItem.arrival.toLocaleLowerCase().startsWith(arrival.toLocaleLowerCase())
                  )
        );      
      }                 
/*
    if (searchclass.length > 0){
      searchclass = searchclass.trim();
      fItems = fItems.filter(singleItem => singleItem.schoolclass.toLocaleLowerCase().includes(searchclass.toLocaleLowerCase()));
    }

    if (presence.length > 0){
      //fItems = fItems.filter(singleItem => singleItem.status.toLocaleLowerCase().includes('PRESENT'.toLocaleLowerCase()));
      fItems = fItems.filter(singleItem => singleItem.status.includes(presence));
    }
    */
  }

}
