import { Router, Routes } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from './lista-albuns/usuario.model';
import { Albuns } from './lista-albuns/albuns.model';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl ="https://lista-albuns-default-rtdb.firebaseio.com/albuns.json";


 
 usuarioLogado: any
 

  constructor(
    private http: HttpClient,private auth: AngularFireAuth, 
    private snackBar: MatSnackBar,
    private router: Router
    ) { }


  recuperaLista(): Observable<Albuns[]>{
    return this.http.get<Albuns[]>(this.baseUrl)
  }
  logaUsuario(usuario: Usuario): void {
    this.auth.signInWithEmailAndPassword(
      usuario.email,
      usuario.senha

    ).then(estado =>{
      this.router.navigate(['/lista-albuns'])

    })
    .catch(e =>{
      this.showMessage("Usuario Invalido!")
    } )
    this.usuarioLogado = this.auth.currentUser
  }
  criaUsuario(usuario: Usuario): void {
    this.auth.createUserWithEmailAndPassword(
      usuario.email,
      usuario.senha
    )

  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    }
    )
  }
}
