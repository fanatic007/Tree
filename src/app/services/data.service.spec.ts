import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Node } from '../models/node.model';
import { Tree } from '../models/tree.model';

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
    const dummyResponseData: Node = { source: 'AGROSTAR', children :[{ source:'INHOUSE',children:[] },{ source:'AWAY',children:[] }] };
    const dummyTree : Tree = { status: true, responseData: dummyResponseData, message: 'OK' };
    dataService.getData().subscribe(tree => {
      expect(tree.responseData.children.length).toBe(2);
      expect(tree).toEqual(dummyTree);
    });
    httpMock.expectOne(DATA_URL).flush(dummyTree);
  });
});