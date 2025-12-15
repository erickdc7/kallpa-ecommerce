// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Header() {
    const { getCartCount, toggleCart } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Detecta el scroll para cambiar el estilo del header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: '/', label: 'Inicio' },
        { id: '/bolsos', label: 'Bolsos' },
        { id: '/accesorios', label: 'Accesorios' },
        { id: '/servicios', label: 'Servicios' },
        { id: '/materiales', label: 'Materiales' },
        { id: '/nosotros', label: 'Nosotros' },
    ];

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white shadow-md'
                : 'bg-white backdrop-blur-md shadow-sm'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo-simple.png"
                            alt="Kallpa"
                            width={120}
                            height={40}
                            className="h-7 sm:h-8 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map(item => (
                            <Link
                                key={item.id}
                                href={item.id}
                                className={`
                                    relative pb-1 text-sm font-medium
                                    transition-colors duration-300
                                    ${isActive(item.id)
                                        ? 'text-[var(--color-cta)] after:w-full'
                                        : 'text-[var(--color-primary)] hover:text-[var(--color-cta)] after:w-0 hover:after:w-full'
                                    }
                                    after:absolute after:left-1/2 after:-bottom-1.5 after:h-[0.5px] 
                                    after:w-0 after:bg-[var(--color-cta)] after:transition-all after:duration-300 
                                    after:-translate-x-1/2
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Cart & Mobile Menu Button */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Cart Button */}
                        <button
                            onClick={toggleCart}
                            className="relative p-2 hover:bg-[var(--color-neutral)]/10 rounded-lg transition-colors cursor-pointer"
                            aria-label="Carrito de compras"
                        >
                            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[var(--color-cta)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                    {getCartCount()}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-[var(--color-neutral)]/10 rounded-lg transition-colors cursor-pointer"
                            aria-label="Menú"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                            ) : (
                                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-[var(--color-neutral)]/20 bg-white">
                        <div className="flex flex-col items-center space-y-4">
                            {navItems.map(item => (
                                <Link
                                    key={item.id}
                                    href={item.id}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`
                                        relative px-4 py-2 text-center inline-block text-base font-medium
                                        transition-colors
                                        ${isActive(item.id)
                                            ? 'text-[var(--color-cta)] after:w-full'
                                            : 'text-[var(--color-primary)] hover:text-[var(--color-cta)] after:w-0 hover:after:w-full'
                                        }
                                        after:absolute after:left-1/2 after:-bottom-1 after:h-[0.5px]
                                        after:bg-[var(--color-cta)]
                                        after:transition-all after:duration-300
                                        after:-translate-x-1/2
                                    `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}