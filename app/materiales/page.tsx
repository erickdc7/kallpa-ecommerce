// app/materiales/page.tsx
'use client';

import React from 'react';
import { Sparkles, Award, Leaf, Palette, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- DEFINICIÓN DE ANIMACIONES ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const pulseAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" }
  }
};

export default function MaterialesPage() {
  const materials = [
    {
      name: 'Algodón Highlight',
      description: 'Un hilo que se siente tan bien como se ve. Destaca por su suavidad superior y un ligero brillo que le da un toque de distinción a cada diseño. Al ser 100% algodón, es resistente y perfecto para crear accesorios que te acompañarán por mucho tiempo.',
      image: 'https://images.unsplash.com/photo-1597386983962-7859216d7543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjB5YXJuJTIwa25pdHRpbmd8ZW58MXx8fHwxNzY0ODk5MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['100% Algodón natural', 'Textura suave', 'Alta durabilidad', 'Amplia gama de colores'],
    },
    {
      name: 'Cordones de Algodón',
      description: 'La clave para la estructura y la textura. Este cordón garantiza una definición de punto superior, dando como resultado bolsos con una forma sólida y un relieve visualmente atractivo. Es el material ideal para accesorios modernos y duraderos.',
      image: 'https://images.unsplash.com/photo-1631945788919-24e76faead25?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Estructura trenzada', 'Grosor uniforme', 'Resistencia superior', 'Acabado profesional'],
    },
    {
      name: 'Cordones Sintéticos',
      description: 'La unión perfecta entre tecnología y diseño. Seleccionamos cordones sintéticos por su inigualable resistencia, ligereza y facilidad de mantenimiento. Estas cualidades garantizan bolsos increíblemente duraderos, ideales para el uso diario.',
      image: 'https://images.unsplash.com/photo-1674069688221-8f3f7ef6769f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      features: ['Todoterreno', 'Fácil limpieza', 'Colores vibrantes', 'Larga duración'],
    },
    {
      name: 'Trapillo',
      description: 'Para piezas con carácter y presencia. El trapillo es una cinta de algodón gruesa y flexible que nos permite crear bolsos con una estructura excepcional y una textura moderna. Es la opción ideal para accesorios robustos y duraderos.',
      image: 'https://images.unsplash.com/photo-1648005539099-709d5be525fb?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Material reciclado', 'Ecológico', 'Textura única', 'Estilo bohemio'],
    },
    {
      name: 'Cordón Satinado',
      description: 'La magia de una textura fluida. Se define por su superficie perfectamente lisa y su cuerpo flexible, lo que resulta en bolsos con una caída y un movimiento excepcionales. El tejido adquiere un acabado denso y pulido.',
      image: 'https://images.unsplash.com/photo-1698063516389-0ecb5583de12?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Hilo fino', 'Alta resistencia', 'Detalles delicados', 'Acabados refinados'],
    },
  ];

  return (
    <div className="overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary)]/10 via-[var(--color-bg)] to-[var(--color-accent)]/10 mt-16 sm:mt-12">
        <div className="container-custom py-12 md:py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <motion.div
              className="order-1 md:order-1 px-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 bg-[var(--color-accent)]/10 rounded-full text-sm text-[var(--color-accent)] font-medium">
                <Sparkles className="w-4 h-4" />
                Calidad Premium
              </motion.div>
              <motion.h1 variants={fadeInUp} className="mb-4 md:mb-6 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Materiales de Primera Calidad
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-[var(--color-neutral)] mb-6 md:mb-8 max-w-xl leading-relaxed">
                Seleccionamos cuidadosamente cada hilo y cordón para garantizar que tus bolsos artesanales sean duraderos, hermosos y verdaderamente únicos.
              </motion.p>

              {/* Key Features */}
              <motion.div variants={staggerContainer} className="space-y-3 md:space-y-4 mb-8">
                {[
                  "100% Materiales naturales y sintéticos de alta gama",
                  "Durabilidad garantizada para uso diario",
                  "Gran variedad de colores y texturas"
                ].map((text, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[var(--color-neutral)] text-sm sm:text-base">{text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats - Grid en móvil, Flex en desktop */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 md:flex md:gap-8 border-t border-[var(--color-neutral)]/20 pt-6">
                {[
                  { val: "5+", label: "Tipos" },
                  { val: "10+", label: "Colores" },
                  { val: "100%", label: "Calidad" }
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-[var(--color-cta)] mb-1">{stat.val}</div>
                    <div className="text-xs sm:text-sm text-[var(--color-neutral)]">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto w-full max-w-md md:max-w-full">
                <img
                  src="https://images.unsplash.com/photo-1697948607301-9662e6d86102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
                  alt="Materiales de calidad"
                  // Altura responsive
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Cards - Ocultas en móvil muy pequeño para no tapar */}
              <motion.div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-3 md:p-4 max-w-[140px] md:max-w-[180px] hidden sm:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-cta)]" />
                  <div>
                    <div className="text-xs md:text-sm font-semibold">Certificado</div>
                    <div className="text-[10px] md:text-xs text-[var(--color-neutral)]">Premium</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-xl shadow-xl p-3 md:p-4 max-w-[140px] md:max-w-[180px] hidden sm:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-1">
                  <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  <div>
                    <div className="text-xs md:text-sm font-semibold">Eco-Friendly</div>
                    <div className="text-[10px] md:text-xs text-[var(--color-neutral)]">Sostenible</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 md:w-64 md:h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -z-10"
          variants={pulseAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="absolute bottom-20 left-20 w-60 h-60 md:w-96 md:h-96 bg-[var(--color-secondary)]/5 rounded-full blur-3xl -z-10"
          variants={pulseAnimation}
          initial="hidden"
          animate="visible"
        />
      </section>

      <div className="container-custom py-12 md:py-20">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">Nuestros Materiales</h2>
          <p className="text-[var(--color-neutral)] max-w-3xl mx-auto text-sm sm:text-base">
            La calidad de nuestros productos comienza con la selección de los mejores materiales.
            Trabajamos solo con hilos y cordones de primera calidad.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="space-y-12 md:space-y-20">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              // En móvil: Flex columna normal (imagen arriba). En desktop: Grid alternado (zigzag)
              className={`flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* Image */}
              <motion.div
                className={`w-full ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
                variants={scaleIn}
              >
                <img
                  src={material.image}
                  alt={material.name}
                  // Altura adaptable: 250px en móvil, 400px en desktop
                  className="rounded-2xl shadow-xl w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className={`w-full ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl">{material.name}</h2>
                </div>

                <p className="text-[var(--color-neutral)] mb-6 leading-relaxed text-sm sm:text-base">
                  {material.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {material.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 bg-[var(--color-accent)]/5 rounded-lg p-3"
                      whileHover={{ scale: 1.02, backgroundColor: "var(--color-accent-light)" }}
                    >
                      <div className="w-2 h-2 bg-[var(--color-cta)] rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantee */}
        <motion.section
          className="mt-16 md:mt-24 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-secondary)]/10 rounded-3xl p-6 sm:p-10 md:p-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 variants={fadeInUp} className="mb-4 text-2xl sm:text-3xl md:text-4xl">Garantía de Calidad</motion.h2>
          <motion.p variants={fadeInUp} className="text-[var(--color-neutral)] max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Seleccionamos cuidadosamente cada material que utilizamos, asegurándonos de que
            cumple con nuestros altos estándares de calidad.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {[
              { icon: Award, title: "100%", sub: "Materiales de Calidad", color: "text-[var(--color-cta)]", bg: "bg-[var(--color-cta)]/10" },
              { icon: Leaf, title: "Eco", sub: "Opciones Sostenibles", color: "text-green-600", bg: "bg-green-600/10" },
              { icon: Palette, title: "+10", sub: "Colores Disponibles", color: "text-[var(--color-accent)]", bg: "bg-[var(--color-accent)]/10" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm w-full sm:w-[200px] flex flex-col items-center"
                variants={fadeInUp}
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.bg} rounded-full flex items-center justify-center mb-3`}>
                  <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color}`} />
                </div>
                <div className={`text-2xl sm:text-3xl font-bold ${item.color} mb-1 sm:mb-2`}>{item.title}</div>
                <p className="text-[var(--color-neutral)] text-xs sm:text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}