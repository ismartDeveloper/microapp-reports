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
  
    it('should open the popup if selectedRegion is defined and selectedRegions length is less than or equal to 6', () => {
      spyOn(window, 'alert');
      component.selectedRegion = 'region1';
      component.selectedRegions = ['region1', 'region2', 'region3'];
  
      component.openPopup();
  
      expect(window.alert).toHaveBeenCalledWith('Popup opened!');
    });
  
    it('should not open the popup if selectedRegion is not defined', () => {
      spyOn(window, 'alert');
      component.selectedRegion = null;
      component.selectedRegions = ['region1', 'region2', 'region3'];
  
      component.openPopup();
  
      expect(window.alert).not.toHaveBeenCalled();
    });
  
    it('should not open the popup if selectedRegions length is greater than 6', () => {
      spyOn(window, 'alert');
      component.selectedRegion = 'region1';
      component.selectedRegions = ['region1', 'region2', 'region3', 'region4', 'region5', 'region6', 'region7'];
  
      component.openPopup();
  
      expect(window.alert).not.toHaveBeenCalled();
    });
  });
  
});
