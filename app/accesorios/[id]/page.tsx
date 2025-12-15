// app/bolsos/[id]/page.tsx
'use client';

import { notFound } from 'next/navigation';
import { getProductById } from '../../lib/products';
import { useCart } from '../../contexts/CartContext';
import { useState, use } from 'react';
import { ChevronLeft, Minus, Plus, Package, Ruler, Palette, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- VARIANTES DE ANIMACIÓN ---
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function BolsoDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params);
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  if (!product || product.category !== 'accesorio') {
    notFound();
  }

  const images = product.images && product.images.length > 0
    ? [product.image, ...product.images]
    : [product.image];

  const handleAddToCart = () => {
    if (!selectedColor) {
      alert('Por favor selecciona un color');
      return;
    }
    addToCart(product, quantity, selectedColor);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const getColorHex = (colorName: string): string => {
    const colorMap: { [key: string]: string } = {
      'Azul': '#3f4458',
      'Rojo': '#6c1928',
      'Negro': '#000000',
      'Topo': '#847363',
      'Blanco': '#ffffff',
      'Marrón': '#976746',
      'Terracota': '#c39279',
      'Beige': '#c9b19e',
      'Rosa': '#ab6485',
      'Marfil': '#FBF9DB',
      'Verde oliva': '#827E52',
      'Oliva oscuro': '#2B2A17',
      'Gris': '#8c8c8c',
      'Celeste': '#6888AF'
    };
    return colorMap[colorName] || '#948C7A';
  };

  return (
    // RESPONSIVE: Padding vertical reducido en móvil
    <div className="container-custom py-8 md:py-12 mt-16 sm:mt-20">

      {/* Breadcrumb */}
      <motion.div
        className="mb-6 md:mb-8"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/accesorios"
          className="inline-flex items-center gap-2 text-sm md:text-base text-[var(--color-neutral)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          Volver a Accesorios
        </Link>
      </motion.div>

      {/* Grid Principal: 1 columna en móvil, 2 en desktop */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

        {/* --- LEFT COLUMN: GALLERY --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          {/* Main Image */}
          <div
            className="card overflow-hidden mb-4 relative cursor-zoom-in bg-white"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
          >
            <div className="relative w-full aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    style={{
                      transform: showZoom ? 'scale(2)' : 'scale(1)',
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      transition: showZoom ? 'none' : 'transform 0.3s ease',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm rounded-full px-2 py-0.5 md:px-3 md:py-1 flex items-center gap-1 shadow-lg pointer-events-none z-10"
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-cta)] text-[var(--color-cta)]" />
              <span className="text-xs md:text-sm font-medium">{product.rating || 4.9}</span>
            </motion.div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)} 
                  className={`card overflow-hidden border-2 transition-all rounded-lg aspect-square ${selectedImage === index
                    ? 'border-[var(--color-cta)]'
                    : 'border-transparent hover:border-[var(--color-neutral)]/30'
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* --- RIGHT COLUMN: INFO --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Title Responsive */}
          <motion.h1 variants={fadeInUp} className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
            {product.name}
          </motion.h1>

          {/* Price Responsive */}
          <motion.div variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-[var(--color-cta)] mb-4 md:mb-6">
            S/ {product.price.toFixed(2)}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-[var(--color-neutral)] mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
            {product.description}
          </motion.p>

          {/* Colors */}
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Palette className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]" />
              <label className="font-semibold text-sm md:text-base">Colores Disponibles</label>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {product.colors.map((color) => (
                <div key={color} className="relative group">
                  <motion.button
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-full border transition-all cursor-pointer ${selectedColor === color
                      ? 'border-[var(--color-cta)] ring-4 ring-[var(--color-cta)]/20'
                      : 'border-[var(--color-neutral)]/30 hover:border-[var(--color-accent)]'
                      }`}
                    style={{
                      backgroundColor: getColorHex(color),
                      boxShadow: selectedColor === color ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                    }}
                    aria-label={color}
                  />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 hidden sm:block">
                    {color}
                  </span>
                </div>
              ))}
            </div>
            {/* Texto de color seleccionado para móvil donde no hay hover */}
            <div className="mt-2 text-sm text-[var(--color-neutral)] sm:hidden">
              Color seleccionado: <span className="font-medium text-[var(--color-primary)]">{selectedColor || 'Ninguno'}</span>
            </div>
          </motion.div>

          {/* Dimensions */}
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <Ruler className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]" />
              <label className="font-semibold text-sm md:text-base">Dimensiones</label>
            </div>
            <p className="text-[var(--color-neutral)] text-sm md:text-base">{product.dimensions}</p>
          </motion.div>

          {/* Materials */}
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <Package className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)]" />
              <label className="font-semibold text-sm md:text-base">Materiales</label>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((material, index) => (
                <span
                  key={index}
                  className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full text-xs md:text-sm"
                >
                  {material}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quantity Selector */}
          <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
            <label className="block mb-3 font-semibold text-sm md:text-base">Cantidad</label>
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 1 }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[var(--color-neutral)]/30 rounded-lg hover:bg-[var(--color-neutral)]/10 transition-colors cursor-pointer"
                aria-label="Disminuir cantidad"
              >
                <Minus className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              <span className="w-10 text-center font-semibold text-lg">{quantity}</span>

              <motion.button
                whileTap={{ scale: 1 }}
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-[var(--color-neutral)]/30 rounded-lg hover:bg-[var(--color-neutral)]/10 transition-colors cursor-pointer"
                aria-label="Aumentar cantidad"
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Add to Cart Button */}
          <motion.button
            variants={fadeInUp}
            whileHover={{ boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="btn-primary w-full text-base md:text-lg py-3 md:py-4 mb-4 cursor-pointer shadow-md"
          >
            Añadir al Carrito
          </motion.button>

          {/* Info Box */}
          <motion.div variants={fadeInUp} className="bg-[var(--color-accent)]/5 rounded-lg p-4">
            <p className="text-xs md:text-sm text-[var(--color-neutral)] leading-relaxed">
              <strong>Envíos:</strong> Coordinamos envíos a todo Lima y provincias.
              El costo se calcula al momento de confirmar el pedido por WhatsApp.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}