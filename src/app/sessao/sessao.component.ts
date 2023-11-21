import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { OnInit } from '@angular/core'
import { SessaoService } from './services/sessao.service';
import { Isessao } from './services/isessao';
 
@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.scss']
})
export class SessaoComponent implements OnInit {

  ngOnInit(): void { this.listar() }

  produtos: Isessao[] = []

  constructor( private service:SessaoService){}
  
  listar(){
    this.service.listar().subscribe(dados => this.produtos = dados);
  }

  comprar(){
    Swal.fire({
      title: "deseja comprar este produto?",
      showDenyButton: true,
      confirmButtonText: "sim",
      denyButtonText: `cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto comprado com sucesso", "", "success");

      }
    });
  }

}