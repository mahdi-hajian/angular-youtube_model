import { Injectable } from '@angular/core';
import { IUser } from '../../Interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  users: IUser[] = [
    {id: 1 , name: 'mahdi'},
    {id: 2 , name: 'ali'},
    {id: 3 , name: 'mohammad'},
    {id: 4 , name: 'saeid'},
  ];

  getUsers() {
    return this.users;
  }
  getuser(id: number) {
      const user = this.users.find(
      u => u.id === id
    );
    return user;
  }
  // خطا
  updateUser(id: number, user: IUser) {
    let username = this.users.find(u => u.id === id );
    username = user;
  }
}
