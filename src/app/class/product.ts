export class Product {
  name!: string;
  image!: string;
  price!: string;
  animal!: string;
  weigth!: string;
  food_type!: string;
  animal_age!: string;
  animal_size!: string;
  description!: string;
  reference!: string;
  check!: number;
  Crude_protein!: string;
  Crude_fat!: string;
  Crude_fiber!: string;
  Crude_ash!: string;
  omega3!: string;
  omega6!: string;
  Composition!: string;
  Additives!: string;
  id!: number;
  ingredients!: Ingredient[];
  otherSize!: OtherSize;
  cantidad!: number;
}

export class Ingredient {
  name!: string;
  description!: string;
  image!: string;
  amount!: string;
}
export class OtherSize {
  [key: string]: {
    weight: string;
    reference: string;
    id: number;
    check: boolean;
  };
}
