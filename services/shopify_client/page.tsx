const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

export async function shopifyFetch({
  query,
  variables,
}: {
  query: string
  variables?: Record<string, any>
}) {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    })

    const body = await result.json()

    if (body.errors) {
      throw new Error(body.errors.map((e: any) => e.message).join(", "))
    }

    return body
  } catch (error) {
    console.error("Shopify fetch error:", error)
    throw error
  }
}
