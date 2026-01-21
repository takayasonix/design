'use client';

import Link from 'next/link';
import { Github, Twitter, Instagram, File } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'X',
      url: 'https://x.com/takayaso',
      icon: Twitter,
      color: 'text-blue-400 md:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/takayasonix',
      icon: Instagram,
      color: 'text-pink-500 md:hover:text-pink-500'
    },
    {
      name: 'note',
      url: 'https://note.com/takayasonix',
      icon: File,
      color: 'text-green-500 md:hover:text-green-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/takayasonix',
      icon: Github,
      color: 'text-gray-700 md:hover:text-gray-900'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* SNSリンク */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 aspect-square rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white ${social.color}`}
                aria-label={social.name}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 aspect-square flex items-center justify-center">
                  <social.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </a>
            ))}
          </div>

          {/* コピーライト */}
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-600">
              © 2026 takayaso{' '}
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200"
              >
                プライバシーポリシー
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

