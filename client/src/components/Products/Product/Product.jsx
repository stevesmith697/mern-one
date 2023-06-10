import ProductImage from '../../../assets/products/earbuds-prod-1.webp'

const Product = () => {
    return (
        <>
        <div className="flex flex-col gap-[20px] group/product">
            <figure className='relative overflow-hidden bg-slate-400'>
                <a href="/#">
                    <img src={ProductImage} alt="product" className='h-[250px] w-full object-contain duration-200 ease-in-out group-hover/product:scale-110' />
                </a>
            </figure>
            <div className='flex flex-col gap-[10px]'>
                <h4>Product Title</h4>
                <p>Product Description text</p>
                <p>$19.99</p>
            </div>
        </div>
        </>
    );
};

export default Product;
