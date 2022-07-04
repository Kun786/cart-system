import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConceptsComponent } from './angular-concepts.component';

describe('AngularConceptsComponent', () => {
  let component: AngularConceptsComponent;
  let fixture: ComponentFixture<AngularConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
