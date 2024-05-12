import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginUser(username: string): void {
    const user =
      username === 'admin'
        ? { id: 1, username: 'admin', role: 'admin' }
        : { id: 2, username: 'regularUser', role: 'user' };
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user.role === 'admin';
  }
}
