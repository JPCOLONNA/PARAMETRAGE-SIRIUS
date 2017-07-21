//import { MdPaginator } from '@angular/material';
import {Observable} from 'rxjs/Observable';

export class MdPaginatorIntlFrench  {

 constructor() {
    /*this.simulateTranslationsLoad();
    this.mockTranslate('perPage').subscribe(t => this.itemsPerPageLabel = t);
    this.mockTranslate('nextPage').subscribe(t => this.nextPageLabel = t);
    this.mockTranslate('pervPage').subscribe(t => this.previousPageLabel = t);*/
    this.loadedTranslatedValues = this.translatedValues;

    this.itemsPerPageLabel=this.mockTranslateInstant('perPage');
    this.nextPageLabel=this.mockTranslateInstant('nextPage');
    this.previousPageLabel=this.mockTranslateInstant('pervPage');
  }
  
  public itemsPerPageLabel: string;
  public nextPageLabel: string;
  public previousPageLabel: string;
  
  public getRangeLabel(page: number, pageSize: number, length: number): string {
      if (length == 0 || pageSize == 0) {
          return this.mockTranslateInstant('zeroItems', {
              count: length
          });
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ?
          Math.min(startIndex + pageSize, length) :
          startIndex + pageSize;
          
      return this.mockTranslateInstant('nItems', {
          startItem: (startIndex + 1),
          endItem: endIndex,
          count: length
      });
  }
    
  private simulateTranslationsLoad() {
    let self = this;
    setTimeout(() => {
      self.loadedTranslatedValues = self.translatedValues;
    }, 250);
  }

  private translatedValues: { [id: string]: string } = {
      'perPage': 'Eléments par page',
      'nextPage': 'Page suivante',
      'prevPage': 'Page précédente',
      'zeroItems': '0 sur {{count}}',
      'nItems': '{{startItem}} à {{endItem}} sur {{count}}'
  };
  
  private loadedTranslatedValues: { [id: string]: string } = {};
  
  private mockTranslate(key: string, values?: any): Observable<string> {
      return new Observable<string>((subscriber) => {
  
          setTimeout(() => {
              subscriber.next(this.replaceValues(this.translatedValues[key] || key, values));
          }, 250);
  
      });
  }
  
  private mockTranslateInstant(key: string, values?: any): string {
      return this.replaceValues(this.loadedTranslatedValues[key] || key, values);
  }
  
  private replaceValues(translation: string, values: any): string {
      if (!values) { return translation; }
      for (let key in values) {
          if (values.hasOwnProperty(key)) {
              translation = translation.replace('{{' + key + '}}', values[key]);
          }
      }
      return translation;
  }

}