import { Component, AfterViewInit  } from '@angular/core';
 
import {MultiSelectDropdownComponent} from '../components/multi-select-dropdown.component/multi-select-dropdown.component';



@Component({
  selector: 'app-banner-home',
  imports: [MultiSelectDropdownComponent],
  templateUrl: './banner-home.html',
  styleUrl: './banner-home.css'
})
export class BannerHome implements AfterViewInit {
 

  tipoImovelOptions = [
    { label: 'Casa', value: 'casa', checked: false },
    { label: 'Apartamento', value: 'apartamento', checked: false },
    { label: 'Terreno', value: 'terreno', checked: false }
  ];

  cidadeOptions = [
    { label: 'São Paulo', value: 1, checked: false },
    { label: 'Rio de Janeiro', value: 2, checked: false },
    { label: 'Belo Horizonte', value: 3, checked: false },
    { label: 'Campo Mourão', value: 4, checked: false },
    { label: 'Cascavel', value: 5, checked: false },
    { label: 'Londrina', value: 6, checked: false },
    { label: 'Boa Esperança', value: 7, checked: false }
  ];

  bairrosOptions = [
    { label: 'Centro', value: 10, checked: false },
    { label: 'Jardim', value: 20, checked: false },
    { label: 'Vila', value: 30, checked: false },
    { label: 'Zona Sul', value: 40, checked: false },
    { label: 'Zona Norte', value: 50, checked: false },
    { label: 'Zona Leste', value: 60, checked: false },
    { label: 'Zona Oeste', value: 70, checked: false }
  ];

  quartosOptions = [
    { label: '1 Quarto', value: '1_quarto', checked: false },
    { label: '2 Quartos', value: '2_quartos', checked: false },
    { label: '3 Quartos', value: '3_quartos', checked: false }
  ];

  condominioOptions = [
    { label: 'Lilaje', value: 11, checked: false },
    { label: 'Cidade Alta', value: 22, checked: false },
    { label: 'Novo Centro', value: 33, checked: false },
    { label: 'Marcovic', value: 44, checked: false }
  ];

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
