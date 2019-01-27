import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditImagesActionComponent } from './audit-images-action.component';

describe('AuditImagesActionComponent', () => {
  let component: AuditImagesActionComponent;
  let fixture: ComponentFixture<AuditImagesActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditImagesActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditImagesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
