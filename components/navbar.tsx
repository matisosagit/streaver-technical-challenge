"use client";
import Link from 'next/link';

export function NavBar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-neutral-secondary-medium border-b border-default">
            <Link href='/' className="text-xl font-bold text-heading hover:text-brand transition-colors">
                Streaver
            </Link>
            <ul className="flex gap-6">
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
        </nav>
    )
}