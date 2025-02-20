import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  id: number;
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Exchange', 'Features', 'FAQ'],
  }
]

const socialLinks: Social[] = [
  { id: 1, imgsrc: '/images/Footer/insta.svg', href: "https://www.instagram.com/caar0o._/" },
  // { imgsrc: '/images/Footer/dribble.svg', href: "https://dribble.com/" },
  // { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/" },
  // { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/" },
]



const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Fondo radial */}
      <div className="radial-bg hidden lg:block absolute top-0 left-0 w-full h-full"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-full max-w-[200px] relative aspect-[2.5/1] mb-4">
            <Image
              src="/images/Logo/logo2.png"
              alt="Crypto-Logo"
              fill
              className="object-contain"
              sizes="(max-width: 200px) 100vw, 200px"
            />
          </div>

          {/* Texto descriptivo */}
          <p className="text-lightblue text-sm md:text-base font-normal leading-relaxed mb-8 md:mb-10 max-w-2xl text-center px-4">
            Disfruta de la experiencia de un retrato de tu mascota hecho con
            dedicación y detalle. En cada pincelada, capturamos la esencia y
            alegría de tu fiel amigo para convertirlo en una obra de arte
            única.
          </p>

          {/* Íconos de redes sociales */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((item) => (
              <Link 
                href={item.href} 
                key={item.id}
                className="transition-transform hover:scale-110"
              >
                <div className="relative w-[30px] h-[24px]">
                  <Image
                    src={item.imgsrc}
                    alt={item.imgsrc}
                    fill
                    className="object-contain footer-icons"
                    sizes="30px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="w-full border-t border-t-lightblue">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-offwhite text-sm md:text-base text-center">
            @2025 - Todos los derechos reservados por{" "}
            <Link 
              href="https://github.com/katarro/" 
              target="_blank"
              className="hover:text-lightblue transition-colors"
            >
              ❤️ fcastro
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



{/* CLOUMN-2/3 

 {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} 

 <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />(406) 555-012</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />tim.jennings@example.com</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Elgin St. Celina, Delaware 10299</h4>
          </div> */}