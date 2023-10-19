import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;
  let service: YourService; // Replace 'YourService' with the actual service name

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourComponent],
      providers: [YourService], // Provide your service here
    });

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(YourService); // Inject the service
  });

  it('cancels a job and calls getStatusData on success', () => {
    const row = { id: 123 };
    spyOn(service, 'cancelJob').and.returnValue(of({ success: true }));
    const getStatusDataSpy = spyOn(component, 'getStatusData');

    component.cancelJob(row);

    expect(service.cancelJob).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
    expect(getStatusDataSpy).toHaveBeenCalled(); // Ensure getStatusData is called on success
    expect(component.alertMessage).toBeUndefined(); // Ensure alertMessage is not set on success
  });

  it('handles errors and sets alertMessage', () => {
    const row = { id: 456 };
    const errorResponse = 'Job cancellation failed';
    spyOn(service, 'cancelJob').and.returnValue(throwError(errorResponse));

    component.cancelJob(row);

    expect(service.cancelJob).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
    expect(component.alertMessage).toBe(errorResponse);
  });
});
