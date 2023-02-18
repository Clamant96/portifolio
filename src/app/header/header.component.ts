import { Projeto } from './../model/Projeto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public listaProjetos: Projeto[];
  public memoriaListaProjetos: Projeto[] = [];
  public ajusteDropDown: string = "";

  public projeto: Projeto = new Projeto();

  public projetoSelecao: string = "";

  public isDropDown: boolean = false;

  public projetos: Projeto[] = [];

  public isIframe: boolean = false;

  constructor() { }

  ngOnInit() {
    this.gerenciaProjetos();
  }

  observadorChange() {

    this.gerenciaDropDown(true); // ABRE O DROPDOWN
    this.gerenciaIframe(false);

    let locallistaProjetos: Projeto[] = [];
    this.memoriaListaProjetos = [];

    this.projetos.map((item) => {
      if(item.nome.toLowerCase().includes(this.projetoSelecao.toLowerCase())) {
        locallistaProjetos.push(item);
      }
    });

    this.memoriaListaProjetos = locallistaProjetos;

    if(this.projetoSelecao == "") {
      this.gerenciaDropDown(false);
      this.gerenciaIframe(false);
    }

    this.gerenciaBlocoDropDown(this.memoriaListaProjetos.length); // AJUSTA DROPDOWN

  }

  gerenciaBlocoDropDown(memoriaListaProjetos: number) {

    if(memoriaListaProjetos == 0) {
      this.gerenciaDropDown(false);
      this.gerenciaIframe(false);

    }else if(memoriaListaProjetos == 1) {
      this.ajusteDropDown = "ajuste-selecao-13";

    }else if(memoriaListaProjetos == 2) {
      this.ajusteDropDown = "ajuste-selecao-18";

    }else if(memoriaListaProjetos == 3) {
      this.ajusteDropDown = "ajuste-selecao-23";

    }else if(memoriaListaProjetos == 4) {
      this.ajusteDropDown = "ajuste-selecao-28";

    }else if(memoriaListaProjetos == 5) {
      this.ajusteDropDown = "ajuste-selecao-33";

    }else if(memoriaListaProjetos == 6) {
      this.ajusteDropDown = "ajuste-selecao-38-5";

    }else if(memoriaListaProjetos == 7) {
      this.ajusteDropDown = "ajuste-selecao-42";

    }else if(memoriaListaProjetos == 8) {
      this.ajusteDropDown = "ajuste-selecao-47";

    }else {
      this.ajusteDropDown = "ajuste-selecao-49";

    }

  }

  gerenciaDropDown(isDropDown: boolean) {

    if(isDropDown) {
      //console.log("IF");
      window.document.querySelector('header .bloco-input-projeto .item-input-selecao')?.setAttribute('style', 'display: block;');
      window.document.querySelector('header .bloco-input-projeto .input-selecao .img')?.setAttribute('style', ' transform: rotate(180deg);');

      this.gerenciaBlocoDropDown(this.memoriaListaProjetos.length); // AJUSTA DROPDOWN

    }else {
      //console.log("ELSE");
      window.document.querySelector('header .bloco-input-projeto .item-input-selecao')?.setAttribute('style', 'display: none;');
      window.document.querySelector('header .bloco-input-projeto .input-selecao .img')?.setAttribute('style', ' transform: rotate(0deg);');

    }

  }

  gerenciaBotao(isDropDown: boolean) {

    if(isDropDown) {
      this.isDropDown = false;

    }else {
      this.isDropDown = true;

    }

    this.gerenciaDropDownBotao(this.isDropDown);

  }

  gerenciaDropDownBotao(isDropDown: boolean) {

    if(isDropDown) {
      //console.log("IF BOTAO");
      window.document.querySelector('header .bloco-input-projeto .item-input-selecao')?.setAttribute('style', 'display: block;');
      window.document.querySelector('header .bloco-input-projeto .input-selecao .img')?.setAttribute('style', ' transform: rotate(180deg);');

    }else {
      //console.log("ELSE BOTAO");
      window.document.querySelector('header .bloco-input-projeto .item-input-selecao')?.setAttribute('style', 'display: none;');
      window.document.querySelector('header .bloco-input-projeto .input-selecao .img')?.setAttribute('style', ' transform: rotate(0deg);');

    }

  }

  selecionaItemComClick(projeto: Projeto) {
    this.projetoSelecao = projeto.nome; // CARREGA A VARIAVEL DO INPUT

    this.projeto.id = projeto.id; // CARRE O ID SELECIONADO
    this.projeto.img = projeto.img;
    this.projeto.link = projeto.link;
    this.projeto.nome = projeto.nome;
    this.projeto.playlist = projeto.playlist;
    this.projeto.videoInicialPlaylist = projeto.videoInicialPlaylist;

    this.gerenciaDropDown(false); // FECHA O DROPDOWN
    this.gerenciaIframe(true);

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

  gerenciaIframe(estado: boolean) {
    this.isIframe = estado;

  }

}
