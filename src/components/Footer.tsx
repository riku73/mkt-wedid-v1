'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h4 className="text-brand mb-6 text-2xl font-bold">Wedid</h4>
            <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-md">
              L'agence marketing digital de référence au Luxembourg. 
              Expertise locale, résultats internationaux.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📍</span> 12 Rue Erasme, L-1468 Luxembourg
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📞</span> +352 28 37 24 10
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">✉️</span> contact@wedid.lu
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/consultation-gratuite"
                className="inline-flex items-center bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand/90 transition-colors"
              >
                Consultation Gratuite
              </Link>
            </div>
          </div>
          
          <div>
            <h5 className="text-white mb-4 font-bold">Services</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">
                  Tous nos Services
                </Link>
              </li>
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
                <Link href="/about" className="hover:text-brand transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-brand transition-colors">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="/about/certifications" className="hover:text-brand transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-brand transition-colors">
                  Zones d'Intervention
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white mb-4 font-bold">Ressources</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/resources/blog" className="hover:text-brand transition-colors">
                  Blog Marketing
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="hover:text-brand transition-colors">
                  Guides & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/resources/tools" className="hover:text-brand transition-colors">
                  Outils Gratuits
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-brand transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand transition-colors">
                  Contact
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