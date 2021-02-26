import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Node } from "../../models/node.model";
import { Observable } from "rxjs";

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnChanges {

  @Input() node:Node;
  @Input() selectable:boolean = false;
  @Input() collapsible:boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.node && this.node){
      this.addMissingFields(this.node,'',0);
    }
  }

  addMissingFields(node:Node, parentAddress:string , index:number) {
    node['address'] = parentAddress  + index;
    (!node['open']) && (node['open']=true);
    (this.selectable && !node['selected']) && (node['selected']=true);
    node['selectedChildrenCount'] = node.children.length;
    let i = 0;
    node.children.forEach(childNode => {
      this.addMissingFields(childNode,node['address'],i++);
    });
  };

  changed($event: Event,node:Node){
    let checked = (<HTMLInputElement>$event.target).checked;
    this.setChildren(node ,checked);
    this.setParent(node,checked);
  }

  setChildren(node:Node, checked:boolean){
    node.selected = checked;
    checked?  ++node.selectedChildrenCount : --node.selectedChildrenCount;
    node.children.forEach(childNode => {
      childNode.selected = checked;
      this.setChildren(childNode,checked);
    });
  }

  setParent(childNode:Node , checked:boolean){
    let node = this.node;
    for(let i = 1; i<childNode.address.length; i++ ){
      if(checked){
        let selectedChildrenCount = 0;
        node.children.forEach(n => { n.selected && (selectedChildrenCount++) })
        if(selectedChildrenCount == node.children.length){
          node.selected = true, this.setParent(node, checked) 
        };
        node.selectedChildrenCount = selectedChildrenCount;
      }
      else{
        node.selectedChildrenCount --;
        node.selected = false;
      }
      node = node.children[ +childNode.address.charAt(i) ];
    }
  }
}