import Product from './Product/Product'

const Products = () => {
    return (
        <>
        <section>
            <div className="container mx-auto">
                <h3 className='section-title'>Section Title</h3>
                <div className="grid grid-cols-12 gap-[20px] mt-[40px]">                
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <Product/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Products;
