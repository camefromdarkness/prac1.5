import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({
  image,
  title,
  description,
  price,
}: Product) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] bg-white p-3 shadow-[0_12px_40px_rgba(28,47,62,0.055)] sm:p-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#e9eff0]">
        <Image
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
          src={image}
          alt={title}
          width={640}
          height={480}
          sizes="(max-width: 639px) 92vw, (max-width: 1023px) 45vw, 23vw"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-1 sm:pt-6">
        <h2 className="text-[20px] font-semibold leading-tight text-[#192c3a] sm:text-[22px]">
          {title}
        </h2>
        <p className="mt-2 min-h-12 text-[14px] leading-6 text-[#74818a]">
          {description}
        </p>
        <div className="mt-auto pt-5">
          <p className="text-[15px] text-[#465560]">
            {price.toLocaleString("ru-RU")} ₽
          </p>
          <button
            className="mt-4 whitespace-nowrap rounded-full bg-[#17354a] px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#28536b]"
            type="button"
          >
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}