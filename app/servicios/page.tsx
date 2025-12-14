// app/servicios/page.tsx
'use client';

import React from 'react';
import { Clock, Users, GraduationCap, Wrench, Sparkles, Mail, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image'; // 1. No olvides importar esto al inicio
// --- DEFINICIÓN DE VARIANTES ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" }
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

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 }, // Reduje el movimiento para móviles
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function ServiciosPage() {
  return (
    <div className="overflow-hidden">

      {/* --- HERO SECTION --- */}
      {/* Cambio: min-h-[500px] permite que crezca si el texto es largo en móvil */}
      <section className="relative min-h-[500px] lg:h-[650px] flex items-center overflow-hidden">

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-fixed" // bg-fixed da efecto parallax en desktop
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1591659302156-23ceae367af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwd29ya3Nob3AlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjQ5ODIwODl8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          {/* Gradiente más fuerte en móvil para que el texto blanco se lea bien */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary)]/40 sm:to-transparent" />
        </div>

        {/* Contenido Hero */}
        <div className="container-custom relative z-10 w-full py-20 lg:py-0">
          <motion.div
            className="max-w-2xl text-white px-4 sm:px-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Aprende con nosotros
            </motion.div>

            {/* Título responsivo: se ajusta al tamaño de pantalla */}
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-bold">
              Talleres de Crochet y Servicios de Cuidado
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-xl">
              Aprende el arte del tejido a mano o mantén tus piezas como nuevas con nuestros servicios especializados.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/51907202718?text=Hola,%20me%20interesa%20información%20sobre%20los%20talleres."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-3.5 rounded-full hover:bg-white/90 transition-all group font-semibold shadow-lg hover:shadow-xl"
              >
                <span>Consultar Talleres</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/51907202718?text=Hola,%20necesito%20mantenimiento%20para%20mi%20bolso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/80 px-8 py-3.5 rounded-full hover:bg-white/20 transition-all font-semibold"
              >
                <span>Mantenimiento</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats - Ocultos en móvil muy pequeño, visibles en Tablet (md) en adelante */}
        <div className="absolute bottom-8 right-8 hidden md:flex gap-6">
          {[
            { val: "50+", label: "Estudiantes" },
            { val: "4.9", label: "Valoración" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (idx * 0.2), duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-white text-center border border-white/10 shadow-lg"
            >
              <div className="text-3xl mb-1 font-bold">{stat.val}</div>
              <div className="text-xs uppercase tracking-wider text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container-custom py-12 lg:py-20">
        {/* Header Section */}
        <motion.div
          className="mb-12 lg:mb-20 text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-3xl sm:text-4xl">Nuestros Servicios</h2>
          <p className="text-[var(--color-neutral)] max-w-2xl mx-auto text-sm sm:text-base">
            Además de nuestros productos, ofrecemos talleres de crochet y servicios
            de mantenimiento para que tus bolsos siempre luzcan como nuevos.
          </p>
        </motion.div>

        {/* --- WORKSHOPS INFO SECTION --- */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
            {/* Imagen: Orden 2 en móvil, 1 en desktop para variar ritmo */}
            <motion.div
              className="order-1 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              {/* 2. CREAMOS UN CONTENEDOR DIV:
      - Aquí ponemos las medidas (w-full, h-[250px]...)
      - Ponemos 'relative' para que la imagen sepa dónde ubicarse.
      - Ponemos 'rounded-2xl' y 'overflow-hidden' aquí para recortar la imagen.
  */}
              <div className="relative w-full h-[250px] sm:h-[400px] rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1632649027900-389e810204e6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Taller de crochet"
                  fill // Le dice a la imagen: "llena el div padre"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimización para móviles
                />
              </div>
            </motion.div>

            <motion.div
              className="order-2 md:order-2 px-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="mb-4 text-2xl sm:text-3xl">Talleres de Crochet</motion.h2>
              <motion.p variants={fadeInUp} className="text-[var(--color-neutral)] mb-8 leading-relaxed">
                Aprende el arte del tejido a mano con nuestros talleres personalizados.
                Desde nivel básico hasta avanzado, te guiamos paso a paso.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: GraduationCap, title: "Nivel Básico", desc: "Aprende los puntos fundamentales." },
                  { icon: Users, title: "Nivel Intermedio", desc: "Perfecciona tu técnica y patrones." },
                  { icon: Sparkles, title: "Nivel Avanzado", desc: "Crea diseños únicos y complejos." }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--color-neutral)]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- WORKSHOP CARDS (PRECIOS) --- */}
          {/* Grid responsive: 1 col en móvil, 2 en tablet pequeña, 3 en desktop */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* CARD 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card p-6 sm:p-8 h-full flex flex-col"
            >
              <h4 className="mb-4 text-xl">Taller Básico</h4>
              <ul className="space-y-3 mb-8 text-[var(--color-neutral)] flex-grow text-sm sm:text-base">
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-[var(--color-accent)]" /> 4 sesiones de 2 horas</li>
                <li className="flex items-center gap-3"><Users className="w-5 h-5 text-[var(--color-accent)]" /> Grupos de 6-8 personas</li>
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-[var(--color-accent)]" /> Materiales incluidos</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-[var(--color-cta)] mb-4">S/ 180</div>
                <a href="https://wa.me/51907202718?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20el%20Taller%20de%20Crochet%20–%20Nivel%20Básico.%20Gracias."
                  target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center py-3">Inscribirme</a>
              </div>
            </motion.div>

            {/* CARD 2 (POPULAR) */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card p-6 sm:p-8 border-2 border-[var(--color-cta)] relative h-full flex flex-col shadow-xl bg-white scale-100 sm:scale-105 z-10"
            >
              <div className="absolute top-0 right-0 bg-[var(--color-cta)] text-white px-4 py-1 rounded-bl-xl text-xs font-bold tracking-wider">
                MÁS POPULAR
              </div>
              <h4 className="mb-4 text-xl mt-2">Taller Intermedio</h4>
              <ul className="space-y-3 mb-8 text-[var(--color-neutral)] flex-grow text-sm sm:text-base">
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-[var(--color-cta)]" /> 6 sesiones de 2.5 horas</li>
                <li className="flex items-center gap-3"><Users className="w-5 h-5 text-[var(--color-cta)]" /> Grupos de 5-6 personas</li>
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-[var(--color-cta)]" /> Kit Premium incluido</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-[var(--color-cta)] mb-4">S/ 280</div>
                <a href="https://wa.me/51907202718?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20el%20Taller%20de%20Crochet%20–%20Nivel%20Intermedio.%20Gracias."
                  target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center py-3">Inscribirme</a>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="card p-6 sm:p-8 h-full flex flex-col"
            >
              <h4 className="mb-4 text-xl">Taller Avanzado</h4>
              <ul className="space-y-3 mb-8 text-[var(--color-neutral)] flex-grow text-sm sm:text-base">
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-[var(--color-accent)]" /> 8 sesiones de 3 horas</li>
                <li className="flex items-center gap-3"><Users className="w-5 h-5 text-[var(--color-accent)]" /> Grupos de 4-5 personas</li>
                <li className="flex items-center gap-3"><Sparkles className="w-5 h-5 text-[var(--color-accent)]" /> Kit + Certificado</li>
              </ul>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-[var(--color-cta)] mb-4">S/ 420</div>
                <a href="https://wa.me/51907202718?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20el%20Taller%20de%20Crochet%20–%20Nivel%20Avanzado.%20Gracias."
                  target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center py-3">Inscribirme</a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- MAINTENANCE SECTION --- */}
        <motion.section
          className="bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-secondary)]/5 rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--color-accent)]/10 rounded-2xl flex items-center justify-center">
                  <Wrench className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <h2 className="text-2xl sm:text-3xl">Mantenimiento</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-[var(--color-neutral)] mb-8">
                ¿Tu bolso artesanal necesita cuidados? Ofrecemos servicios profesionales
                de limpieza y reparación para mantener tus piezas en perfecto estado.
              </motion.p>

              <div className="space-y-4">
                {[
                  { title: "Limpieza Profunda", price: "S/ 35", desc: "Lavado especializado para tejido." },
                  { title: "Reparación de Costuras", price: "S/ 25", desc: "Ajuste de puntos sueltos." },
                  { title: "Restauración Completa", price: "S/ 60", desc: "Limpieza + Reparación + Forro." }
                ].map((serv, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1 }}
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-transparent hover:border-[var(--color-accent)]/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-[var(--color-primary)]">{serv.title}</h4>
                      <span className="text-[var(--color-cta)] font-bold bg-[var(--color-cta)]/10 px-2 py-1 rounded text-sm">{serv.price}</span>
                    </div>
                    <p className="text-sm text-[var(--color-neutral)]">{serv.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-8">
                <a
                  href="https://wa.me/51907202718?text=Hola,%20necesito%20información%20sobre%20mantenimiento%20de%20bolsos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto inline-flex justify-center items-center gap-2 hover:shadow-lg transition-all py-3 px-8"
                >
                  <Mail className="w-5 h-5" />
                  Solicitar Servicio
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="mt-8 md:mt-0">
              {/* 1. CONTENEDOR: Aquí defines el tamaño responsivo y los bordes */}
              <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl shadow-lg overflow-hidden">

                <Image
                  src="https://images.unsplash.com/photo-1616168055878-e7ec60eeb202?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mantenimiento de bolsos"
                  fill // La imagen llena el contenedor
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw" // Optimización de carga
                />

              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}