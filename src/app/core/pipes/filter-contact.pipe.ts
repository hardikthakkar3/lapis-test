import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(contacts: Contact[], query: string): Contact[] {
    if (query?.trim()?.length > 2) {
      query = query.toLowerCase();
      return contacts.filter((contact) => {
        let match = false;
        if (contact.first_name?.toLowerCase().indexOf(query) >= 0) {
          match = true;
        }
        if (contact.last_name?.toLowerCase().indexOf(query) >= 0) {
          match = true;
        }
        return match;
      });
    }
    return contacts;
  }

}
