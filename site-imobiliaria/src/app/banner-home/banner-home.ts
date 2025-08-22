import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner-home',
  imports: [],
  templateUrl: './banner-home.html',
  styleUrl: './banner-home.css'
})
export class BannerHome implements AfterViewInit {
  ngAfterViewInit() {
    const titulo = document.querySelector('.texto_animado_banner');
    if (titulo) {
      this.typeWrite(titulo);
    }

      // Adiciona evento de clique nos botões de finalidade
      const buttons = document.querySelectorAll('.buttom_finalidade_busca_home');
      buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active-finalidade'));
          btn.classList.add('active-finalidade');
        });
      });
  }

  typeWrite(element: Element) {
    const text = element.textContent || '';
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
  }
}
