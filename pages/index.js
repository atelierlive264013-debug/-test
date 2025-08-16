import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [language, setLanguage] = useState('ja')

  const content = {
    ja: {
      title: '学習支援ボランティア',
      nav: ['ホーム', 'グループ紹介', '活動内容', '参加方法', 'お問い合わせ'],
      hero: {
        title: '日本で暮らす外国人の皆さんをサポートします',
        subtitle: 'ボランティアと学習者をつなぐ、温かいコミュニティ',
        supportButton: 'サポートを受けたい',
        volunteerButton: 'ボランティア参加したい'
      },
      intro: {
        title: '私たちについて',
        description: '私たちは、日本に住む外国人の皆さんが安心して暮らせるよう、学習支援と文化交流を通じてサポートしています。経験豊富なボランティアが、日本語学習、生活相談、文化交流イベントなど、様々な活動を行っています。'
      },
      footer: {
        email: 'info@volunteer-support.jp',
        copyright: '© 2024 学習支援ボランティア. All rights reserved.'
      }
    },
    en: {
      title: 'Learning Support Volunteers',
      nav: ['Home', 'About Us', 'Activities', 'Join Us', 'Contact'],
      hero: {
        title: 'Supporting Foreign Residents in Japan',
        subtitle: 'Connecting volunteers and learners in a warm community',
        supportButton: 'I want support',
        volunteerButton: 'I want to volunteer'
      },
      intro: {
        title: 'About Us',
        description: 'We support foreign residents in Japan through learning assistance and cultural exchange, helping them live comfortably. Our experienced volunteers conduct various activities including Japanese language learning, life consultation, and cultural exchange events.'
      },
      footer: {
        email: 'info@volunteer-support.jp',
        copyright: '© 2024 Learning Support Volunteers. All rights reserved.'
      }
    },
    zh: {
      title: '学习支援志愿者',
      nav: ['首页', '关于我们', '活动内容', '加入我们', '联系我们'],
      hero: {
        title: '支持在日外国人',
        subtitle: '连接志愿者和学习者的温暖社区',
        supportButton: '我需要帮助',
        volunteerButton: '我想成为志愿者'
      },
      intro: {
        title: '关于我们',
        description: '我们通过学习支援和文化交流来支持在日外国人，帮助他们舒适地生活。我们经验丰富的志愿者开展各种活动，包括日语学习、生活咨询和文化交流活动。'
      },
      footer: {
        email: 'info@volunteer-support.jp',
        copyright: '© 2024 学习支援志愿者. All rights reserved.'
      }
    },
    vi: {
      title: 'Tình nguyện viên hỗ trợ học tập',
      nav: ['Trang chủ', 'Về chúng tôi', 'Hoạt động', 'Tham gia', 'Liên hệ'],
      hero: {
        title: 'Hỗ trợ người nước ngoài tại Nhật Bản',
        subtitle: 'Kết nối tình nguyện viên và người học trong cộng đồng ấm áp',
        supportButton: 'Tôi cần hỗ trợ',
        volunteerButton: 'Tôi muốn tình nguyện'
      },
      intro: {
        title: 'Về chúng tôi',
        description: 'Chúng tôi hỗ trợ người nước ngoài tại Nhật Bản thông qua hỗ trợ học tập và trao đổi văn hóa, giúp họ sống thoải mái. Các tình nguyện viên có kinh nghiệm của chúng tôi thực hiện nhiều hoạt động bao gồm học tiếng Nhật, tư vấn cuộc sống và các sự kiện trao đổi văn hóa.'
      },
      footer: {
        email: 'info@volunteer-support.jp',
        copyright: '© 2024 Tình nguyện viên hỗ trợ học tập. All rights reserved.'
      }
    }
  }

  const currentContent = content[language] || content.ja

  return (
    <>
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content="Supporting foreign residents in Japan with learning assistance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LS</span>
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-900">
                  {currentContent.title}
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {currentContent.nav.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ja">日本語</option>
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                  <option value="vi">Tiếng Việt</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentContent.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  {currentContent.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg">
                    {currentContent.hero.supportButton}
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-lg">
                    {currentContent.hero.volunteerButton}
                  </button>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg font-medium">
                      {language === 'ja' && 'コミュニティの写真'}
                      {language === 'en' && 'Community Photo'}
                      {language === 'zh' && '社区照片'}
                      {language === 'vi' && 'Ảnh cộng đồng'}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {language === 'ja' && '（プレースホルダー）'}
                      {language === 'en' && '(Placeholder)'}
                      {language === 'zh' && '（占位符）'}
                      {language === 'vi' && '(Giữ chỗ)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {currentContent.intro.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {currentContent.intro.description}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">
                      {language === 'ja' && 'グループ活動の写真'}
                      {language === 'en' && 'Group Activity Photo'}
                      {language === 'zh' && '团体活动照片'}
                      {language === 'vi' && 'Ảnh hoạt động nhóm'}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {language === 'ja' && '（プレースホルダー）'}
                      {language === 'en' && '(Placeholder)'}
                      {language === 'zh' && '（占位符）'}
                      {language === 'vi' && '(Giữ chỗ)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Group Info */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">LS</span>
                  </div>
                  <span className="text-xl font-semibold">
                    {currentContent.title}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {language === 'ja' && '日本に住む外国人の皆さんをサポートするボランティアグループです。'}
                  {language === 'en' && 'A volunteer group supporting foreign residents in Japan.'}
                  {language === 'zh' && '支持在日外国人的志愿者团体。'}
                  {language === 'vi' && 'Nhóm tình nguyện viên hỗ trợ người nước ngoài tại Nhật Bản.'}
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'ja' && 'お問い合わせ'}
                  {language === 'en' && 'Contact'}
                  {language === 'zh' && '联系我们'}
                  {language === 'vi' && 'Liên hệ'}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${currentContent.footer.email}`} className="text-gray-300 hover:text-white transition-colors">
                      {currentContent.footer.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {language === 'ja' && 'ソーシャルメディア'}
                  {language === 'en' && 'Social Media'}
                  {language === 'zh' && '社交媒体'}
                  {language === 'vi' && 'Mạng xã hội'}
                </h3>
                <div className="flex space-x-4">
                  {/* Facebook Placeholder */}
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* Twitter Placeholder */}
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>

                  {/* Instagram Placeholder */}
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                {currentContent.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
