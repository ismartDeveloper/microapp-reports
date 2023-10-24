
  it('should set status to "error" for reportStatus "Failed"', () => {
    const report = new ReportError();
    report.reportStatus = 'Failed';

    setStatus(report);

    expect(report.status).toEqual('error');
  });

  it('should set status to "warning" for reportStatus "In Progress"', () => {
    const report = new ReportError();
    report.reportStatus = 'In Progress';

    setStatus(report);

    expect(report.status).toEqual('warning');
  });

  it('should set status to "success" for reportStatus "Success"', () => {
    const report = new ReportError();
    report.reportStatus = 'Success';

    setStatus(report);

    expect(report.status).toEqual('success');
  });


