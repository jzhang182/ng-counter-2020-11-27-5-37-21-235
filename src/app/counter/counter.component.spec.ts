import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase count when click add button', () => {
    // given
    component.count = 0;
    // when
    component.increaseCount();
    // then
    expect(component.count).toBe(1);
  });

  it('should decrease count when click minus button', () => {
    // given
    component.count = 0;
    // when
    component.decreaseCount();
    // then
    expect(component.count).toBe(-1);
  });

  it('should change background color to green when count is negative', () => {
    // given
    component.count = 0;
    // when
    component.decreaseCount();
    // then
    expect(component.numberColor).toBe('green');
    component.increaseCount();
    expect(component.numberColor).toBe('white');
  });

  it('should change background color to red when count is negative', () => {
    // given
    component.count = 10;
    // when
    component.increaseCount();
    // then
    expect(component.numberColor).toBe('red');
    component.decreaseCount();
    expect(component.numberColor).toBe('white');
  });

  it('should change background color to white when reset count', () => {
    // given
    component.count = 5;
    // when
    component.resetCount();
    // then
    expect(component.numberColor).toBe('white');
  });
});
