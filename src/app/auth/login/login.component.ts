import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    
    // GET email & secret by id
    const email = (<HTMLInputElement>document.getElementById('idEmail')).value
    const secret = (<HTMLInputElement>document.getElementById('idSecret')).value

    // HARD CODED email & secret
    const matchingEmail = 'example@email.com'
    const matchingSecret = 'example@secret'

    // Debug only
    // console.log(email + secret)

    // Verify if email or secret fields are not empty
    if (!email || !secret) {
      this.snackbar.open('Preencha todos os campos para realizar o login!', 'Fechar', {
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    }

    else {
      // Verify if email & secret fields match with the HARD CODED ones
      if (email == matchingEmail && secret == matchingSecret) {
        this.snackbar.open('Usuario autenticado!', 'Fechar',  {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
        // Navigate to /home
        this.router.navigateByUrl('/home')
      }

      // If the email isn't right 
      else if (email != matchingEmail) {
        this.snackbar.open('Usuario incorreto!', 'Fechar', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      }

      // If the secret isn't right
      else if (secret != matchingSecret) {
        this.snackbar.open('Senha incorreta!', 'Fechar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        })
      }

    }

  }

}
