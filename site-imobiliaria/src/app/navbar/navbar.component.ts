import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  abrirModal() {
    // Implemente aqui a lógica para abrir o modal
    // Por exemplo, usando um serviço ou alterando uma variável de exibição
    console.log('Abrir modal chamado');
  }
}
