import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ActionnaireSearchPipe', pure: false })
export class ActionnaireSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(actionnaire => {
        if (actionnaire.profile.name) {
          return actionnaire.profile.name.search(searchText) !== -1;
        }
        else{
          return actionnaire.username.search(searchText) !== -1;
        }
      });
    }
  }
}