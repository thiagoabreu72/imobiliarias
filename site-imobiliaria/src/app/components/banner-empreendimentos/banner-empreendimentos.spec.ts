import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEmpreendimentos } from './banner-empreendimentos';

describe('BannerEmpreendimentos', () => {
  let component: BannerEmpreendimentos;
  let fixture: ComponentFixture<BannerEmpreendimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerEmpreendimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEmpreendimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
