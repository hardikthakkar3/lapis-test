import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(contacts: Contact[], query: string): Contact[] {
    // trim to remove spaces and check min length for filtering
    if (query?.trim()?.length > 1) {
      // lowercase the query to match regardless of the case
      query = query.toLowerCase();
      // return the filtered contacts
      return contacts.filter((contact) => {
        let match = false;
        Object.keys(contact).forEach((key) => {
          if (key !== 'id')
            match = this.checkForMatch(contact, query, key) ? true : match;
        });
        return match;
      });
    }
    return contacts.map((contact) => {
      // strip html tags out of all properties
      Object.keys(contact).forEach((key) => {
        if (key !== 'id')
          contact[key] = contact[key].replace(/(<([^>]+)>)/ig, '')
      });
      return contact;
    });
  }

  /**
   * Check if the query is present in the given contact property
   * @param contact Contact object
   * @param query query string
   * @param propertyName property name in contact object
   * @returns if the query is present in contact objects given property name
   */
  checkForMatch(contact: Contact, query: string, propertyName: string): boolean {
    // strip the html tags
    contact[propertyName] = contact[propertyName].replace(/(<([^>]+)>)/ig, '');
    // check if the query term is present
    let matchedPartIndex = contact[propertyName]?.toLowerCase().indexOf(query);
    if (matchedPartIndex >= 0) {
      // pluck the matched part and replace it with bold tags
      const matchedPart = contact[propertyName]?.slice(matchedPartIndex, matchedPartIndex + query.length);
      contact[propertyName] = contact[propertyName]?.replaceAll(matchedPart, `<b><u>${matchedPart}</u></b>`);
    }
    return matchedPartIndex >= 0;
  }

}
