"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-4" // px-4 evita que toque los bordes en móviles muy pequeños
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                >
                    {/* CONTENEDOR DE ANCHO RESPONSIVO 
            Controla qué tan ancha se ve la línea respecto a la pantalla.
            - w-64 (256px): Móviles
            - sm:w-80 (320px): Móviles grandes
            - md:w-96 (384px): Tablets
            - lg:w-[32rem] (512px): Laptops
            - xl:w-[40rem] (640px): Pantallas grandes
          */}
                    <div className="relative flex flex-col items-center justify-center w-64 sm:w-80 md:w-96 lg:w-[32rem] xl:w-[40rem]">

                        {/* LOGO RESPONSIVO */}
                        <motion.img
                            src="/images/logo.png"
                            alt="Kallpa Logo"

                            /* CLASES DE TAMAÑO:
                               - w-32 (128px): Móvil base
                               - sm:w-40 (160px): Móvil grande
                               - md:w-56 (224px): Tablet (Tu tamaño original)
                               - lg:w-72 (288px): Escritorio
                               
                               - mb-4 a mb-8: Ajusta la separación con la línea según el tamaño de pantalla
                            */
                            className="w-40 sm:w-60 md:w-70 lg:w-100 h-auto mb-4 md:mb-6 lg:mb-8 object-contain z-10 relative"

                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.25, 0.1, 0.25, 1.0]
                            }}
                        />

                        {/* LÍNEA DE CARGA */}
                        <motion.div
                            // h-0.5 es delgada en móvil. 
                            // En desktop (md:h-[3px]) la hacemos un pelín más gruesa para que no se pierda, 
                            // pero sigue viéndose fina por la escala de la pantalla.
                            className="h-0.5 md:h-[3px] w-full rounded-full"

                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}

                            transition={{
                                duration: 2.0,
                                ease: "easeInOut"
                            }}

                            style={{
                                originX: 0.5,
                                background: `linear-gradient(90deg, 
                  #722420 0%, 
                  #847464 25%, 
                  #705E51 50%, 
                  #566876 75%, 
                  #2D2720 100%
                )`
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;