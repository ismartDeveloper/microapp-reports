import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DownloadService } from './download.service';

describe('DownloadService', () => {
  let service: DownloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadService);
  });


describe('YourApiService', () => {
  let service: YourApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YourApiService]
    });

    service = TestBed.inject(YourApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should download XLSX file', fakeAsync(() => {
    // Arrange
    const expectedUrl = 'https://your.api.endpoint/download';
    const fakeBlob = new Blob(['fake content'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const expectedResponse: HttpResponse<Blob> = new HttpResponse({ body: fakeBlob, headers: { get: () => 'Content-Disposition: attachment; filename="example.xlsx"' } });

    // Act
    let actualResponse: HttpResponse<Blob> | undefined;
    service.downloadXlsxFile().subscribe(response => {
      actualResponse = response;
    });

    // Assert - ensure that the correct URL was called
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');

    // Respond with the fake response
    req.flush(fakeBlob);

    // Simulate the passage of time until all pending asynchronous activities complete
    tick();

    // Assert - check the response
    expect(actualResponse).toEqual(expectedResponse);

    // Verify that there are no outstanding requests
    httpTestingController.verify();
  }));

  afterEach(() => {
    // After each test, make sure there are no pending requests
    httpTestingController.verify();
  });
});
}
