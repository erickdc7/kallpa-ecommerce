// components/CartSidebar.tsx
'use client';

import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function CartSidebar() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  // Función para WhatsApp (sin cambios, funciona perfecto)
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }

    let message = '¡Hola, Kallpa! Me gustaría realizar el siguiente pedido:\n\n';

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   • Color: ${item.selectedColor || 'Sin especificar'}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio unitario: S/ ${item.price.toFixed(2)}\n`;
      message += `   • Subtotal: S/ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `*TOTAL: S/ ${getCartTotal().toFixed(2)}*\n\n`;
    message += '¿Podrían confirmar la disponibilidad y coordinar la entrega? ¡Gracias!';

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '51907202718';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay (Fondo oscuro) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] md:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[var(--color-neutral)]/20 bg-white z-10">
              <div className="flex items-center gap-3">
                <div className="bg-[var(--color-accent)]/10 p-2 rounded-lg">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                </div>
                <h2 className="font-semibold text-lg sm:text-xl">Tu Carrito</h2>
                <span className="bg-[var(--color-cta)] text-white text-xs font-bold px-2 py-0.5 rounded-lg">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-[var(--color-neutral)]/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Cerrar carrito"
              >
                <X className="w-6 h-6 text-[var(--color-neutral)]" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50/50">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="bg-[var(--color-neutral)]/10 p-6 rounded-full">
                    <ShoppingBag className="w-12 h-12 text-[var(--color-neutral)]/40" />
                  </div>
                  <div>
                    <p className="text-[var(--color-primary)] font-medium text-lg">Tu carrito está vacío</p>
                    <p className="text-sm text-[var(--color-neutral)] mt-1">
                      ¡Explora nuestra colección y encuentra algo único!
                    </p>
                  </div>
                  <button onClick={closeCart} className="btn-outline text-sm py-2 px-6 cursor-pointer">
                    Seguir comprando
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode='popLayout'>
                    {cart.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        key={`${item.id}-${item.selectedColor}`}
                        className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 relative group"
                      >
                        {/* Image */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 80px, 96px"
                            className="object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="text-sm sm:text-base font-semibold text-[var(--color-primary)] line-clamp-2 leading-tight">
                                {item.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(item.id, item.selectedColor)}
                                className="text-[var(--color-neutral)]/60 hover:text-red-500 transition-colors p-1 cursor-pointer"
                                aria-label="Eliminar producto"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            {item.selectedColor && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-[var(--color-neutral)]">Color:</span>
                                <span className="text-xs font-medium text-[var(--color-primary)] bg-gray-100 px-2 py-0.5 rounded">
                                  {item.selectedColor}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-end justify-between mt-2">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.selectedColor)}
                                className="w-8 h-8 flex items-center justify-center text-[var(--color-neutral)] hover:bg-white hover:shadow-sm rounded-l-lg transition-all cursor-pointer"
                                aria-label="Disminuir"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedColor)}
                                className="w-8 h-8 flex items-center justify-center text-[var(--color-neutral)] hover:bg-white hover:shadow-sm rounded-r-lg transition-all cursor-pointer"
                                aria-label="Aumentar"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <p className="text-[var(--color-cta)] font-bold text-sm sm:text-base">
                              S/ {(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer Fijo */}
            {cart.length > 0 && (
              <div className="border-t border-[var(--color-neutral)]/10 p-5 sm:p-6 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-10">
                <div className="space-y-3 mb-4">
                  {/* Fila 1: Subtotal */}
                  <div className="flex items-center justify-between text-sm text-[var(--color-neutral)]">
                    <span>Subtotal Productos</span>
                    <span>S/ {getCartTotal().toFixed(2)}</span>
                  </div>

                  {/* Fila 2: Envío (Aclaratoria) */}
                  <div className="flex items-center justify-between text-sm text-[var(--color-neutral)]">
                    <span>Costo de Envío</span>
                    <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded">
                      Por coordinar
                    </span>
                  </div>

                  {/* Separador sutil */}
                  <div className="h-px bg-gray-100 my-2" />

                  {/* Fila 3: Total APROXIMADO */}
                  <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                    <span>Total Estimado</span>
                    <span>S/ {getCartTotal().toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-right text-[var(--color-neutral)]/60 -mt-1">
                    * Sin incluir envío
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Completar pedido en WhatsApp
                </button>
                <p className="text-[10px] sm:text-xs text-center text-[var(--color-neutral)] mt-3 opacity-80">
                  Serás redirigido para confirmar tu pedido con un asesor.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}