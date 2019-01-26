import { TestBed } from '@angular/core/testing';

import { AuditImagesService } from './audit-images.service';

describe('AuditImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditImagesService = TestBed.get(AuditImagesService);
    expect(service).toBeTruthy();
  });
});
