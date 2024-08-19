export enum CoffeeCategoryEnum {
  cappuccino = 'cappuccino',
  latte = 'latte',
  macchiato = 'macchiato',
  americano = 'americano'
}

export type CoffeeType = {
  id: number;
  name: string;
  subTitle: string;
  type: string;
  price: number;
  image: string;
  rating: number;
};

export type GetCoffeeListReqParams = {
  text?: string;
  type?: CoffeeCategoryEnum;
};

export type OrderItem = {
  id: number;
  name: string;
  size: 'L';
  quantity: number;
};

export type OrderCoffeeReq = {
  address: string;
  orderItems: OrderItem[];
};

export type OrderCoffeeRes = {
  message: string;
  success: boolean;
};
