import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from './multi-select.component';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectComponent]
    });
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ComponentName', () => {
    let component: ComponentName;
  
    beforeEach(() => {
      component = new ComponentName();
    });
  
    it('should open the popup if selecteddivision is defined and selecteddivisions length is less than or equal to 6', () => {
      spyOn(window, 'alert');
      component.selecteddivision = 'division';
      component.selecteddivisions = ['division', 'division2', 'division3'];
  
      component.openPopup();
  
      expect(window.alert).toHaveBeenCalledWith('Popup opened!');
    });
  
    it('should not open the popup if selecteddivision is not defined', () => {
      spyOn(window, 'alert');
      component.selecteddivision = null;
      component.selecteddivisions = ['division', 'division2', 'division3'];
  
      component.openPopup();
  
      expect(window.alert).not.toHaveBeenCalled();
    });
  
    it('should not open the popup if selecteddivisions length is greater than 6', () => {
      spyOn(window, 'alert');
      component.selecteddivision = 'division';
      component.selecteddivisions = ['division', 'division2', 'division3', 'division4', 'division5', 'division6', 'division7'];
  
      component.openPopup();
  
      expect(window.alert).not.toHaveBeenCalled();
    });
  });
  
});
