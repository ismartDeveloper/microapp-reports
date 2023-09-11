import { Component } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {
  sections = [
    {
      labelA: 'Label 1 A',
      valueA: 'Value 1 A',
      labelB: 'Label 1 B',
      valueB: 'Value 1 B',
      labelC: 'Label 1 C',
      valueC: 'Value 1 C',
      labelD: 'Label 1 D',
      valueD: 'Value 1 D',
    },
    {
      labelA: 'Label 2 A',
      valueA: 'Value 2 A',
      labelB: 'Label 2 B',
      valueB: 'Value 2 B',
      labelC: 'Label 2 C',
      valueC: 'Value 2 C',
      labelD: 'Label 2 D',
      valueD: 'Value 2 D',
    }
    
  ];
  
  
}
