import { TestBed } from '@angular/core/testing';

import { ServicioProfesionService } from './servicio-profesion.service';

describe('ServicioProfesionService', () => {
  let service: ServicioProfesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProfesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
