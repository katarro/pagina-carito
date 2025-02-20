"use client"
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center"
      id="home-section"
    >
      {/* Contenedor principal limitado a un ancho máximo y altura deseada */}
      <div className="relative w-full max-w-7xl h-[600px] lg:h-[800px]">
        {/* Imagen en modo fill para cubrir el contenedor */}
        <Image
          src="/images/Banner/hero-image.svg"
          alt="Fondo"
          fill
          priority
          quality={100}
          className="object-cover object-center md:rounded-3xl"
        />

        {/* Overlay para armonizar la imagen con el fondo */}
        <div className="absolute inset-0 bg-black opacity-20 md:rounded-3xl"></div>

        {/* Contenido principal centrado sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[10%]">
          <h1 className="text-5xl lg:text-5xl text-white mb-10 text-center font-handwriting ">
            ¡Haz que cada momento con tu mascota sea inolvidable!
          </h1>
          <button onClick={() => window.open("https://api.whatsapp.com/send?phone=%2056998215896&text=%C2%A1Hola%21+%F0%9F%8C%9E%E2%9C%A8%0A%0A%C2%A1Espero+que+est%C3%A9s+teniendo+un+lindo+d%C3%ADa%21+%F0%9F%90%BE%0A%0AMe+encantar%C3%ADa+encargar+un+%2Aretrato%2A+para+mi+mascota.+%F0%9F%90%B6%F0%9F%92%96%0A%0A%C2%BFPodr%C3%ADas+%2Aexplicarme%2A+c%C3%B3mo+funciona+el+%2Aproceso%2A+y+darme+m%C3%A1s+informaci%C3%B3n%3F+%F0%9F%A4%94%0A%0A%C2%A1Muchas+gracias+de+antemano%21+%F0%9F%98%8A", "_blank")} className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton shadow-lg">
            Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
