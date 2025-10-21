import { Pipe, PipeTransform } from '@angular/core';
import { Eventy } from '../../model/eventy';

@Pipe({
  name: 'orderByLikes'
})
export class OrderByLikesPipe implements PipeTransform {

transform(events: Eventy[] | null | undefined): Eventy[] {
    if (!events) return [];
    return [...events].sort((a, b) => b.nbrLike - a.nbrLike);
  }


}
