import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).then(
      () => {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/inventario']);
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        alert('Correo o contraseña incorrectos.');
      }
    );
  }
}