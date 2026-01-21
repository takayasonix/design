'use client';

import Image from 'next/image';
import { Github, Twitter, Instagram, File } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: '0px 0px -20% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
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
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <div 
        className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="mb-8">
          <div className="relative w-[200px] h-[200px] mx-auto mb-6">
            <Image
              src="/takayaso_visual_square.jpg"
              alt="プロフィール画像"
              width={200}
              height={200}
              className="rounded-full shadow-md"
              priority
            />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          大西 貴也
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
          @takayaso
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          背が小さくて服が大きいアプリディレクターです。<br />
          好きな言葉は「サバイブ」。<br />
          ネプチューンの名倉潤が11親等の親戚。
        </p>
        
        {/* SNSリンク */}
        <div className="grid grid-cols-4 justify-center items-center gap-4 md:gap-6 max-w-xs md:max-w-sm mx-auto place-items-center">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 aspect-square rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white ${social.color}`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 aspect-square flex items-center justify-center">
                <social.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
