import { Node } from './node.model';

export interface Tree {
  status : boolean;
  responseData : Node;
  message: string;
}