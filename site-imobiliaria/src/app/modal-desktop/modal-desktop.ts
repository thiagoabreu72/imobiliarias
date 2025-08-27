import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-desktop',
  imports: [],
  templateUrl: './modal-desktop.html',
  styleUrl: './modal-desktop.css'
})
export class ModalDesktop {
  @Output() fecharModal = new EventEmitter<void>();
}
