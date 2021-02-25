import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Node, DUMMY_RESPONSE_DATA } from "../../models/node.model";

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges {

  @Input() node:Node;
  @Input() selectable:boolean = false;
  @Input() collapsible:boolean = false;

  list;  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.node && this.node){
      this.addFields(this.node);
    }
  }

  ngOnInit(): void {
    if(this.node){
      this.addFields(this.node);
    }
  }

  addFields(node) {
    (!node['open']) && (node['open']=!this.collapsible);
    (this.selectable && !node['selected']) && (node['selected']=false);
    node.children.forEach(childNode => {
      this.addFields(childNode);
    });
  };
}