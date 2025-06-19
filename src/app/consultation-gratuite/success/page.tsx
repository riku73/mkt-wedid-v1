'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ConsultationSuccessPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-brand rounded-full mb-8">
            <span className="text-4xl">🎉</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
          Demande de Consultation{' '}
          <span className="text-brand">
            Confirmée !
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed">
          Merci pour ces informations détaillées. Notre équipe va analyser votre demande 
          et vous contacter dans les 24 heures pour planifier votre consultation gratuite de 45 minutes.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Processus de Consultation</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-gray-900">1</span>
              </div>
              <h4 className="font-bold mb-2">Analyse</h4>
              <p className="text-sm text-gray-600">24h pour analyser votre demande</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-gray-900">2</span>
              </div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p className="text-sm text-gray-600">Appel pour planifier le RDV</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-gray-900">3</span>
              </div>
              <h4 className="font-bold mb-2">Consultation</h4>
              <p className="text-sm text-gray-600">45 minutes avec un expert</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-gray-900">4</span>
              </div>
              <h4 className="font-bold mb-2">Proposition</h4>
              <p className="text-sm text-gray-600">Plan d'action personnalisé</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/portfolio"
            className="inline-block bg-brand text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-brand/90 transition-colors mr-4"
          >
            Voir nos Réalisations
          </Link>
          <Link
            href="/services"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            Découvrir nos Services
          </Link>
        </div>
      </div>
    </div>
  );
}