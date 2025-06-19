'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to monitoring service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-red-500 opacity-20 leading-none">
            500
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Oups ! Un problème{' '}
          <span className="text-red-500">
            technique
          </span>{' '}
          est survenu
        </h1>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Nous rencontrons actuellement un problème technique temporaire. 
          Notre équipe a été automatiquement notifiée et travaille à résoudre le problème rapidement.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <button
            onClick={reset}
            className="w-full p-6 rounded-2xl transition-all duration-300 border bg-brand text-gray-900 border-brand hover:bg-brand/90 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-lg font-bold mb-3">
              Réessayer
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Relancer l'application
            </p>
          </button>

          <Link
            href="/"
            className="block w-full p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
          >
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Accueil
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Retour à la page d'accueil
            </p>
          </Link>

          <Link
            href="/contact"
            className="block w-full p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Support
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Contacter notre équipe
            </p>
          </Link>

          <Link
            href="/services"
            className="block w-full p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
          >
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Services
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Découvrir nos services
            </p>
          </Link>
        </div>
        
        {/* Support Information */}
        <div className="mt-16 text-left bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Besoin d'aide immédiate ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
              <p className="text-gray-600 text-sm">+352 28 37 24 10</p>
              <p className="text-gray-500 text-xs">Lun-Ven 9h-18h</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">contact@wedid.lu</p>
              <p className="text-gray-500 text-xs">Réponse sous 2h</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Chat Live</h3>
              <p className="text-gray-600 text-sm">Support immédiat</p>
              <p className="text-gray-500 text-xs">9h-18h en semaine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}