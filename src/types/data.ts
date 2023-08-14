export interface DemoData {
  product_name: string;
  price: number;
  quantity: number;
  order_date: Date;
};

export interface QueryData {
  data: {
    rows: any[];
    pageCount: number;
  }
}