import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDeatialsComponent } from './server-deatials.component';

describe('ServerDeatialsComponent', () => {
  let component: ServerDeatialsComponent;
  let fixture: ComponentFixture<ServerDeatialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerDeatialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDeatialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
