// app/nosotros/page.tsx
'use client';

import React from 'react';
import { Target, Eye, Heart, Users, Sparkles, Calendar, Award, Gem, HeartHandshake, Briefcase, Leaf, Clock, MapPin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- DEFINICIÓN DE VARIANTES ---

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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const drawLineVertical: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
  }
};

const drawLineHorizontal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
  }
};

export default function NosotrosPage() {
  const teamMembers = [
    { name: 'Alexandra Huamán', role: 'Integrante del equipo', image: '/images/alexandra-huaman.jpg' },
    { name: 'María Llanos', role: 'Integrante del equipo', image: '/images/maria-llanos.jpg' },
    { name: 'Yeny López', role: 'Integrante del equipo', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { name: 'Lorena Marcelo', role: 'Integrante del equipo', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
    { name: 'Alessandro Pérez', role: 'Integrante del equipo', image: '/images/alessandro-perez.jpg' },
    { name: 'Rocío Romero', role: 'Integrante del equipo', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
    { name: 'Janeth Siapo', role: 'Integrante del equipo', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
    { name: 'Brenda Vidal', role: 'Integrante del equipo', image: '/images/brenda-vidal.jpg' },
  ];

  const values = [
    {
      icon: Gem,
      title: 'Excelencia Artesanal',
      description: 'Lujo real en cada puntada. No vendemos un logo, sino la maestría manual y la obsesión por el detalle en piezas hechas para perdurar.',
    },
    {
      icon: HeartHandshake,
      title: 'Empoderamiento Consciente',
      description: 'Kallpa es fuerza compartida. Impulsamos tu imagen profesional mientras garantizamos trabajo digno y comercio justo para nuestras artesanas.',
    },
    {
      icon: Briefcase,
      title: 'Diseño con Propósito',
      description: 'Más que estética, funcionalidad inteligente. Fusionamos la tradición del tejido con las necesidades de tu vida moderna y profesional.',
    },
    {
      icon: Leaf,
      title: 'Integridad Sostenible',
      description: 'Transparencia total. Asumimos la responsabilidad de nuestro impacto, tomando decisiones que cuidan tanto al planeta como a nuestra comunidad.',
    },
  ];

  const timeline = [
    {
      year: 'Jul, 2025',
      title: 'Inicio del Proyecto',
      description: 'Un grupo de estudiantes universitarios da vida a Kallpa como proyecto de emprendimiento.',
    },
    {
      year: 'Ago, 2025',
      title: 'Definición de Marca',
      description: 'Creamos la identidad visual, el nombre Kallpa, y establecimos los valores y propósito del emprendimiento.',
    },
    {
      year: 'Sep, 2025',
      title: 'Primeros Prototipos',
      description: 'Diseñamos y elaboramos nuestros primeros prototipos de bolsos y accesorios hechos a mano.',
    },
    {
      year: 'Dic, 2025',
      title: 'Crecimiento',
      description: 'Más de 50 clientes satisfechos y presencia en redes sociales consolidada.',
    },
  ];

  const schedule = [
    { day: 'Lun - Vie', hours: '10:00 - 19:00', open: true },
    { day: 'Sábado', hours: '10:00 - 16:00', open: true },
    { day: 'Domingo', hours: 'Cerrado', open: false },
  ];


  return (
    <div className="container-custom py-12 md:py-20 overflow-hidden mt-16 sm:mt-16">
      {/* --- HERO SECTION - NUESTRA HISTORIA --- */}
      <section className="mb-20">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[var(--color-accent)]/10 rounded-full text-sm text-[var(--color-accent)] font-medium">
            <Sparkles className="w-4 h-4" />
            Nuestra Historia
          </div>
          {/* Tipografía responsiva */}
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">De las Aulas a tus Manos</h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-neutral)] max-w-3xl mx-auto leading-relaxed px-4">
            Un proyecto universitario que se convirtió en pasión por el arte artesanal peruano
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          {/* Left - Story Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "El Origen", desc: "Kallpa nació como un proyecto universitario de emprendimiento, impulsado por un grupo de estudiantes apasionados.", icon: Heart, color: "text-[var(--color-cta)]", bg: "bg-[var(--color-cta)]/10", border: "from-[var(--color-accent)]/5", borderColor: "border-[var(--color-accent)]/10" },
              { title: "El Significado", desc: "Nuestro nombre, 'Kallpa', proviene del quechua y significa 'fuerza' o 'energía'. Representa nuestra determinación.", icon: Award, color: "text-[var(--color-accent)]", bg: "bg-[var(--color-accent)]/10", border: "from-[var(--color-secondary)]/5", borderColor: "border-[var(--color-secondary)]/10" },
              { title: "Nuestro Compromiso", desc: "Cada bolso es una pieza única, tejida completamente a mano por nuestras artesanas con dedicación.", icon: Users, color: "text-[var(--color-secondary)]", bg: "bg-[var(--color-secondary)]/10", border: "from-[var(--color-accent)]/5", borderColor: "border-[var(--color-accent)]/10" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-gradient-to-br ${item.border} to-transparent rounded-2xl p-6 sm:p-8 border ${item.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg sm:text-xl font-semibold">{item.title}</h3>
                    <p className="text-[var(--color-neutral)] leading-relaxed text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative mt-8 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageReveal}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1617897210379-f4630c6c489a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Artesanas trabajando"
                // Altura responsiva: 350px en móvil, 600px en desktop
                className="w-full h-[350px] sm:h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Stats */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-3 gap-3 sm:gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {[
                  { val: "2025", label: "Creación" },
                  { val: "8", label: "Miembros" },
                  { val: "50+", label: "Clientes" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-[var(--color-cta)] mb-1">{stat.val}</div>
                    <div className="text-[10px] sm:text-xs text-[var(--color-neutral)] uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- TIMELINE --- */}
        <div className="relative">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="mb-2 text-2xl sm:text-3xl">Nuestro Camino</h3>
            <p className="text-[var(--color-neutral)] text-sm sm:text-base">La evolución de Kallpa a través del tiempo</p>
          </motion.div>

          <div className="relative">
            {/* LÍNEAS CONECTORAS RESPONSIVAS */}
            {/* Móvil: Vertical */}
            <motion.div
              className="absolute bg-[var(--color-accent)]/30 -z-10 left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 origin-top md:hidden"
              variants={drawLineVertical}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            {/* Desktop: Horizontal */}
            <motion.div
              className="absolute bg-[var(--color-accent)]/30 -z-10 hidden md:block top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-0.5 origin-left"
              variants={drawLineHorizontal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.div
              className="grid md:grid-cols-4 gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {timeline.map((item, index) => (
                <motion.div key={index} className="relative" variants={fadeInUp}>
                  <div className="card p-6 h-full hover:-translate-y-2 transition-transform duration-300 bg-[var(--color-bg)] md:bg-white z-10 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[var(--color-cta)]/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[var(--color-cta)]" />
                      </div>
                      <div className="text-xl sm:text-base font-bold text-[var(--color-cta)]">{item.year}</div>
                    </div>
                    <h4 className="mb-2 text-base sm:text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-[var(--color-neutral)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="mb-20">
        <motion.div
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/5 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[var(--color-accent)]/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-2xl sm:text-3xl">Misión</h2>
            </div>
            <p className="text-[var(--color-neutral)] leading-relaxed text-sm sm:text-base">
              Empoderar a la mujer profesional moderna, ofreciéndole bolsos y accesorios a crochet que fusionan un diseño elegante con una funcionalidad ejecutiva. Cada pieza es una declaración de estilo y fuerza, elaborada con maestría artesanal por talento local.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-secondary)]/5 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[var(--color-secondary)]/20 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <h2 className="text-2xl sm:text-3xl">Visión</h2>
            </div>
            <p className="text-[var(--color-neutral)] leading-relaxed text-sm sm:text-base">
              Al 2030, posicionarnos como la marca líder y principal referente de bolsos de lujo artesanal para la mujer profesional en el Perú. Seremos sinónimo de diseño innovador y funcionalidad ejecutiva, celebrados por nuestra calidad insuperable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- VALUES --- */}
      <section className="mb-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">Nuestros Valores</h2>
          <p className="text-[var(--color-neutral)] max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Los principios que guían cada decisión y cada puntada en Kallpa
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={index} variants={fadeInUp} className="card p-6 text-center h-full">
                <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[var(--color-accent)]" />
                </div>
                <h4 className="mb-3 text-lg font-semibold">{value.title}</h4>
                <p className="text-[var(--color-neutral)] text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* --- TEAM --- */}
      <section>
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">Nuestro Equipo</h2>
          <p className="text-[var(--color-neutral)] max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Conoce a las personas que hacen posible cada creación de Kallpa
          </p>
        </motion.div>

        {/* Grid responsivo: 2 col en móvil, 3 en tablet, 4 en desktop */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp} className="card overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h5 className="mb-1 text-sm sm:text-base font-semibold">{member.name}</h5>
                <p className="text-xs sm:text-sm text-[var(--color-neutral)]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- VISÍTANOS (BENTO GRID) --- */}
      <section className="my-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl">Visítanos</h2>
          <p className="text-[var(--color-neutral)] max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Encuéntranos y visítanos en nuestro espacio artesanal
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* IMAGEN DE LA TIENDA (Grande - Ocupa 2 columnas en desktop) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1736865875785-2073deb7185c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tienda Kallpa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Badge "Abierto ahora" */}
              {/*  <div className="absolute top-4 left-4 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Abierto ahora</span>
              </div> */}

              {/* Texto sobre la imagen */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Nuestro espacio</h3>
                <p className="text-white/90 text-sm sm:text-base max-w-md">
                  Kallpa, arte en crochet hecho a mano
                </p>
              </div>
            </div>
          </motion.div>

          {/* HORARIO */}
          <motion.div
            variants={fadeInUp}
            className="bg-[var(--color-accent)]/5 rounded-2xl p-6 border border-[var(--color-accent)]/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-cta)]/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-[var(--color-cta)]" />
              </div>
              <h3 className="text-xl font-semibold">Horario</h3>
            </div>

            <div className="space-y-3">
              {schedule.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-[var(--color-neutral)]/10 last:border-0">
                  <span className="text-[var(--color-neutral)] text-sm sm:text-base font-medium">{item.day}</span>
                  <span className={`text-sm sm:text-base font-semibold ${item.open ? 'text-[var(--color-cta)]' : 'text-[var(--color-neutral)]/50'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* UBICACIÓN */}
          <motion.div
            variants={fadeInUp}
            className="bg-[var(--color-secondary)]/5 rounded-2xl p-6 border border-[var(--color-secondary)]/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-semibold">Ubicación</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-[var(--color-neutral)] text-sm sm:text-base leading-relaxed">
                  Trujillo, La Libertad<br />
                  Perú
                </p>
              </div>
              <a

                href="https://maps.app.goo.gl/P8Zd36pjnaoQ8zTK7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-cta)] hover:text-[var(--color-primary)] transition-colors text-sm sm:text-base font-medium mt-4"
              >
                Ver en Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* MAPA DE GOOGLE (Ocupa 3 columnas - Ancho completo) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63197.60046857706!2d-79.09801459481945!3d-8.116748239861971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d7fe3fae92d%3A0xd3bc7d125d4e8508!2sTrujillo!5e0!3m2!1ses!2spe!4v1765819924217!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>


      {/* --- CTA SECTION --- */}
      <motion.section
        className="mt-16 sm:mt-20 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta)] rounded-2xl p-8 md:p-12 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="mb-4 text-white text-2xl sm:text-3xl md:text-4xl">Únete a Nuestra Comunidad</h2>
        <p className="mb-8 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
          Síguenos en redes sociales para conocer nuestras novedades, ver el proceso creativo
          detrás de cada pieza y ser parte de la familia Kallpa.
        </p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={staggerContainer}
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg hover:bg-white/90 transition-colors font-semibold shadow-lg"
          >
            Instagram
          </motion.a>
          {/*  <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-colors border border-white/30 font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Facebook
          </motion.a> */}
        </motion.div>
      </motion.section>
    </div>
  );
}