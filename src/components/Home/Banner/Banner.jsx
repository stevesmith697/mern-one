import { useEffect } from "react";
import {readMore} from "../../../main"
import bannerImg from '../../../assets/product.png'

const Banner = () => {
  useEffect(()=>{
       readMore(".banner-main");
  },[])
    return (
        <>
        <section className="gradient-1 text-[#fff] banner-main">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-[15px] min-h-[500px]">
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                        <h2 className="font-semibold lg:text-[120px]">Sales</h2>
                        <p className="read-more">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis rem soluta, minima ratione, quis tempora quae eveniet accusamus corporis dolorum a alias ad magnam quo facere, facilis pariatur maiores!
                        Labore consectetur perferendis libero quaerat tempora laudantium modi vitae porro aut sit architecto, ipsum dolore dolorum omnis illum illo non voluptates quo quis doloribus sapiente? Suscipit itaque nesciunt enim rerum.</p>
                        <div className="flex items-center gap-[15px] mt-[40px]">
                        <button type="button" class="btn-secondary">Read More</button>
                        <button type="button" class="btn-primary">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                        <img src={bannerImg} alt="banner-img" className="w-full max-h-[300px] lg:max-h-[500px] object-contain" />
                    </div>
                </div>
            </div>
        </section>
         
        </>
    );
       
};

export default Banner;
