import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';
import { ValidateService } from './validate.service';
import { of } from 'rxjs';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;
  let mockValidateService: jasmine.SpyObj<ValidateService>;

  beforeEach(() => {
    mockValidateService = jasmine.createSpyObj('ValidateService', ['getSystemErrors']);
    TestBed.configureTestingModule({
      declarations: [YourComponent],
      providers: [{ provide: ValidateService, useValue: mockValidateService }],
    });

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
  });

  it('should set dataRunId and systemErrorsData on ngOnInit', () => {
    // Arrange
    const fakeData = {
      data: {
        getDataRun: {
          _id: 'fakeId',
          dataRunResult: {
            results: [
              { results: { errors: ['error1'] }, taskId: 'taskId1', taskName: 'taskName1' },
              { results: { errors: ['error2'] }, taskId: 'taskId2', taskName: 'taskName2' },
            ],
            jobId: 'fakeJobId',
          },
        },
      },
    };

    mockValidateService.getSystemErrors.and.returnValue(of(fakeData));

    // Act
    component.ngOnInit();

    // Assert
    expect(component.dataRunId).toBe('fakeId');
    expect(component.systemErrorsData).toEqual([
      {
        message: JSON.stringify(['error1']),
        details: { DataRunID: 'fakeId', JobId: 'fakeJobId', TaskName: 'taskName1', TaskId: 'taskId1' },
      },
      {
        message: JSON.stringify(['error2']),
        details: { DataRunID: 'fakeId', JobId: 'fakeJobId', TaskName: 'taskName2', TaskId: 'taskId2' },
      },
    ]);
  });
});
