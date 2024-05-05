import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cartQuantity: number = 0;

  constructor(
    private cartService: CartService,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updateCartQuantity();
    this.cartService.cartProducts$.subscribe(() => {
      this.updateCartQuantity();
      // this.setUser();
    });
  }

  updateCartQuantity(): void {
    this.cartQuantity = this.cartService.getCartQuantity();
  }

  // setUser(): void {
  //   const username = 'adminUser';
  //   this.authService.loginUser(username);
  // }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      width: '400px',
    });
  }
}
