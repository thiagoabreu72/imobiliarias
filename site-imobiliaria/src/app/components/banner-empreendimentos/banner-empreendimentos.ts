import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner-empreendimentos',
  imports: [],
  templateUrl: './banner-empreendimentos.html',
  styleUrl: './banner-empreendimentos.css'
})
export class BannerEmpreendimentos {
  ngAfterViewInit() {
  $('#carrossel_empreendimentos').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: $('.slick-slider-dots-banners'),
    appendDots: $('.slick-slider-dots-banners'),
    centerMode: false,
    centerPadding: '50px',
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, centerPadding: '20px' }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, centerPadding: '20px' }
      }
    ]
  });

  var carrossel_empreendimentos = $('#carrossel_empreendimentos');

  $('.seta_left_empreendimento').click(function () {
    carrossel_empreendimentos.slick('slickPrev');
  });

  $('.seta_right_empreendimento').click(function () {
    carrossel_empreendimentos.slick('slickNext');
  });

 carrossel_empreendimentos.on('edge', function (event: any, slick: any, direction: any) {
  if (direction == 'left') {
    // acao aqui
  }
});
}
}
