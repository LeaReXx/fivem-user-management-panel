import ProductDetailBox from "@/components/d/shop/product detail/ProductDetailBox";
import ProductDetailCarousel from "@/components/d/shop/product detail/ProductDetailCarousel";
import { products } from "@/data/product";
import { Product } from "@/types/product.types";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  let findProduct: Product | null = null;
  if (productId) {
    findProduct = products.find((item) => item.productId === productId) || null;
    if (!findProduct) {
      return <div>Product Not Found</div>;
    }
  } else {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="p-4 w-full bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-8">
          <ProductDetailCarousel
            images={findProduct.images}
            title={findProduct.title}
          />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <ProductDetailBox {...findProduct} />
        </div>
        <div className="col-span-12 bg-inside-box-bg-color p-4 rounded-lg">
          <p className="text-lg font-medium mb-2">توضیحات محصول:</p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
