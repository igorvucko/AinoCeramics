import Header from "@/components/Header"
import Hero from "@/components/Hero"
import SelectedWorks from "@/components/SelectedWorks"
import { getProducts } from "@/services/product_shopify"

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <main className="bg-ivory min-h-screen">
        <Hero />
        <SelectedWorks products={products} />
      </main>
    </>
  )
}