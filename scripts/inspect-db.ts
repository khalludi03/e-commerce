#!/usr/bin/env bun

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found')
  process.exit(1)
}

const sql = new (Bun.sql as any)(DATABASE_URL)

const product = await sql`SELECT * FROM public.product LIMIT 1`

console.log('Product from database:')
console.log(JSON.stringify(product[0], null, 2))

export { }
