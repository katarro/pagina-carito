"use client"
import Image from 'next/image';

interface Workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: Workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Paso 1',
        subheading: 'Envía una fotografía de tu mascota con la mejor calidad posible.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Paso 2',
        subheading: 'Acuerda los detalles y abona el 50% del costo del trabajo.',
        hiddenpara: '',
    },
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Paso 3',
        subheading: 'Al finalizar el cuadro, realiza el pago restante y recibe tu dibujo.',
        hiddenpara: '',
    },

];

const Work = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
                <div className="radial-bg"></div>
                <div className="text-center mb-14">
                    <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">Como trabajamos</h3>
                    <p className="text-bluish md:text-lg font-normal leading-8">
                        Sigue estos simples pasos para que tu mascota sea 
                        la protagonista de una maravillosa obra de arte.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
                    {workdata.map((items, i) => (
                        <div className="card-b p-8 relative" key={i}>
                            <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                                <Image
                                    src={items.imgSrc}
                                    alt={`Icono paso ${items.heading}`}
                                    width={44}
                                    height={44}
                                />
                            </div>
                           
                            <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                                {items.heading}
                            </h3>
                            <p className="text-base font-normal text-bluish text-center mt-2">
                                {items.subheading}
                            </p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">
                                {items.hiddenpara}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
