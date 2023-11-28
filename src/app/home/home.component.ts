import { Projeto } from './../model/Projeto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public projetos: Projeto[] = [];
  public isAtivo: boolean = false;

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.gerenciaProjetos();

    this.animacaoItem();

  }

  gerenciaProjetos() {
    this.projetos = [
      {
        id: 1,
        nome: "Chat Connect",
        link: "https://github.com/Clamant96/chat-connect-app",
        img: "assets/img/chat-connect.png",
        playlist: "https://www.youtube.com/watch?v=nODC1Jn059g&list=PLTfk5g1h6x-PtU5U9_aYr08Wzu_4WvZu8",
        videoInicialPlaylist: "https://www.youtube.com/embed/nODC1Jn059g"
      },{
        id: 2,
        nome: "Social Connect",
        link: "https://github.com/Clamant96/social-connect-angular",
        img: "assets/img/social-connect.png",
        playlist: "https://www.youtube.com/watch?v=aDaEc7yo2yE&list=PLTfk5g1h6x-OdBn1mDhrux1kQroI3Q95W",
        videoInicialPlaylist: "https://www.youtube.com/embed/aDaEc7yo2yE"
      },{
        id: 3,
        nome: "Help Connect E-commerce",
        link: "https://github.com/Clamant96/help-connect-ecommerce",
        img: "assets/img/help-connect-ecommerce.png",
        playlist: "https://www.youtube.com/watch?v=MrKt4Gf_9PM&list=PLTfk5g1h6x-M_yD64UUYyY3lfWghnFEoZ",
        videoInicialPlaylist: "https://www.youtube.com/embed/MrKt4Gf_9PM"
      },{
        id: 4,
        nome: "Gerenciador de Pedidos",
        link: "https://github.com/Clamant96/gerenciador-pedidos-angular",
        img: "assets/img/gerenciador-pedidos.png",
        playlist: "https://www.youtube.com/watch?v=Y7A-9lqqyXE&list=PLTfk5g1h6x-NsPWQG41eUluSCsDWbK2O7",
        videoInicialPlaylist: "https://www.youtube.com/embed/Y7A-9lqqyXE"
      },{
        id: 5,
        nome: "Lista de Anotações",
        link: "https://github.com/Clamant96/lista-de-anotacoes",
        img: "assets/img/lista-de-anotacoes.png",
        playlist: "https://www.youtube.com/watch?v=V4WO_GcG754&list=PLTfk5g1h6x-OCmsp8DWbHphI1LnriTVPS",
        videoInicialPlaylist: "https://www.youtube.com/embed/V4WO_GcG754"
      }
    ];
  }

  animacaoItem() {

    setInterval(() => {

      if(this.isAtivo) {
        this.isAtivo = false;

      }else {
        this.isAtivo = true;

      }

    }, 800);

  }

}
