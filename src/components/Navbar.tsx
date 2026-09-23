"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-800 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-white font-mono font-bold text-xl tracking-tighter"
                        >
                            <span className="text-primary">&lt;</span>
                            Aymane
                            <span className="text-primary">/&gt;</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/"
                                className="hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                            >
                                Home
                            </Link>

                            <Link
                                href="/#about"
                                className="hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                            >
                                About
                            </Link>

                            <Link
                                href="/#experience"
                                className="hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                            >
                                Experience
                            </Link>

                            <Link
                                href="/#education"
                                className="hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                            >
                                Education
                            </Link>

                            <Link
                                href="/#skills"
                                className="hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                            >
                                Skills
                            </Link>

                            <Link
                                href="/#projects"
                                className="hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                            >
                                Projects
                            </Link>

                            <Link
                                href="/#contact"
                                className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            className="text-gray-300 hover:text-white focus:outline-none p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-dark-800 border-b border-dark-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>

                        <Link
                            href="/#about"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/#experience"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Experience
                        </Link>

                        <Link
                            href="/#education"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Education
                        </Link>

                        <Link
                            href="/#skills"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Skills
                        </Link>

                        <Link
                            href="/#projects"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/#contact"
                            onClick={closeMenu}
                            className="block hover:bg-dark-700 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
};
