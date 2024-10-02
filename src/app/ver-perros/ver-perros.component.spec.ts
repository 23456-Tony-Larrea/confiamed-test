import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerrosComponent } from './ver-perros.component';

describe('VerPerrosComponent', () => {
  let component: VerPerrosComponent;
  let fixture: ComponentFixture<VerPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPerrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
