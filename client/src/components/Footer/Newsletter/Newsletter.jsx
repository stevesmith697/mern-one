import NewsletterBg from '../../../assets/newsletter-img.jpg'

import {FaFacebook, FaLinkedin, FaInstagram,FaTwitter} from "react-icons/fa"

const Newsletter = () => {
    return (
        <>
        <section style={{ backgroundImage: `url(${NewsletterBg})`}} className="bg-cover bg-center relative">
            <span className="absolute left-0 top-0 w-full h-full bg-[#00000010] z-10"></span>
            <div className="container mx-auto z-40 relative">
                <div className="flex flex-col items-center justify-center gap-[15px] min-h-[300px] text-center">
                <h3 className="text-[1.75rem] uppercase">Newsletter</h3>
                <p className="text-[2rem] lg:text-[2.5rem] uppercase font-medium">Sign up for latest updates and offers</p>
                <form className="flex items-center gap-[15px]">
                    <input type="text" placeholder="Email Address" />
                    <button type="submit" className="form-btn">Submit</button>
                </form>
                <div className="social-icons flex items-center gap-[25px] mt-[20px]">
                    <a href="/#" rel="nofollow">
                        <FaFacebook size={20} />
                    </a>
                    <a href="/#" rel="nofollow">
                        <FaInstagram size={20} />
                    </a>
                    <a href="/#" rel="nofollow">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="/#" rel="nofollow">
                        <FaTwitter size={20} />
                    </a>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Newsletter;
