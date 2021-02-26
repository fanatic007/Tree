import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tree } from '../models/tree.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private DATA_URL = "https://www.mocky.io/v2/5cff79fc3200007100eac68f";  
  
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<Tree>{
    return this.httpClient.get<Tree>(this.DATA_URL, {responseType:'json'});
  }
}
