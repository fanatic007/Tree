import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';
import { DUMMY_RESPONSE_DATA, DUMMY_TREE_DATA } from "../../models/node.model";

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(()=>{

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not div without node initialized', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div')).toBe(null);
  });

  it('should show 3 LI s if not collapsible for our dummy data', () => {
    component.node = DUMMY_RESPONSE_DATA;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(3);
    component.collapsible=true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(1);
  });

  it('should show 3 LI s if collapsible but open for our dummy data', () => {
    component.node = DUMMY_RESPONSE_DATA;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(3);
    component.collapsible=true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(1);
  });

  it('should show LI s if open for our dummy data', () => {
    component.node = DUMMY_TREE_DATA;
    component.collapsible=true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(1);
    let openDummyTreeData = DUMMY_TREE_DATA;
    openDummyTreeData.open = true
    component.node = openDummyTreeData;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toEqual(3);
  });

  it('should show  3 INPUT checkboxes if selectable for our dummy data', () => {
    component.node = DUMMY_RESPONSE_DATA;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('input').length).toEqual(0);
    component.selectable = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('input').length).toEqual(3);
  });

  it('should show 3 checked checkboxes if they are checked in dummy data', () => {
    component.node = DUMMY_TREE_DATA;
    component.selectable = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('input:checked').length).toEqual(3);
    let openChildren = DUMMY_TREE_DATA ;
    openChildren.children[0].selected = false;
    component.node = openChildren;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('input:checked').length).toEqual(2);
  });
});
