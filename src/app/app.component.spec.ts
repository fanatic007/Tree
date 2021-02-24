import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { DUMMY_TREE } from './models/tree.model';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let dataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide:DataService, useFactory: () => jasmine.createSpyObj('DataService', ['getData']) }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tree'`, () => {
    expect(app.title).toEqual('Tree');
  });

  it(`should have implemented OnInit`, () => {
    expect(app.ngOnInit).toBeTruthy();
  });

  it(`should have dataService injected`, () => {
    expect(app['dataService']).toBeTruthy();
  });

  it(`should retrived data from endpoint and set to tree'`, () => {
    dataService.getData.and.returnValue(of( DUMMY_TREE ));
    app.ngOnInit();
    expect(app.tree).toEqual( DUMMY_TREE );
  });
});