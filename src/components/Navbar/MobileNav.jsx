import React from "react";
import {
    MobileNav,
    Typography,
    Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink>Home</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );


    // const navList = [
    //     { id: 1, name: 'Home', link: '/' },
    //     { id: 2, name: 'Available Food', link: '/availableFood' },
    //     { id: 3, name: 'Add Food', link: '/addFood' },
    //     { id: 4, name: 'Manage My Foods', link: '/manageMyFoods' },
    //     { id: 5, name: 'My Food Request', link: '/myFoodRequest' },
    // ]
    return (
        <div>
            <MobileNav open={openNav}>
                {navList}
                {/* {
                        navList.map(item => <ul key={item.id} className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"
                            >
                                <NavLink
                                    to={item.link}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </Typography>
                        </ul>)
                    } */}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm" className="">
                        <span>Log In</span>
                    </Button>
                    <Button fullWidth variant="gradient" size="sm" className="">
                        <span>Sign in</span>
                    </Button>
                </div>
            </MobileNav>
        </div>
    );
};

export default MobileNavbar;