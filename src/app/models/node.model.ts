export interface Node {
  source: string;
  children: Array<Node>;
  open?: boolean;
  selected?: boolean;
}

export const DUMMY_RESPONSE_DATA: Node = { source: 'AGROSTAR', children :[{ source:'INHOUSE',children:[] },{ source:'AWAY',children:[] }] };
export const DUMMY_TREE_DATA: Node = { 
  source: 'AGROSTAR',
  children :[
    { source:'INHOUSE',children:[], open: true },
    { source:'AWAY',children:[] , open: true}
  ]
};
