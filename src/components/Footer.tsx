'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h4 className="text-brand mb-6 text-2xl font-bold">Wedid</h4>
            <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-md">
              L'agence marketing digital de référence au Luxembourg. 
              Expertise locale, résultats internationaux.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📍</span> Luxembourg-Ville
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📞</span> +352 12 34 56 789
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">✉️</span> contact@wedid.lu
              </p>
            </div>
          </div>
          
          <div>
            <h5 className="text-white mb-4 font-bold">Services</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/marketing-digital" className="hover:text-brand transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/services/creation-sites-web" className="hover:text-brand transition-colors">
                  Création Sites Web
                </Link>
              </li>
              <li>
                <Link href="/services/branding-design" className="hover:text-brand transition-colors">
                  Branding & Design
                </Link>
              </li>
              <li>
                <Link href="/services/consulting-formation" className="hover:text-brand transition-colors">
                  Consulting & Formation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white mb-4 font-bold">Entreprise</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/a-propos" className="hover:text-brand transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-brand transition-colors">
                  Équipe
                </Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-brand transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Wedid. Tous droits réservés. | Agence Marketing Digital Luxembourg</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;