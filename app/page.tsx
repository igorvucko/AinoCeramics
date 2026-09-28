import { getProducts } from "@/lib/shopify"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import SelectedWorks from "@/components/SelectedWorks"

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