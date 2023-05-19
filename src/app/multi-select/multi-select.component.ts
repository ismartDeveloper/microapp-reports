import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {

    @ViewChild('myDropdown') myDropdown: any;
    numSelections: number = 0;
    desiredNumberSelections: number = 2;
  
    handleDropdownChange(dropdown: any) {
      const selectedOptions = Array.from(dropdown.selectedOptions);
      this.numSelections = selectedOptions.length;
    }
  
    handleDropdownClose() {
      if (this.numSelections === this.desiredNumberSelections) {
        this.openPopup();
      }
    }
  
    openPopup() {
      // Code to open the popup
      // Replace with your actual popup opening logic
      alert('Popup opened!');
    }
  }
  