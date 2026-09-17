import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComSignal } from './form-com-signal';

describe('FormComSignal', () => {
  let component: FormComSignal;
  let fixture: ComponentFixture<FormComSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
