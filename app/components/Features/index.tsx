import Image from "next/image";

const portraitData = [
  { id: 1, imageUrl: "/images/Banner/hero-image.svg" },
  { id: 2, imageUrl: "/images/Banner/hero-image.svg" },
  { id: 3, imageUrl: "/images/Banner/hero-image.svg" },
  { id: 4, imageUrl: "/images/Banner/hero-image.svg" },
  { id: 5, imageUrl: "/images/Banner/hero-image.svg" },
  { id: 6, imageUrl: "/images/Banner/hero-image.svg" },

];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-40 pt-20 sm:pt-25 px-6 relative"
      id="features-section"
    >
      {/* Fondo radial */}
      <div className="radial-bg"></div>

      <div className="grid lg:grid-cols-1 gap-x-4 gap-y-4">
        {/* Título y subtítulo */}
        <h2 className="font-handwriting text-white text-4xl lg:text-6xl mb-4 text-center">
          Retratos
        </h2>
        <p className="font-handwriting text-white text-3xl lg:text-4xl mb-8 text-center">
          El arte de capturar el alma de tu compañero
        </p>

        {/* Galería de retratos en grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portraitData.map((portrait) => (
            <div
              key={portrait.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
                         hover:scale-105 hover:shadow-xl transition-all duration-100 "
            >
              {/* Imagen del retrato */}
              <Image
                src={portrait.imageUrl}
                alt={`Retrato ${portrait.id}`}
                width={500}
                height={500}
                priority
                className="w-full h-64 object-cover"
              />

              {/* Textos dentro de la card */}
              <div className="p-4 navcolor flex flex-col items-center ">
                <p className="font-handwriting text-2xl lg:text-2xl text-white mb-2">
                  5 horas de trabajo
                </p>
                <p className="font-handwriting text-4xl lg:text-2xl text-white">
                  Trazando la felicidad
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
