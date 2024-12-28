import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.email, this.password).then(
      () => {
        console.log('Registro exitoso');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error en el registro:', error);
        alert('Error al crear la cuenta.');
      }
    );
  }
}