import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <Navigation />
      <div className="py-20 px-4">
        <article className="max-w-3xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
              プライバシーポリシー
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
              <section>
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-300 pb-2">
                  1. 個人情報の取り扱いについて
                </h2>
                <p className="text-sm md:text-base mb-4">
                  本サイトでは、お問い合わせやコメント機能などを通じて、お名前、メールアドレスなどの個人情報をご提供いただく場合があります。
                  これらの個人情報は、お問い合わせへの対応やサービス提供のためにのみ使用し、第三者に開示・提供することはありません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-300 pb-2">
                  2. アクセス解析について
                </h2>
                <p className="text-sm md:text-base mb-4">
                  本サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを使用している場合があります。
                  これらのツールは、Cookieを使用して匿名で情報を収集しており、個人を特定する情報は含まれません。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-300 pb-2">
                  3. 外部リンクについて
                </h2>
                <p className="text-sm md:text-base mb-4">
                  本サイトから外部のウェブサイトへのリンクを掲載している場合がありますが、
                  リンク先のサイトにおける個人情報の取り扱いについては、当サイトでは責任を負いかねます。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-300 pb-2">
                  4. プライバシーポリシーの変更について
                </h2>
                <p className="text-sm md:text-base mb-4">
                  本プライバシーポリシーは、法令の変更やサイトの運営方針の変更に伴い、予告なく変更する場合があります。
                  変更後のプライバシーポリシーについては、本ページに掲載した時点で効力を生じるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-300 pb-2">
                  5. お問い合わせ
                </h2>
                <p className="text-sm md:text-base mb-4">
                  本プライバシーポリシーに関するお問い合わせは、<a href="mailto:info@takayaso.com" className="text-blue-600 hover:text-blue-800 hover:underline">info@takayaso.com</a>までご連絡ください。
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs md:text-sm text-gray-500 mb-4">
                  最終更新日: 2026年1月1日
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                >
                  <svg 
                    className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-sm md:text-base font-medium">ホームに戻る</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

