import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionsComponent } from './sections.component';
import { SectionDataService } from '../section-data.service'; // Import your service

describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;
  let sectionDataService: SectionDataService; // Define a reference to your service

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionsComponent],
      providers: [SectionDataService], // Provide your service
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    sectionDataService = TestBed.inject(SectionDataService); // Inject your service
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load sections data from the service', () => {
    const mockSectionsData = [
      {
        name: 'A',
        labels: ['Label1', 'Label2'],
        values: ['Value1', 'Value2'],
      },
      // Add more sample data as needed
    ];

    spyOn(sectionDataService, 'getSectionsData').and.returnValue(mockSectionsData); // Mock the service method

    fixture.detectChanges(); // Trigger change detection

    expect(component.sectionsData).toEqual(mockSectionsData); // Verify that the component property is populated with mock data
  });
});
