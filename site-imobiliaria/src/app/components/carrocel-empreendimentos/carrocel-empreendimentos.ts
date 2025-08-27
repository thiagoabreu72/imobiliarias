import { Component } from '@angular/core';

@Component({
  selector: 'app-carrocel-empreendimentos',
  imports: [],
  templateUrl: './carrocel-empreendimentos.html',
  styleUrl: './carrocel-empreendimentos.css'
})
export class CarrocelEmpreendimentos {
  prev(carouselRef: HTMLElement) {
    // @ts-ignore
    const bsCarousel = window.bootstrap.Carousel.getOrCreateInstance(carouselRef);
    bsCarousel.prev();
  }

  next(carouselRef: HTMLElement) {
    // @ts-ignore
    const bsCarousel = window.bootstrap.Carousel.getOrCreateInstance(carouselRef);
    bsCarousel.next();
  }
}
