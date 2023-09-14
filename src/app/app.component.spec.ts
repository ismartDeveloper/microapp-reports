import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionNameRendererComponent } from './conversion-name-renderer.component';

describe('ConversionNameRendererComponent', () => {
  let component: ConversionNameRendererComponent;
  let fixture: ComponentFixture<ConversionNameRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversionNameRendererComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionNameRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a selected event when clicked and not disabled', () => {
    const mockRowData = { conversionName: 'Sample Conversion', reportStatus: 'Success' };
    component.rowData = mockRowData;
    spyOn(component.selected, 'emit');
    const linkElement = fixture.nativeElement.querySelector('sdf-link');
    linkElement.click();
    expect(component.selected.emit).toHaveBeenCalledWith(mockRowData);
  });

  it('should not emit a selected event when clicked and disabled', () => {
    const mockRowData = { conversionName: 'Sample Conversion', reportStatus: 'Failure' };
    component.rowData = mockRowData;
    spyOn(component.selected, 'emit');
    const linkElement = fixture.nativeElement.querySelector('sdf-link');
    linkElement.click();
    expect(component.selected.emit).not.toHaveBeenCalled();
  });
});
