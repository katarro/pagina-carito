"use client"
import Image from 'next/image';
import React from 'react';

const Banner = ({ imageWidth = 1000, imageHeight = 600 }) => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center" id="home-section">
      {/* Contenedor centrado para la imagen */}
      <Image
        src="/images/Banner/hero-image.png"
        alt="Fondo"
        quality={100}
        width={imageWidth}
        height={imageHeight}
        className="object-cover object-center"
      />
      {/* Overlay para armonizar la imagen con el fondo */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido principal centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-3xl mt-40 pt-40">
          <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-white">
            ¡Haz que cada momento con tu mascota sea inolvidable!
          </h1>
          <div className="flex justify-center">
            <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton">
              Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;