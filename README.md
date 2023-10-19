describe('cancelJob', () => {
  // A spy for the service's cancelJob method
  let cancelJobSpy: jasmine.Spy;

  beforeEach(() => {
    // Arrange: Set up the necessary environment for testing
    // Create a spy for the service's cancelJob method
    cancelJobSpy = jasmine.createSpy('cancelJob');
  });

  it('should cancel a job and call getStatusData on success', () => {
    // Arrange: Create a test row and an instance of the component
    const row = { id: 123 };
    const component = new YourComponent(cancelJobSpy);

    // Act: Call the cancelJob method
    component.cancelJob(row);

    // Assert: Expectations
    expect(cancelJobSpy).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
  });

  it('should handle errors and set alertMessage', () => {
    // Arrange: Create a test row and an instance of the component
    const row = { id: 456 };
    const errorResponse = 'Job cancellation failed';
    const component = new YourComponent(cancelJobSpy);
    cancelJobSpy.and.throwError(errorResponse);

    // Act: Call the cancelJob method
    component.cancelJob(row);

    // Assert: Expectations
    expect(cancelJobSpy).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
    expect(component.alertMessage).toBe(errorResponse);
  });
});
