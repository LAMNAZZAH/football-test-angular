import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateTeamsComponent } from './form-update-teams.component';

describe('FormUpdateTeamsComponent', () => {
  let component: FormUpdateTeamsComponent;
  let fixture: ComponentFixture<FormUpdateTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUpdateTeamsComponent]
    });
    fixture = TestBed.createComponent(FormUpdateTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
