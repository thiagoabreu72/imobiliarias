import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelDestaque } from './imovel-destaque';

describe('ImovelDestaque', () => {
  let component: ImovelDestaque;
  let fixture: ComponentFixture<ImovelDestaque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImovelDestaque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelDestaque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
