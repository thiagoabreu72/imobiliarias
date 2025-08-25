import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelBuscaRapida } from './carrocel-busca-rapida';

describe('CarrocelBuscaRapida', () => {
  let component: CarrocelBuscaRapida;
  let fixture: ComponentFixture<CarrocelBuscaRapida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelBuscaRapida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelBuscaRapida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
