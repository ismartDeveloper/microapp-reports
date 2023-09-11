import { Component } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {
  sections = [
    { label: 'Label 1', value: 'Value 1' },
    { label: 'Label 2', value: 'Value 2' },
    { label: 'Label 3', value: 'Value 3' },
    { label: 'Label 4', value: 'Value 4' },
    // Add more sections as needed
  ];
  
}
