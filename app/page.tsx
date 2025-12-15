// app/page.tsx
'use client';

import React from 'react';
import { ArrowRight, Heart, Sparkles, Users, Award } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { getFeaturedProducts } from './lib/products';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="overflow-hidden">

      {/* Hero Section - ALTURA CORREGIDA */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <div className="grid md:grid-cols-2 h-full">
          {/* Left Side */}
          <div className="relative overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1696061873245-3acc4aecfdd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D')`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end md:justify-end p-6 sm:p-8 md:p-10 lg:p-16 text-white">
              <motion.div
                className="max-w-lg"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight font-bold">
                  Descubre Kallpa
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                  Bolsos tejidos a mano con materiales de alta calidad,
                  hechos con orgullo en Trujillo, Perú.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link
                    href="/bolsos"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/80 hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 group text-base sm:text-lg font-medium shadow-lg"
                  >
                    <span>Explorar Kallpa</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Secondary Image */}
          <div className="relative overflow-hidden hidden md:block">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1594638963668-52eb9798e8ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <motion.section
        className="container-custom py-10 sm:py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Se anima una sola vez al hacer scroll
        variants={staggerContainer}
      >
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">Productos Destacados</motion.h2>
          <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-[var(--color-neutral)] max-w-2xl mx-auto">
            Descubre nuestras creaciones más populares, diseñadas y tejidas a mano
            con los mejores materiales artesanales.
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {featuredProducts.map(product => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center">
          <Link href="/bolsos" className="btn-outline inline-block text-sm sm:text-base hover:scale-105 transition-transform duration-300">
            Ver Todos los Bolsos
          </Link>
        </motion.div>
      </motion.section>

      {/* Workshop CTA */}
      <section className="bg-[var(--color-accent)]/10 py-10 sm:py-12 md:py-16 overflow-hidden">
        <motion.div
          className="container-custom px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <motion.div
              className="order-2 md:order-1"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
            >
              {/* 2. Contenedor relativo que define el tamaño y bordes */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1632649027900-389e810204e6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Taller de crochet"
                  fill // Hace que la imagen llene el contenedor padre
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimización para móviles/desktop
                />
              </div>
            </motion.div>
            <div className="order-1 md:order-2">
              <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4">Aprende el Arte del Crochet</motion.h2>
              <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-[var(--color-neutral)] mb-4 sm:mb-6 leading-relaxed">
                Únete a nuestros talleres personalizados y descubre el mundo del tejido a mano.
                Desde nivel básico hasta avanzado, te enseñamos a crear tus propias piezas únicas.
              </motion.p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Grupos reducidos para atención personalizada",
                  "Materiales incluidos en cada sesión",
                  "Certificado al completar el curso"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-cta)] mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={fadeInUp}>
                <Link href="/servicios" className="btn-primary inline-block text-sm sm:text-base hover:shadow-lg hover:-translate-y-1 transition-all">
                  Conocer Talleres
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Materials Section */}
      <motion.section
        className="container-custom py-10 sm:py-12 md:py-16 lg:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">Materiales de Calidad</motion.h2>
          <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-[var(--color-neutral)] max-w-2xl mx-auto">
            Trabajamos solo con los mejores materiales artesanales para garantizar
            la durabilidad y belleza de cada pieza.
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {[
            { icon: Heart, title: "Algodón Premium", text: "Algodón Highlight de máxima calidad, suave al tacto y duradero." },
            { icon: Sparkles, title: "Cordones Artesanales", text: "Cordones de algodón y sintéticos de alta resistencia y colorido vibrante." },
            { icon: Users, title: "Tejido a Mano", text: "Cada pieza es única, tejida completamente a mano por nuestras artesanas." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              className="card p-4 sm:p-5 md:p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--color-accent)]" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-xs sm:text-sm md:text-base text-[var(--color-neutral)]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-6 sm:mt-8">
          <Link href="/materiales" className="btn-outline inline-block text-sm sm:text-base">
            Conocer Materiales
          </Link>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-secondary)]/5 py-10 sm:py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left - Content */}
            <motion.div variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--color-cta)]/10 rounded-full text-xs sm:text-sm text-[var(--color-cta)]">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                Emprendimiento Peruano
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6">Estudiantes con Pasión por el Arte</motion.h2>
              <motion.p variants={fadeInUp} className="text-sm sm:text-base md:text-lg text-[var(--color-neutral)] mb-6 sm:mb-8 leading-relaxed">
                Somos un equipo de estudiantes universitarios apasionados por el arte del crochet
                y el emprendimiento. Cada compra apoya nuestro sueño de llevar el arte artesanal
                peruano al mundo mientras generamos un impacto positivo en nuestra comunidad.
              </motion.p>

              {/* Key Points */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { title: "100% Hecho a Mano", desc: "Cada pieza es única y tejida con dedicación", icon: Heart },
                  { title: "Equipo Comprometido", desc: "8 estudiantes universitarios unidos por la pasión", icon: Users },
                  { title: "Calidad Garantizada", desc: "Más de 20 productos artesanales", icon: Sparkles },
                ].map((pt, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[var(--color-cta)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                      <pt.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-cta)]" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm sm:text-base font-semibold">{pt.title}</h4>
                      <p className="text-xs sm:text-sm text-[var(--color-neutral)]">{pt.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/nosotros"
                  className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base hover:gap-3 transition-all"
                >
                  Conocer Nuestra Historia
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Image & Stats */}
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
              }}
            >
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjB0ZWFtfGVufDF8fHx8MTc2NDk4MjYyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Equipo Kallpa"
                  fill // Le dice a la imagen: "llena el contenedor de arriba"
                  className="object-cover" // Mantiene la proporción sin estirarse
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimización para móviles
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Floating Stats Cards */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
                  <motion.div
                    className="grid grid-cols-3 gap-2 sm:gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {[
                      { val: "100%", label: "Artesanal" },
                      { val: "8", label: "Integrantes" },
                      { val: "20+", label: "Productos" }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-lg"
                      >
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-cta)] mb-0.5 sm:mb-1">{stat.val}</div>
                        <div className="text-[10px] sm:text-xs text-[var(--color-neutral)]">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[var(--color-cta)] text-white rounded-full p-4 sm:p-5 md:p-6 shadow-xl hidden md:block"
                initial={{ opacity: 0, scale: 0.5 }}   // Empieza invisible y a mitad de tamaño
                whileInView={{ opacity: 1, scale: 1 }} // Termina visible y tamaño real
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut" // Movimiento fluido sin rebotes bruscos
                }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-1">🇵🇪</div>
                  <div className="text-[10px] sm:text-xs">Hecho en</div>
                  <div className="text-xs sm:text-sm font-semibold">Perú</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}