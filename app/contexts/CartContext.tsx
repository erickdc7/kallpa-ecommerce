// contexts/CartContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Importa Product desde lib/products.ts en lugar de definirlo aquí
import type { Product } from '../lib/products';

interface CartItem extends Product {
    quantity: number;
    selectedColor?: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number, selectedColor?: string) => void;
    removeFromCart: (productId: string, selectedColor?: string) => void;
    updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    getCartCount: () => number;
    isCartOpen: boolean;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: Product, quantity: number = 1, selectedColor?: string) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(
                item => item.id === product.id && item.selectedColor === selectedColor
            );

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id && item.selectedColor === selectedColor
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity, selectedColor }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string, selectedColor?: string) => {
        setCart(prevCart =>
            prevCart.filter(item =>
                !(item.id === productId && item.selectedColor === selectedColor)
            )
        );
    };

    const updateQuantity = (productId: string, quantity: number, selectedColor?: string) => {
        if (quantity <= 0) {
            removeFromCart(productId, selectedColor);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId && item.selectedColor === selectedColor
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartTotal,
                getCartCount,
                isCartOpen,
                toggleCart,
                openCart,
                closeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};