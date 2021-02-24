import { Component, OnInit } from '@angular/core';
import { Tree } from './models/tree.model';
import { Node } from './models/node.model';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{  
  title = 'Tree';
  tree : Tree;
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.getData().subscribe(tree => {
      this.tree = tree;
    });
  }
}