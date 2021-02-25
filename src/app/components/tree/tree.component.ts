import { Component, Input, OnInit } from '@angular/core';
import { Node, DUMMY_RESPONSE_DATA } from "../../models/node.model";

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() node:Node;
  
  constructor() { }

  ngOnInit(): void {
  }

}
