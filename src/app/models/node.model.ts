export interface Node {
  source: string;
  children: Array<Node>;
  open?: boolean;
  selected?: boolean;
  selectedChildrenCount?:number;
  address?: string;
}

export const DUMMY_RESPONSE_DATA: Node = { source: 'AGROSTAR', children :[{ source:'INHOUSE',children:[] },{ source:'AWAY',children:[] }] };
export const DUMMY_TREE_DATA: Node = { 
  source: 'AGROSTAR',
  selected: true,
  children :[
    { source:'OUSE',children:[], open: true, selected: true },
    { source:'AWAY',children:[] , open: true, selected: true}
  ]
};
