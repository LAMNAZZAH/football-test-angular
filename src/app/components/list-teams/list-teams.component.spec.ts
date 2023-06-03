import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamsComponent } from './list-teams.component';

describe('ListTeamsComponent', () => {
  let component: ListTeamsComponent;
  let fixture: ComponentFixture<ListTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTeamsComponent]
    });
    fixture = TestBed.createComponent(ListTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
