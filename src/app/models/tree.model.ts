import { Node, DUMMY_RESPONSE_DATA } from './node.model';

export interface Tree {
  status : boolean;
  responseData : Node;
  message: string;
}

export const DUMMY_TREE : Tree = { status: true, responseData: DUMMY_RESPONSE_DATA, message: 'OK' };