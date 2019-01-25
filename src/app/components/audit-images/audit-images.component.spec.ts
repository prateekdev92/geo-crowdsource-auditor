import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditImagesComponent } from './audit-images.component';

describe('AuditImagesComponent', () => {
  let component: AuditImagesComponent;
  let fixture: ComponentFixture<AuditImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
