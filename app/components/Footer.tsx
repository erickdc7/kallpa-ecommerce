// components/Footer.tsx
'use client';

import React from 'react';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const socialPaymentVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function Footer() {
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus productos.";
  const whatsappLink = `https://wa.me/51907202718?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-neutral)]/10 overflow-hidden">
      <div className="container-custom">

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16">

          {/* Grid de Columnas con Animación Stagger - ORDEN CAMBIADO */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >

            {/* Products Column - AHORA VA PRIMERO */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[var(--color-primary)] mb-4 md:mb-6 tracking-wider text-xs sm:text-sm uppercase font-semibold">
                Productos
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/bolsos" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] text-sm sm:text-base after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                    Bolsos
                  </Link>
                </li>
                <li>
                  <Link href="/accesorios" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] text-sm sm:text-base after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                    Accesorios
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Service Column - SEGUNDO */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[var(--color-primary)] mb-4 md:mb-6 tracking-wider text-xs sm:text-sm uppercase font-semibold">
                Servicio
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/servicios" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] text-sm sm:text-base after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                    Talleres
                  </Link>
                </li>
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] text-sm sm:text-base after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Information Column - TERCERO */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[var(--color-primary)] mb-4 md:mb-6 tracking-wider text-xs sm:text-sm uppercase font-semibold">
                Información
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/nosotros" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] text-sm sm:text-base after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/materiales" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] text-sm sm:text-base after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                    Materiales
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* About Us Column - AHORA VA AL FINAL - Ocupa 2 columnas en lg */}
            <motion.div className="sm:col-span-2" variants={itemVariants}>
              <h4 className="text-[var(--color-primary)] mb-4 md:mb-6 tracking-wider text-xs sm:text-sm uppercase font-semibold">
                Sobre Kallpa
              </h4>
              <p className="text-[var(--color-neutral)] text-sm sm:text-base leading-relaxed mb-4 md:mb-6 ">
                Emprendimiento universitario peruano dedicado al arte del crochet artesanal.
                Diseñamos bolsos hechos a mano con dedicación, creatividad y amor por los detalles.
              </p>
            </motion.div>

          </motion.div>

          {/* ✨ NUEVA SECCIÓN: Redes Sociales y Métodos de Pago */}
          <motion.div
            className="flex flex-row sm:flex-row justify-between items-center gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16 pb-8 sm:pb-12 border-b border-[var(--color-neutral)]/10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Lado Izquierdo: Redes Sociales */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              variants={socialPaymentVariants}
            >
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/_kallpa.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--color-neutral)]/5 hover:bg-[var(--color-primary)] text-[var(--color-neutral)] hover:text-white rounded-lg transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--color-neutral)]/5  hover:bg-[var(--color-primary)] text-[var(--color-neutral)] hover:text-white rounded-lg transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Lado Derecho: Métodos de Pago */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4"
              variants={socialPaymentVariants}
            >
              {/* Yape - CON priority Y unoptimized PARA DEBUGGING */}
              <motion.div
              >
                <Image
                  src="/images/yape-logo.png"
                  alt="Yape"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  priority
                  unoptimized
                />
              </motion.div>

              {/* Plin */}
              <motion.div
              >
                <Image
                  src="/images/plin-logo.png"
                  alt="Plin"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Large Logo con Imagen - Animación especial */}
          <div className="text-center">
            <motion.div
              className="flex justify-center items-center"
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/logo.png"
                alt="Kallpa Crochet"
                width={600}
                height={200}
                className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl h-auto select-none"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Copyright Bar - Aparece al final */}
        <motion.div
          className="border-t border-[var(--color-neutral)]/10 py-4 sm:py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs sm:text-sm text-[var(--color-neutral)]/60">
            <p className="text-center md:text-left">&copy; 2025 Kallpa. Todos los derechos reservados.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/terminos" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                Términos
              </Link>
              <Link href="/privacidad" className="relative inline-block pb-0.5 text-[var(--color-neutral)] transition-colors hover:text-[var(--color-primary)] after:absolute after:left-1/2 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
                Privacidad
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 