

export interface ShopifyPrice {
  amount: string
  currencyCode: string
}

export type ShopifyMoney = {
  amount: string
  currencyCode: string
}

export type ShopifyImage = {
  url: string
  altText: string | null
}

export type ShopifyImageEdge = {
  node: ShopifyImage
}

export type ShopifyImageConnection = {
  edges: ShopifyImageEdge[]
}

export type ShopifyVariant = {
  price: ShopifyMoney
  availableForSale: boolean
}

export type ShopifyVariantEdge = {
  node: ShopifyVariant
}

export type ShopifyVariantConnection = {
  edges: ShopifyVariantEdge[]
}

// ---------- Product ----------

export type ShopifyProduct = {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml?: string
  variants: ShopifyVariantConnection
  images: ShopifyImageConnection
}

export type ShopifyProductEdge = {
  node: ShopifyProduct
}