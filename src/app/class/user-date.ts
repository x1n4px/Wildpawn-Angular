export class UserDate {
  id!: number;
  email!: string;
  name!: string;
  surname!: string;
  birthdate!: string;
  cards!: Card[];
  address!: Address[];
}

export class Card {
  id!: number;
  details!: string;
  name!: string;
  user_id!: number;
}

export class Address {
  id!: number;
  street!: string;
  number!: string;
  zip_code!: string;
  town!: string;
  country!: string;
  user_id!: number;
}
