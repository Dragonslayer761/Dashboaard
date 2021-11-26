import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageIndicatorComponent } from './storage-indicator.component';

describe('StorageIndicatorComponent', () => {
  let component: StorageIndicatorComponent;
  let fixture: ComponentFixture<StorageIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
