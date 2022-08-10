import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinacionAcademicaComponent } from './coordinacion-academica.component';

describe('CoordinacionAcademicaComponent', () => {
  let component: CoordinacionAcademicaComponent;
  let fixture: ComponentFixture<CoordinacionAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinacionAcademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
