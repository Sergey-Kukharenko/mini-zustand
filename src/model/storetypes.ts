import {
  CoffeeType,
  GetCoffeeListReqParams,
  OrderItem
} from '../types/coffeeTypes';

export type ListState = {
  coffeeList?: CoffeeType[];
  controller?: AbortController;
  params: GetCoffeeListReqParams;
};

export type ListActions = {
  getCoffeeList: (params?: GetCoffeeListReqParams) => void;
  setParams: (params?: GetCoffeeListReqParams) => void;
};

export type CartState = {
  cart?: OrderItem[];
  address?: string;
};

export type CartActions = {
  setAddress: (address: string) => void;
  addToCart: (item: CoffeeType) => void;
  orderCoffee: () => void;
  clearCart: () => void;
};
