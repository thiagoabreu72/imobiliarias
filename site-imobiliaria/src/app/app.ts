import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalDesktop } from './modal-desktop/modal-desktop';
import { ImovelDetalhes } from "./imovel-detalhes/imovel-detalhes";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, ModalDesktop, ImovelDetalhes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-imobiliaria');
  protected readonly modalAberto = signal(false);

  abrirModal() {
    this.modalAberto.set(true);
  }

  fecharModal() {
    this.modalAberto.set(false);
  }
}
