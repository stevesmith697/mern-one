import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const handleMenu = () => {
        let menuBtn = document.querySelector("#menu_btn");
        menuBtn.addEventListener("click", (e) => {
            setMenuActive(prevMenu => !prevMenu);
        })
    }

    useEffect(() => {
        handleMenu();
    }, [])

    return (
        <>
            <header className='py-[20px] bg-gray-700 text-white relative'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <h4 className='col-span-6 lg:col-span-3'>Logo</h4>
                        <div id='menu_main' className={`col-span-9 ${menuActive ? 'flex flex-col' : 'hidden'} bg-gray-700 p-[30px] w-full absolute left-0 top-full ! cf pt-0 lg:p-0 lg:flex-row lg:left-auto lg:top-auto lg:relative lg:flex items-center justify-end gap-[30px]`}>
                            <ul className="flex items-center flex-col lg:flex-row gap-[20px]">
                                <li className='duration-200 ease-in-out hover:opacity-70'>
                                    <a href="/#">
                                        Home
                                    </a>
                                </li>
                                <li className='duration-200 ease-in-out hover:opacity-70'>
                                    <a href="/#">
                                        About
                                    </a>
                                </li>
                                <li className='duration-200 ease-in-out hover:opacity-70'>
                                    <a href="/#">
                                        Categories
                                    </a>
                                </li>
                            </ul>
                            <ul className="flex items-center gap-[20px]">
                                <li><AiOutlineSearch /></li>
                                <li><AiOutlineHeart /></li>
                                <li><AiOutlineShoppingCart /></li>
                            </ul>
                        </div>
                        <div className='col-span-6 flex items-center justify-end lg:hidden'>
                            <span className='cursor-pointer' id="menu_btn">
                                <AiOutlineMenu />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
