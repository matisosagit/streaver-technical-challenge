"use client";
import Link from 'next/link';
import { useState } from 'react';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-neutral-secondary-medium border-b border-default">
            <div className="flex justify-between items-center px-6 py-4">
                <Link href='/' className="text-xl font-bold text-heading hover:text-brand transition-colors">
                    Streaver
                </Link>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <li>
                        <Link href='/' className="text-body hover:text-heading transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/posts' className="text-body hover:text-heading transition-colors">
                            Posts
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col justify-center items-center gap-1.5 focus:outline-none hover:bg-white/10 p-2 rounded-md transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        {/* Línea Superior */}
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        {/* Línea Central */}
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        {/* Línea Inferior */}
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-primary-soft border-t border-default">
                    <ul className="flex flex-col gap-4 px-6 py-4">
                        <li>
                            <Link 
                                href='/' 
                                className="text-body hover:text-heading transition-colors block"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/posts' 
                                className="text-body hover:text-heading transition-colors block"
                                onClick={() => setIsOpen(false)}
                            >
                                Posts
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}