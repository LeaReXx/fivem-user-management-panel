const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div>My Post: {productId}</div>;
};

export default ProductPage;
