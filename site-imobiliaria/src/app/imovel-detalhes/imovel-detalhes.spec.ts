import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelDetalhes } from './imovel-detalhes';

describe('ImovelDetalhes', () => {
  let component: ImovelDetalhes;
  let fixture: ComponentFixture<ImovelDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImovelDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
