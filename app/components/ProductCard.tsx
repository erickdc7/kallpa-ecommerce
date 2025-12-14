// components/ProductCard.tsx
'use client';

import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../lib/products';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const href = product.category === 'bolso' ? `/bolsos/${product.id}` : `/accesorios/${product.id}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.colors[0]);
  };

  return (
    <Link
      href={href}
      className="group cursor-pointer block bg-white rounded-xl sm:rounded-2xl border border-[var(--color-neutral)]/10 hover:border-[var(--color-neutral)]/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl aspect-square bg-[var(--color-neutral)]/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Floating Action Button - Más grande en desktop */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="bg-white text-[var(--color-primary)] w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-[var(--color-cta)] hover:text-white transition-colors cursor-pointer"
            aria-label="Agregar al carrito"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Rating Badge - Top Right - Responsivo */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1 flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[var(--color-cta)] text-[var(--color-cta)]" />
          <span className="text-xs sm:text-sm font-medium">{product.rating || 4.9}</span>
        </div>
      </div>

      {/* Product Info - Espaciado responsivo */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
        {/* Título - Tamaño responsivo */}
        <h3 className="text-base sm:text-base md:text-2xl line-clamp-2 min-h-[2rem] sm:min-h-[2rem] group-hover:text-[var(--color-cta)] transition-colors font-semibold text-center md:mb-1.5">
          {product.name}
        </h3>

        {/* Colors - Tamaño responsivo */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 justify-center">
          <div className="flex gap-0.5 sm:gap-1">
            {product.colors.slice(0, 5).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border border-white sm:border-2 shadow-sm"
                style={{
                  backgroundColor: getColorHex(color),
                }}
                title={color}
              />
            ))}
          </div>
          {product.colors.length > 5 && (
            <span className="text-[10px] sm:text-xs text-[var(--color-neutral)]">
              +{product.colors.length - 5}
            </span>
          )}
        </div>

        {/* Price - Tamaño responsivo */}
        <div className="mt-auto flex items-baseline gap-1 sm:gap-2 justify-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[var(--color-primary)]">
            S/ {product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}

// Helper function to convert color names to hex
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