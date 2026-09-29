import { shopifyFetch } from "@/services/shopify_client/page"
import type { ShopifyProductEdge, ShopifyProduct } from "@/types/shopify/page"

export async function getProducts(first: number = 10): Promise<ShopifyProductEdge[]> {
  const query = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `

  const response = await shopifyFetch({ query, variables: { first } })
  return response.data.products.edges
}

export async function getProduct(handle: string): Promise<ShopifyProduct> {
  const query = `
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        variants(first: 1) {
          edges {
            node {
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
  `

  const response = await shopifyFetch({ query, variables: { handle } })
  return response.data.product
}