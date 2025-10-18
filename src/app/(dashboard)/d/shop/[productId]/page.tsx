const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <div className="p-4 w-full bg-gradient-to-t from-content-box-bg-color-1 to-content-box-bg-color-2 backdrop-blur-[2px] rounded-lg min-h-[500px]">
      My Post: {productId}
    </div>
  );
};

export default ProductPage;
