export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Composition {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export interface Discipline {
  id: string;
  title: string;
  description: string;
  compositions: Composition[];
}