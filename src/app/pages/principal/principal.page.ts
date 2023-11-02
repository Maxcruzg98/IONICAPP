import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

usuario: string = '';
contrasena: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();
    if(extras?.extras.state){

      this.usuario = extras?.extras.state['usuario'];
      this.contrasena = extras?.extras.state['contrasena'];
    }


  }

}
