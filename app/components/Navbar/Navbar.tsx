import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';
// import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    // { name: 'Galeria', href: '#exchange-section', current: false },
    // { name: 'Trabajo', href: '#features-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        // <Disclosure as="nav" className="navbar">
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
            <div className="relative flex h-12 sm:h-20 items-start ">
                <div className="flex flex-1 items-center sm:justify-between ">

                    {/* LOGO */}
                    <div className="flex flex-shrink-0 items-start">
                        <Image
                            className="hidden lg:block rounded-full"
                            src={'/images/Logo/logo2.png'}
                            alt="Crypto-Logo"
                            width={150}
                            height={100} 
                        />
                    </div>

                    {/* LINKS */}
                    <div className="hidden lg:flex items-center border-right ">
                        <div className="flex justify-end space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                        'px-3 py-4 rounded-md text-lg font-normal'
                                    )}
                                    aria-current={item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => window.open("https://api.whatsapp.com/send?phone=%2056998215896&text=%C2%A1Hola%21+%F0%9F%8C%9E%E2%9C%A8%0A%0A%C2%A1Espero+que+est%C3%A9s+teniendo+un+lindo+d%C3%ADa%21+%F0%9F%90%BE%0A%0AMe+encantar%C3%ADa+encargar+un+%2Aretrato%2A+para+mi+mascota.+%F0%9F%90%B6%F0%9F%92%96%0A%0A%C2%BFPodr%C3%ADas+%2Aexplicarme%2A+c%C3%B3mo+funciona+el+%2Aproceso%2A+y+darme+m%C3%A1s+informaci%C3%B3n%3F+%F0%9F%A4%94%0A%0A%C2%A1Muchas+gracias+de+antemano%21+%F0%9F%98%8A", "_blank")} 
                    className='hidden lg:flex justify-end text-l font-semibold py-4 px-4 lg:px-8 navbutton text-white'>Reserva</button>
                    {/* <Contactusform /> */}
                </div>

                {/* DRAWER FOR MOBILE VIEW */}
                {/* DRAWER ICON */}
                <div className='block lg:hidden'>
                    <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                </div>
            </div>
        </div>
        // </Disclosure>
    )
}

export default Navbar;
