import { ServiceService } from './../service.service';
import { Usuario } from './../lista-albuns/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario ={
    email: '',
    senha: '',
  }

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  logaUsuario(): void{
    this.service.logaUsuario(this.usuario)
  }
  cadastrar(): void {
    this.service.criaUsuario(this.usuario)
  }

}
