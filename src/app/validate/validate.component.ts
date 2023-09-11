import { Component } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {
  sectionsData: any[] = [
    { name: 'A', labels: ['Label 1', 'Label 2', 'Label 3'], values: ['Value 1', 'Value 2', 'Value 3'] },
    { name: 'B', labels: ['Label X', 'Label Y'], values: ['Value X', 'Value Y'] },
    { name: 'C', labels: ['Label ABC'], values: ['Value XYZ'] },
    { name: 'D', labels: [], values: [] }
  ];
  
  
}
