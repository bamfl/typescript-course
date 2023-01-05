class Product {
  id: number;
  name: string;
  price: number;
  count: number;

  constructor(id: number, name: string, price: number, count: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

class Delivery {
  date: Date = new Date();
  address: string | null = null;
  shopId: number | null = null;

  constructor(deliveryParams: IDeliveryParams) {
    if (deliveryParams.date) this.date = deliveryParams.date;
    if (deliveryParams.address) this.address = deliveryParams.address;
    if (deliveryParams.shopId) this.shopId = deliveryParams.shopId;
  }
}

class Cart {
  private _products: Product[] = [];
  private _delivery: Delivery | null = null;

  addProduct(product: Product): void {
    this._products.push(product);
  }

  removeProduct(product: Product): void {
    if (this._products.length > 0) {
      this._products = this._products.filter((p) => p.id !== product.id);
    }
  }

  calcTotalPrice(): number {
    return this._products.reduce((acc, curr) => acc + curr.price * curr.count, 0);
  }

  setDelivery(params: IDeliveryParams): void {
    this._delivery = new Delivery(params);
  }

  checkout(): boolean {
    if (this._products.length === 0) {
      throw new Error('Корзина пуста!');
    }
    if (!this._delivery) {
      throw new Error('Не выбран способ доставки');
    }
    if (!this._products.every((p) => p.count !== 0)) {
      throw new Error('Недостаточное количество товара');
    }

    return true;
  }
}

const cart = new Cart();

interface IDeliveryParams {
  date?: Date;
  address?: string;
  shopId?: number
}

cart.addProduct(new Product(1, 'Meet', 100, 3));
cart.addProduct(new Product(2, 'Eggs', 50, 2));
cart.addProduct(new Product(3, 'Vegs', 20, 2));
// cart.addProduct(new Product(3, 'Fruits', 20, 0));

console.log('totalPrice', cart.calcTotalPrice());

cart.removeProduct(new Product(2, 'Eggs', 50, 1));

console.log('totalPrice', cart.calcTotalPrice());
cart.setDelivery({shopId: 12});
console.log(cart.checkout());