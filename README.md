

  it('cancels a job and calls getStatusData on success', () => {
    const row = { id: 123 };
    spyOn(service, 'cancelJob').and.returnValue(of({ success: true }));

    component.cancelJob(row);

    expect(service.cancelJob).toHaveBeenCalledWith({ scheduledJobId: row.id }, row.id);
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


