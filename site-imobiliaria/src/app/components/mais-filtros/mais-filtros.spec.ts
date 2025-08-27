import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisFiltros } from './mais-filtros';

describe('MaisFiltros', () => {
  let component: MaisFiltros;
  let fixture: ComponentFixture<MaisFiltros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisFiltros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisFiltros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
