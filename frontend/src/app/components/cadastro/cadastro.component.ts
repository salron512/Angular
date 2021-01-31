import { ServiceService } from './../service.service';
import { Usuario } from './../lista-albuns/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = {
    email: '',
    senha: '',
  }

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  criaUsuario(): void {
  this.service.criaUsuario(this.usuario)
  }
  cancelar(): void {
    this.router.navigate(["/"])

  }

}
