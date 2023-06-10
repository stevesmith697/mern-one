import categoryImage from '../../../assets/category/cat-1.jpg'

const Category = () => {
    return (
        <>
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <figure className="relative overflow-hidden rounded-xl group/category">
                           <img src={categoryImage} alt="category" className="h-[200px] w-full object-cover duration-200 ease-in-out group-hover/category:scale-110" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Category;
