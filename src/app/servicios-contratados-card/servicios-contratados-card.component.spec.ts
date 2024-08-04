import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosContratadosCardComponent } from './servicios-contratados-card.component';

describe('ServiciosContratadosCardComponent', () => {
  let component: ServiciosContratadosCardComponent;
  let fixture: ComponentFixture<ServiciosContratadosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosContratadosCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosContratadosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
