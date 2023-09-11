import { Component } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {
  sectionsData = [
    { 
      name: 'A',
      labels: ['Label1', 'Label2', 'Label3', 'Label4'],
      values: ['Value1', 'Value2', 'Value3', 'Value4']
    },
    { 
      name: 'B',
      labels: ['Label5', 'Label6'],
      values: ['Value5', 'Value6']
    },
    { 
      name: 'C',
      labels: ['Label7', 'Label8', 'Label9'],
      values: ['Value7', 'Value8', 'Value9']
    },
    { 
      name: 'D',
      labels: ['Label10'],
      values: ['Value10']
    }
  ];
}
