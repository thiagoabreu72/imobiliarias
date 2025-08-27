import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelEmpreendimentos } from './carrocel-empreendimentos';

describe('CarrocelEmpreendimentos', () => {
  let component: CarrocelEmpreendimentos;
  let fixture: ComponentFixture<CarrocelEmpreendimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelEmpreendimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelEmpreendimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
