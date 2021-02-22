import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledAccountsComponent } from './disabled-accounts.component';

describe('DisabledAccountsComponent', () => {
  let component: DisabledAccountsComponent;
  let fixture: ComponentFixture<DisabledAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
