import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorComponent } from './behavior.component';
import { TestComponent } from '../test/test.component';
import { YioooComponent } from '../yiooo/yiooo.component';

describe('BehaviorComponent', () => {
  let fixture: ComponentFixture<BehaviorComponent>;
  let component: BehaviorComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorComponent, TestComponent, YioooComponent],
    });
    fixture = TestBed.createComponent(BehaviorComponent);
    component = fixture.componentInstance;
  });

  it('should create the BehaviorComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should use <test> and <yiooo> components', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const testComponent = compiled.querySelector('app-test');
    const yioooComponent = compiled.querySelector('app-yiooo');
    expect(testComponent).toBeTruthy();
    expect(yioooComponent).toBeTruthy();
  });
});
