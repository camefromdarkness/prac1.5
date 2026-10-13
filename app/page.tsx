import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
      <div className="mx-auto max-w-7xl">
        <section aria-label="Коллекция керамики">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-9 flex justify-center sm:mt-11">
            <button
              className="w-full whitespace-nowrap rounded-full bg-[#17354a] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#28536b] sm:w-auto sm:px-14 sm:text-[12px] sm:tracking-[0.12em]"
              type="button"
            >
              Смотреть всю коллекцию
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
