export interface Node {
  source: string;
  children: Array<Node>;
}

export const DUMMY_RESPONSE_DATA: Node = { source: 'AGROSTAR', children :[{ source:'INHOUSE',children:[] },{ source:'AWAY',children:[] }] };
