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
  usuariologado: any
  token: string = ''
  idToken: any
  resultado: string =''
   


  constructor(
    private http: HttpClient, private auth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  urlBase = `https://lista-albuns-default-rtdb.firebaseio.com/albuns.json?auth=`

    async logaUsuario(usuario: Usuario): Promise<void>{
   await this.auth.signInWithEmailAndPassword(
      usuario.email,
      usuario.senha

    ).then(async resposta => {
     await resposta.user?.getIdToken().then(idToken => {
        this.token = idToken


        this.urlBase = this.urlBase + this.token
      
      })

      this.router.navigate(['/lista-albuns'])
    })
      .catch(e => {
        this.showMessage("Usuario Invalido!")
      })
      console.log("TOKEN:" + this.token)
      console.log("URl" + this.urlBase)
      console.log("tokenResult"+ this.auth.idTokenResult)
  }


  recuperaLista(): Observable<Albuns[]> {
    console.log("url " + this.urlBase)
   
    return this.http.get<Albuns[]>(this.urlBase)
  }

  
 async criaUsuario(usuario: Usuario): Promise<void> {
    this.auth.createUserWithEmailAndPassword(
      usuario.email,
      usuario.senha
    ).then(e =>{
       e.user?.getIdToken().then( resposta =>{
         this.token = resposta
         console.log("token usuario" + this.token )
       }
       )
      this.router.navigate(["/lista-albuns"])
    })
    
    .catch(e =>{
      this.showMessage("Erro ao cadastar")
    })
    

  }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    }
    )
  }
  sair(): void {
    this.auth.signOut()
    
  }
 
}
