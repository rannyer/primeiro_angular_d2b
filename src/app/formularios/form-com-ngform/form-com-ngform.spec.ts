import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComNgform } from './form-com-ngform';

describe('FormComNgform', () => {
  let component: FormComNgform;
  let fixture: ComponentFixture<FormComNgform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComNgform],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComNgform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
