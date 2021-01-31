import { Router } from '@angular/router';
import { ServiceService } from './../service.service';
import { Albuns } from './albuns.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-albuns',
  templateUrl: './lista-albuns.component.html',
  styleUrls: ['./lista-albuns.component.css']
})
export class ListaAlbunsComponent implements OnInit {

  albuns: Albuns [] = [];

  displayedColumns = ['id','titulo','artista','ano', 'duracao', 'total_faixas']

  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
      this.serviceService.recuperaLista().subscribe(
        albuns =>{
          this.albuns = albuns
          console.log(albuns)
        }
      )
    }
    sair(): void {
      this.serviceService.sair
      this.router.navigate(["/"])
    }
  }
  
