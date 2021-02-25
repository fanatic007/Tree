import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';
import { DUMMY_RESPONSE_DATA } from "../../models/node.model";

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not div without node initialized', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div')).toBe(null);
  });

  it('should show 4 UL s for our dummy data', () => {
    component.node = DUMMY_RESPONSE_DATA;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('ul').length).toEqual(4);
  });
});
