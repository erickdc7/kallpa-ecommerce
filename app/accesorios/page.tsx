// app/accesorios/page.tsx
'use client';

import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { getAccesorios } from '../lib/products';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- VARIANTES DE ANIMACIÓN ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const modalVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { 
    x: "0%", 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    x: "-100%", 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const productAnim: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function AccesoriosPage() {
  const allAccessories = getAccesorios();
  const [showFilters, setShowFilters] = useState(false);
  
  // 1. Nuevo estado para el Ordenamiento
  const [sortOrder, setSortOrder] = useState('default');

  // 2. Estado para los Filtros (Color y Tipo)
  const [filters, setFilters] = useState({
    color: 'all',
    type: 'all',
  });

  // 3. Lógica Combinada: Filtrar -> Luego Ordenar
  const getProcessedProducts = () => {
    // A. FILTRADO
    const processed = allAccessories.filter(product => {
      // Color filter
      if (filters.color !== 'all' && !product.colors.includes(filters.color)) {
        return false;
      }
      // Type filter
      if (filters.type !== 'all' && product.subcategory !== filters.type) {
        return false;
      }
      return true;
    });

    // B. ORDENAMIENTO (SORT)
    if (sortOrder === 'asc') {
      processed.sort((a, b) => a.price - b.price); // Menor a Mayor
    } else if (sortOrder === 'desc') {
      processed.sort((a, b) => b.price - a.price); // Mayor a Menor
    }

    return processed;
  };

  const displayProducts = getProcessedProducts();

  const resetFilters = () => {
    setSortOrder('default');
    setFilters({
      color: 'all',
      type: 'all',
    });
  };

  return (
    <div className="container-custom py-12 min-h-screen">
      
      {/* Header Animado */}
      <motion.div 
        className="mb-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="mb-4">Accesorios Artesanales</h1>
        <p className="text-[var(--color-neutral)] max-w-3xl">
          Complementa tu estilo con nuestros accesorios tejidos a mano.
          Cada pieza es única y funcional, perfecta para ti o para regalar.
        </p>
      </motion.div>

      <div className="flex gap-8">
        
        {/* Filters Sidebar - Desktop */}
        <motion.aside 
          className="hidden lg:block w-64 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="card p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button
                onClick={resetFilters}
                className="text-sm text-[var(--color-cta)] hover:underline transition-all cursor-pointer"
              >
                Limpiar
              </button>
            </div>

            {/* --- CAMBIO AQUÍ: Ordenar por Precio --- */}
            <div className="mb-6">
              <label className="block mb-3 font-medium text-sm">Ordenar por Precio</label>
              <Select
                value={sortOrder}
                onValueChange={(value) => setSortOrder(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar orden" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Relevancia</SelectItem>
                  <SelectItem value="asc">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="desc">Precio: Mayor a Menor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div className="mb-6">
              <label className="block mb-3 font-medium text-sm">Tipo de Accesorio</label>
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="monedero">Monederos</SelectItem>
                  <SelectItem value="cosmetiquera">Cosmetiqueras</SelectItem>
                  <SelectItem value="llavero">Llaveros</SelectItem>
                  <SelectItem value="porta-pods">Porta AirPods</SelectItem>
                  <SelectItem value="tarjetero">Tarjeteros</SelectItem>
                  <SelectItem value="porta-libretas">Porta Libretas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Color */}
            <div className="mb-6">
              <label className="block mb-3 font-medium text-sm">Color</label>
              <Select
                value={filters.color}
                onValueChange={(value) => setFilters({ ...filters, color: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="Azul">Azul</SelectItem>
                  <SelectItem value="Rojo">Rojo</SelectItem>
                  <SelectItem value="Negro">Negro</SelectItem>
                  <SelectItem value="Topo">Topo</SelectItem>
                  <SelectItem value="Blanco">Blanco</SelectItem>
                  <SelectItem value="Marrón">Marrón</SelectItem>
                  <SelectItem value="Terracota">Terracota</SelectItem>
                  <SelectItem value="Beige">Beige</SelectItem>
                  <SelectItem value="Rosa">Rosa</SelectItem>
                  <SelectItem value="Marfil">Marfil</SelectItem>
                  <SelectItem value="Verde oliva">Verde oliva</SelectItem>
                  <SelectItem value="Oliva oscuro">Oliva oscuro</SelectItem>
                  <SelectItem value="Gris">Gris</SelectItem>
                  <SelectItem value="Celeste">Celeste</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-outline flex items-center gap-2 cursor-pointer"
            >
              <Filter className="w-5 h-5" />
              Filtros / Ordenar
            </button>
          </div>

          {/* Results Count */}
          <motion.div 
            layout 
            className="mb-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            <p className="text-[var(--color-neutral)]">
              Mostrando {displayProducts.length} de {allAccessories.length} productos
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayProducts.map(product => (
                <motion.div
                  layout
                  key={product.id}
                  variants={productAnim}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          <AnimatePresence>
            {displayProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-[var(--color-neutral)] mb-4">
                  No se encontraron productos con estos filtros
                </p>
                <button onClick={resetFilters} className="btn-primary">
                  Limpiar Filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Filtros</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-[var(--color-neutral)]/10 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* --- Mobile: Ordenar por Precio --- */}
                  <div>
                    <label className="block mb-3 font-medium text-sm">Ordenar por Precio</label>
                    <Select
                      value={sortOrder}
                      onValueChange={(value) => setSortOrder(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar orden" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Relevancia</SelectItem>
                        <SelectItem value="asc">Precio: Menor a Mayor</SelectItem>
                        <SelectItem value="desc">Precio: Mayor a Menor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Type Filter */}
                  <div>
                    <label className="block mb-3 font-medium text-sm">Tipo de Accesorio</label>
                    <Select
                      value={filters.type}
                      onValueChange={(value) => setFilters({ ...filters, type: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="monedero">Monederos</SelectItem>
                        <SelectItem value="cosmetiquera">Cosmetiqueras</SelectItem>
                        <SelectItem value="llavero">Llaveros</SelectItem>
                        <SelectItem value="porta-pods">Porta AirPods</SelectItem>
                        <SelectItem value="tarjetero">Tarjeteros</SelectItem>
                        <SelectItem value="porta-libretas">Porta Libretas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Color */}
                  <div>
                    <label className="block mb-3 font-medium text-sm">Color</label>
                    <Select
                      value={filters.color}
                      onValueChange={(value) => setFilters({ ...filters, color: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="Azul">Azul</SelectItem>
                        <SelectItem value="Rojo">Rojo</SelectItem>
                        <SelectItem value="Negro">Negro</SelectItem>
                        <SelectItem value="Topo">Topo</SelectItem>
                        <SelectItem value="Blanco">Blanco</SelectItem>
                        <SelectItem value="Marrón">Marrón</SelectItem>
                        <SelectItem value="Terracota">Terracota</SelectItem>
                        <SelectItem value="Beige">Beige</SelectItem>
                        <SelectItem value="Rosa">Rosa</SelectItem>
                        <SelectItem value="Marfil">Marfil</SelectItem>
                        <SelectItem value="Verde oliva">Verde oliva</SelectItem>
                        <SelectItem value="Oliva oscuro">Oliva oscuro</SelectItem>
                        <SelectItem value="Gris">Gris</SelectItem>
                        <SelectItem value="Celeste">Celeste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button onClick={resetFilters} className="btn-outline w-full cursor-pointer">
                    Limpiar Filtros
                  </button>
                  <button onClick={() => setShowFilters(false)} className="btn-primary w-full cursor-pointer">
                    Ver Productos
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}