import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import Container from "../Cotainer/Container";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Available Food', link: '/availableFood' },
        { id: 3, name: 'Add Food', link: '/addFood' },
        { id: 4, name: 'Manage My Foods', link: '/manageMyFoods' },
        { id: 5, name: 'My Food Request', link: '/myFoodRequest' },
    ]
    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll bg-white shadow-lg">
            <Container>
                <nav className="sticky top-0 z-10 h-max max-w-full rounded-none">
                    <div className="flex items-center justify-between mx-4 my-4 lg:mx-8 lg:my-6">
                        {/* logo */}
                        <div className="text-center mx-4 my-3">
                            <h1 className="mr-4 cursor-pointer py-3 font-medium">Navbar</h1>
                        </div>
                        {/*meddle*/}
                        <div className="mr-4 hidden lg:block">
                            <ul className="flex items-center gap-3">
                                {
                                    navList.map(data => (
                                        <li className="py-4" key={data.id}>
                                            {/* <Link to={data.link}>{data.name}</Link> */}
                                            <NavLink
                                                to={data.link}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ?
                                                        "py-2 border-b-2 text-yellow-300 border-yellow-300 transition-colors duration-500 text-lg font-medium" :
                                                        "py-2 hover:border-b-2 hover:text-yellow-200 hover:border-yellow-200 transition-colors duration-500 text-lg font-medium"
                                                }
                                            >
                                                {data.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* last */}
                        <div className="mr-4 hidden lg:block">
                            <button className="bg-zinc-500 px-5 py-5 rounded-lg">LOg In</button>
                        </div>
                        <div className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            onClick={() => setOpenNav(!openNav)}>
                            {
                                openNav ? <IoClose className="h-6 w-6" /> :
                                    <IoMenu className="h-6 w-6" />
                            }
                        </div>
                    </div>
                    {
                        openNav ? <div className="lg:hidden  ">
                            <ul className="pl-16 bg-white shadow-lg min-w-40 z-20">
                                {
                                    navList.map(data => (
                                        <li className="py-4" key={data.id}>
                                            {/* <Link to={data.link}>{data.name}</Link> */}
                                            <NavLink
                                                to={data.link}
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ?
                                                        "py-2 border-b-2 text-yellow-300 border-yellow-300 transition-colors duration-500 text-lg font-medium" :
                                                        "py-2 hover:border-b-2 hover:text-yellow-200 hover:border-yellow-200 transition-colors duration-500 text-lg font-medium"
                                                }
                                            >
                                                {data.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                            :
                            ""
                    }
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;