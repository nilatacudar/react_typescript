export interface Basket {
  prestations: string[];
  appointment: string;
  address: string;
  totalPrice: number;
  totalDuration: number;
}

export interface Catalog {
  reference?: string;
  title?: string;
  categories?: categorie[];
}

interface prestation {
  reference: string;
  title: string;
  duration: number;
  price: number;
}

interface categorie {
  reference: string;
  title: string;
  prestations: prestation[];
}
