import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCreateComponent } from './skeleton-create.component';

describe('SkeletonCreateComponent', () => {
  let component: SkeletonCreateComponent;
  let fixture: ComponentFixture<SkeletonCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
