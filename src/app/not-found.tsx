'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-brand opacity-20 leading-none">
            404
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Page{' '}
          <span className="text-brand">
            introuvable
          </span>
        </h1>
        
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
          Utilisez la navigation pour explorer nos services et solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <Link
            href="/"
            className="block w-full p-6 bg-brand rounded-2xl hover:bg-brand/90 transition-all duration-300 border border-brand hover:shadow-lg text-gray-900"
          >
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-lg font-bold mb-3">
              Accueil
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Retour à la page d'accueil
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

          <Link
            href="/portfolio"
            className="block w-full p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Portfolio
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Voir nos réalisations
            </p>
          </Link>

          <Link
            href="/contact"
            className="block w-full p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Contact
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nous contacter
            </p>
          </Link>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin d'aide ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous accompagner dans votre transformation digitale.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
              <p className="text-gray-600 text-sm">+352 28 37 24 10</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">contact@wedid.lu</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Chat</h3>
              <p className="text-gray-600 text-sm">Support immédiat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}