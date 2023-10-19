describe('cancelJob', () => {
  let cancelJobSpy: jasmine.Spy;
  let component: YourComponent; // Replace 'YourComponent' with the actual component name

  beforeEach(() => {
    cancelJobSpy = jasmine.createSpy('cancelJob');
    component = new YourComponent(cancelJobSpy); // Initialize the component
  });

  it('cancels a job and calls getStatusData on success', () => {
    const row = { id: 123 };
    component.cancelJob(row);
    expect(cancelJobSpy).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
  });

  it('handles errors and sets alertMessage', () => {
    const row = { id: 456 };
    const errorResponse = 'Job cancellation failed';
    cancelJobSpy.and.throwError(errorResponse);
    component.cancelJob(row);
    expect(cancelJobSpy).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
    expect(component.alertMessage).toBe(errorResponse);
  });
});
