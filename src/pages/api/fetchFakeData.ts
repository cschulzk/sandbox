import { DemoData } from "@/types/demoData"
import { NextApiRequest, NextApiResponse } from "next"

const data: DemoData[] = [
  {
    product_name: 'Product 1',
    price: 100,
    quantity: 1,
    order_date: new Date()
  },
  {
    product_name: 'Product 2',
    price: 100,
    quantity: 1,
    order_date: new Date()
  },
  {
    product_name: 'Product 3',
    price: 100,
    quantity: 1,
    order_date: new Date()
  },
  {
    product_name: 'Product 4',
    price: 100,
    quantity: 1,
    order_date: new Date()
  }
]

export async function fetchFakeData(
  res: NextApiResponse,
  req: NextApiRequest
) {
  const {options} =req.body;
  // Simulate some network latency
  await new Promise(r => setTimeout(r, 1000))

  res.json({
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
  })
}