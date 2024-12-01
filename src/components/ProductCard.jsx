import { Link } from 'react-router-dom';

function ProductCard({ item }) {
    const { thumbnail, category, title, price, quantity, id } = item
    return (
        <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow">
            <div>
                <a className="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={thumbnail}
                    />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 font-serif text-xs tracking-widest title-font mb-1">
                        {category}
                    </h3>
                    <h2 className="text-gray-900 font-serif title-font text-lg font-medium">
                        {title}
                    </h2>
                    <p className="mt-1 font-serif" >{price}</p>
                    <p className="mt-1 font-serif" >{quantity}</p>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard;