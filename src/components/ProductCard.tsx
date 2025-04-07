type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img src={product.image} alt={`Image of ${product.title}`} width={100} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
}
