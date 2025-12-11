import { useState, useEffect } from 'react'
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	CheckCircle,
	Star,
	MessageCircle,
	ChevronRight,
	Calendar,
	Sparkles,
	Shield,
	ArrowRight,
	Award,
	TrendingUp,
	UserCheck,
	Package,
	ShieldCheck,
	Gift,
	Snowflake,
	Star as StarIcon,
	Zap,
	Percent,
	CalendarDays,
	Tag,
	Crown,
	Clock4,
	Gem,
} from 'lucide-react';
import { scrollToSection} from './utils.js'

const handleMobileNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollToSection(e, sectionId);
  }

const HeaderLogo = ({ size = 40 }) => {
	return (
		<div className="relative" style={{ width: size, height: size }}>
			<div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-full animate-pulse-slow opacity-80 blur-sm"></div>
			<div className="relative w-full h-full bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg shadow-pink-200/50 border border-pink-100">
				<div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-gradient-x shadow-inner">
					<span className="text-white font-bold text-xs font-serif">S</span>
				</div>
				<div className="absolute -inset-1.5 border border-pink-300/30 rounded-full animate-ping opacity-20"></div>
			</div>
		</div>
	);
}


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/98 backdrop-blur-xl shadow-2xl py-3'
      : 'bg-white/95 backdrop-blur-lg shadow-xl py-4'
      }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Логотип и название */}
          <div className="flex items-center space-x-3 min-w-0 flex-1">
            <HeaderLogo size={44} />
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 font-serif tracking-tight truncate">
                SugarLux
              </h1>
              <p className="text-xs text-gray-500 font-sans hidden sm:block">
                профессиональный шугаринг
              </p>
              <p className="text-xs text-gray-500 font-sans sm:hidden">
                шугаринг
              </p>
            </div>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/80 rounded-full px-2 py-1.5 shadow-inner border border-gray-100">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200"
            >
              Услуги
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200"
            >
              Обо мне
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200"
            >
              Запись
            </a>
          </nav>

          {/* Правая часть */}
          <div className="flex items-center space-x-2 sm:space-x-3 ml-3">
            {/* Кнопка записи на десктопе */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden md:flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 sm:px-5 py-2.5 rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 group"
            >
              <Calendar size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              <span>Записаться</span>
            </a>

            {/* Телефон на мобильных */}
            <a
              href="tel:+79161234567"
              className="md:hidden flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white w-10 h-10 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
              aria-label="Позвонить"
            >
              <Phone size={20} />
            </a>

            {/* Анимированный бургер-меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-pink-50 transition-colors relative"
              aria-label="Меню"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`absolute top-2 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-pink-100">
            <div className="space-y-2">
              <a
                href="#services"
                onClick={(e) => handleMobileNavClick(e, 'services')}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-sm">
                    <Package size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 font-serif">Услуги</div>
                    <div className="text-xs text-gray-500 font-sans">Процедуры и цены</div>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="#about"
                onClick={(e) => handleMobileNavClick(e, 'about')}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-sm">
                    <UserCheck size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 font-serif">Обо мне</div>
                    <div className="text-xs text-gray-500 font-sans">10+ лет опыта</div>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, 'contact')}
                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 transition-all duration-200 group border border-pink-100"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 font-serif">Онлайн-запись</div>
                    <div className="text-xs text-gray-500 font-sans">Быстро и удобно</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                  -15%
                </div>
              </a>
            </div>

            {/* Контакты в мобильном меню */}
            <div className="mt-4 pt-4 border-t border-pink-100">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+79161234567"
                  className="flex items-center justify-center p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition-colors text-sm"
                >
                  <Phone size={16} className="text-pink-600 mr-2" />
                  <span className="font-medium">Позвонить</span>
                </a>
                <a
                  href="https://wa.me/79161234567"
                  className="flex items-center justify-center p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-colors text-sm"
                >
                  <span className="text-green-600 mr-2">💬</span>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header