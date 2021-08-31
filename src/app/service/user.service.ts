import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  static UserReturn: any;
  constructor(
              private router: Router,
              ) { }

FindValueSubscriber(){
 return UserService.UserReturn;
}
}


