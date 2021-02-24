import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { DUMMY_TREE } from '../models/tree.model';

describe('DataService', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;
  const DATA_URL = "http://www.mocky.io/v2/5cff79fc3200007100eac68f";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    dataService = TestBed.inject(DataService);
    httpMock =  TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call the  GET API endpoind with responseType as json', () => {
    dataService.getData().subscribe();
    const request = httpMock.expectOne(DATA_URL);
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('json');
  });

  it('should call the  GET API endpoind and return result of type Tree', () => {
    dataService.getData().subscribe(tree => {
      expect(tree.responseData.children.length).toBe(2);
      expect(tree).toEqual(DUMMY_TREE);
    });
    httpMock.expectOne(DATA_URL).flush(DUMMY_TREE);
  });
});