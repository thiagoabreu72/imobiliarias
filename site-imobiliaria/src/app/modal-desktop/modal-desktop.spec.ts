import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDesktop } from './modal-desktop';

describe('ModalDesktop', () => {
  let component: ModalDesktop;
  let fixture: ComponentFixture<ModalDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
