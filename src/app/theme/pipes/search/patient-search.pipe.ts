import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'PatientSearchPipe', pure: false })
export class PatientSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(patient => {
        if (patient.profile.name) {
          return patient.profile.name.search(searchText) !== -1;
        }
        else{
          return patient.username.search(searchText) !== -1;
        }
      });
    }
  }
}