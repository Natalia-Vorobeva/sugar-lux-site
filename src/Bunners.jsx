import { useState, useEffect } from 'react';
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

const scrollToSection = (e, sectionId) => {
	e.preventDefault();
	const element = document.getElementById(sectionId);
	if (element) {
		const headerOffset = 80;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
}

export const NewYearBanner = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [daysLeft, setDaysLeft] = useState(0);

	useEffect(() => {
		// Рассчитываем количество дней до Нового года
		const now = new Date();
		const newYear = new Date(now.getFullYear() + 1, 0, 1);
		const diff = Math.ceil((newYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setDaysLeft(diff);

		// Автоматически скрыть баннер после Нового года
		if (now.getMonth() === 0 && now.getDate() < 10) {
			setIsVisible(false);
		}
	}, []);

	if (!isVisible) return null;

	// Правильное склонение для дней
	const getDaysText = (days) => {
		if (days % 10 === 1 && days % 100 !== 11) return 'день';
		if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) return 'дня';
		return 'дней';
	};

	return (
		<div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-red-900 to-emerald-900 my-6 md:my-8 rounded-xl md:rounded-2xl shadow-2xl border border-amber-200/20">
			{/* Фоновые узоры */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-4 left-4 w-8 h-8 border-2 border-amber-300 rounded-full"></div>
				<div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-amber-300 rounded-full"></div>
				<div className="absolute top-1/2 left-1/4 w-6 h-6 border border-amber-300 rotate-45"></div>
				<div className="absolute bottom-1/3 right-1/4 w-4 h-4 border border-amber-300 rotate-45"></div>
			</div>

			{/* Блестящие частицы */}
			<div className="absolute top-3 left-1/4 animate-pulse">
				<div className="w-2 h-2 bg-amber-300 rounded-full"></div>
			</div>
			<div className="absolute bottom-3 right-1/3 animate-pulse delay-1000">
				<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
			</div>

			<div className="container mx-auto px-4 py-4 md:py-5 relative z-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="md:w-3/4">
						<div className="flex items-center mb-2">
							<div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full flex items-center justify-center mr-3 shadow-lg">
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
										d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
									/>
								</svg>
							</div>
							<div className="flex-1">
								<span className="text-xs font-semibold text-amber-300 uppercase tracking-wider inline-flex items-center">
									<span className="mr-2">✦</span>Новогоднее предложение<span className="ml-2">✦</span>
								</span>
								<h2 className="text-lg md:text-xl font-bold text-white font-serif leading-tight mt-1">
									Годовой абонемент со скидкой 25%
								</h2>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-3 md:gap-4">
							<div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
								<div className="flex items-center mr-2">
									<span className="text-lg font-bold text-amber-300">18 000₽</span>
									<span className="mx-2 text-white/60">/</span>
									<span className="text-sm text-white/80">год</span>
								</div>
								<div className="h-4 w-px bg-white/30 mx-2"></div>
								<div className="text-sm text-white/90">
									<span className="line-through text-white/60">24 000₽</span>
									<span className="ml-2 text-emerald-300 font-semibold">-25%</span>
								</div>
							</div>

							<div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
								<svg className="w-4 h-4 text-amber-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
								<span className="text-sm text-white/90">Приоритетная запись</span>
							</div>

							<div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
								<svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span className="text-sm text-white/90">Экономия 6 000₽</span>
							</div>

							<div className="flex items-center bg-red-900/60 border border-red-700/50 px-3 py-1.5 rounded-lg">
								<svg className="w-4 h-4 text-red-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span className="text-sm text-white font-medium">
									{daysLeft} {getDaysText(daysLeft)}
								</span>
							</div>
						</div>
					</div>

					<div className="md:w-1/4">
						<a
							href="#contact"
							onClick={(e) => scrollToSection(e, 'contact')}
							className="group relative bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 px-5 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-500/20"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative z-10 flex items-center">
								<svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
										d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
									/>
								</svg>
								<span className="font-bold">Забронировать</span>
							</div>
						</a>

						<p className="text-xs text-white/60 text-center mt-2 hidden md:block">
							12 процедур на 12 месяцев
						</p>
					</div>
				</div>

				<button
					onClick={() => setIsVisible(false)}
					className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors w-6 h-6 flex items-center justify-center"
					aria-label="Закрыть баннер"
				>
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	);
}
export const NewYearBanner1 = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [hoursLeft, setHoursLeft] = useState(0);

	useEffect(() => {
		const calculateHoursLeft = () => {
			const now = new Date();
			const newYear = new Date(now.getFullYear() + 1, 0, 1);
			const diff = Math.ceil((newYear.getTime() - now.getTime()) / (1000 * 60 * 60));
			setHoursLeft(diff);
		};

		calculateHoursLeft();
		const timer = setInterval(calculateHoursLeft, 60000);

		const now = new Date();
		if (now.getMonth() === 0 && now.getDate() < 10) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsVisible(false);
		}

		return () => clearInterval(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<div className="relative my-6 md:my-8">
			<div className="relative bg-gradient-to-r from-red-700 via-pink-600 to-purple-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
				{/* Анимированный фон */}
				<div className="absolute inset-0">
					<div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
					<div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-pink-400/20 to-purple-500/20 rounded-full translate-x-20 translate-y-20 animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full animate-pulse delay-500"></div>
				</div>

				<div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
						<div className="lg:w-3/5">
							<div className="mb-6">
								<div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
									<span className="mr-2">🎄</span>
									<span>ПОСЛЕДНИЙ ШАНС В ЭТОМ ГОДУ!</span>
									<span className="ml-2">🎄</span>
								</div>

								<h2 className="text-3xl md:text-4xl font-bold text-white font-serif leading-tight mb-3">
									<span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
										ГОДОВОЙ АБОНЕМЕНТ
									</span>
									<br />
									со скидкой <span className="text-yellow-300">25%</span> + <span className="text-yellow-300">подарок</span>
								</h2>

								<p className="text-white/90 text-lg mb-6 max-w-2xl">
									Забронируйте уход за кожей на весь 2025 год по специальной цене
									и получите премиальный набор ухода в подарок!
								</p>
							</div>

							<div className="mb-6">
								<div className="flex items-center mb-4">
									<div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
									<span className="text-white font-bold text-lg">ТОЛЬКО СЕЙЧАС:</span>
									<div className="ml-4 px-4 py-2 bg-red-600/80 backdrop-blur-sm rounded-lg">
										<span className="text-white font-bold">
											{hoursLeft} ЧАСОВ ДО КОНЦА АКЦИИ
										</span>
									</div>
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
									<div className="flex items-center mb-2">
										<Zap className="text-yellow-400 mr-2" size={20} />
										<span className="text-white font-bold">12 процедур</span>
									</div>
									<div className="text-white/80 text-sm">на 12 месяцев</div>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
									<div className="flex items-center mb-2">
										<Percent className="text-yellow-400 mr-2" size={20} />
										<span className="text-white font-bold">Экономия 6 000₽</span>
									</div>
									<div className="text-white/80 text-sm">плюс подарок 2 500₽</div>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
									<div className="flex items-center mb-2">
										<StarIcon className="text-yellow-400 mr-2" size={20} />
										<span className="text-white font-bold">VIP статус</span>
									</div>
									<div className="text-white/80 text-sm">приоритетная запись</div>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="flex items-center">
									<CheckCircle className="text-yellow-400 mr-2" size={20} />
									<span className="text-white font-medium">100% натуральные составы</span>
								</div>
								<div className="flex items-center">
									<CheckCircle className="text-yellow-400 mr-2" size={20} />
									<span className="text-white font-medium">Сертифицированный мастер</span>
								</div>
							</div>
						</div>

						<div className="lg:w-2/5">
							<div className="relative">
								<div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>

								<div className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 border-2 border-yellow-500/50 shadow-2xl">
									<div className="text-center mb-6">
										<div className="text-5xl font-bold text-yellow-400 font-serif mb-2">
											18 000₽
										</div>
										<div className="text-white/80 mb-4">
											вместо <span className="line-through text-white/50">24 000₽</span>
										</div>

										<div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 mb-6">
											<div className="text-white font-bold mb-2">В ПОДАРОК:</div>
											<div className="text-white/90 text-sm">
												Набор premium-ухода<br />
												стоимостью 2 500₽
											</div>
										</div>
									</div>

									<button
										onClick={(e) => scrollToSection(e, 'contact')}
										className="group relative w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-4 rounded-xl font-extrabold hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 mb-4 text-lg"
									>
										<div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity"></div>
										<div className="relative z-10 flex items-center justify-center">
											<svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
													d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
												/>
											</svg>
											<span>ЗАБРОНИРОВАТЬ СО СКИДКОЙ</span>
										</div>
									</button>

									<div className="text-center">
										<div className="text-xs text-gray-400 mb-3">
											Или позвоните сейчас:
										</div>
										<a
											href="tel:+79161234567"
											className="text-white font-bold text-lg hover:text-yellow-300 transition-colors inline-flex items-center"
										>
											<Phone size={18} className="mr-2" />
											+7 (916) 123-45-67
										</a>
									</div>
								</div>
							</div>

							<div className="mt-6 text-center">
								<div className="text-sm text-white/70">
									<span className="text-yellow-300 font-bold">⚠️ ВНИМАНИЕ:</span> Цены вернутся к обычным с 1 января
								</div>
							</div>
						</div>
					</div>

					<button
						onClick={() => setIsVisible(false)}
						className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full"
						aria-label="Закрыть баннер"
					>
						<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export const NewYearBanner2 = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [daysLeft, setDaysLeft] = useState(0);

	useEffect(() => {
		const now = new Date();
		const newYear = new Date(now.getFullYear() + 1, 0, 1);
		const diff = Math.ceil((newYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

		// eslint-disable-next-line react-hooks/set-state-in-effect
		setDaysLeft(diff)

		if (now.getMonth() === 0 && now.getDate() < 10) {
			setIsVisible(false);
		}
	}, []);

	const getDaysText = (days) => {
		if (days % 10 === 1 && days % 100 !== 11) return 'день';
		if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) return 'дня';
		return 'дней';
	};

	if (!isVisible) return null;

	return (
		<div className="relative my-4 md:my-6 overflow-hidden">
			<div className="relative bg-gradient-to-r from-red-800 via-red-900 to-emerald-900 rounded-xl md:rounded-2xl p-1 shadow-2xl">
				<div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl md:rounded-2xl overflow-hidden">
					{/* Декоративные линии */}
					<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
					<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

					<div className="p-4 md:p-5">
						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<div className="flex-1">
								<div className="flex items-center mb-2">
									<div className="mr-3">
										<div className="w-8 h-8 bg-gradient-to-r from-red-600 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
											<svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
													d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
												/>
											</svg>
										</div>
									</div>
									<div>
										<div className="flex items-center">
											<span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
												Новогодняя акция
											</span>
											<div className="ml-3 px-2 py-0.5 bg-red-700/50 rounded-full">
												<span className="text-xs font-bold text-white">-25%</span>
											</div>
										</div>
										<h3 className="text-base font-bold text-white font-serif mt-1">
											Годовой абонемент: 12 процедур за 18 000₽
										</h3>
									</div>
								</div>

								<div className="flex flex-wrap items-center gap-3">
									<div className="flex items-center text-sm">
										<span className="text-white/70">Экономия:</span>
										<span className="ml-2 font-bold text-emerald-300">6 000₽</span>
									</div>
									<div className="hidden md:block w-px h-4 bg-white/20"></div>
									<div className="hidden md:flex items-center text-sm">
										<svg className="w-3 h-3 text-amber-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<span className="text-white/70">до 31 декабря</span>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-white font-mono">{daysLeft}</div>
									<div className="text-xs text-white/60 uppercase tracking-wider">{getDaysText(daysLeft)}</div>
								</div>

								<div className="h-8 w-px bg-white/20 hidden md:block"></div>

								<a
									href="#contact"
									onClick={(e) => scrollToSection(e, 'contact')}
									className="group bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 flex items-center"
								>
									<span>Забронировать</span>
									<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					<button
						onClick={() => setIsVisible(false)}
						className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
						aria-label="Закрыть баннер"
					>
						<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export const NewYearBanner3 = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const newYear = new Date(now.getFullYear() + 1, 0, 1);
			const diff = newYear.getTime() - now.getTime();

			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

			setTimeLeft({ days, hours, minutes });
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 60000);

		const now = new Date();
		if (now.getMonth() === 0 && now.getDate() < 10) {

			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsVisible(false);
		}

		return () => clearInterval(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<div className="relative overflow-hidden my-6 md:my-8">
			<div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-1 shadow-2xl">
				<div className="relative bg-gradient-to-br from-yellow-900 via-amber-900 to-yellow-800 rounded-2xl md:rounded-3xl overflow-hidden">
					{/* Золотые декоративные элементы */}
					<div className="absolute inset-0 opacity-10">
						<svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
							<defs>
								<pattern id="gold-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<path d="M0,10 L10,0 M10,20 L20,10 M20,0 L30,10" stroke="url(#gold-gradient)" strokeWidth="0.5" fill="none" />
								</pattern>
								<linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#D4AF37" />
									<stop offset="50%" stopColor="#FFD700" />
									<stop offset="100%" stopColor="#D4AF37" />
								</linearGradient>
							</defs>
							<rect width="100" height="100" fill="url(#gold-pattern)" />
						</svg>
					</div>

					{/* Сверкающие элементы */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
					<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse"></div>

					{/* Блестки */}
					{[...Array(8)].map((_, i) => (
						<div
							key={i}
							className={`absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping ${i % 2 === 0 ? 'animate-spin' : ''}`}
							style={{
								top: `${10 + (i * 10)}%`,
								left: `${5 + (i * 12)}%`,
								animationDelay: `${i * 0.2}s`,
								animationDuration: `${2 + i * 0.3}s`
							}}
						/>
					))}

					<div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
							<div className="lg:w-2/3">
								<div className="flex items-start mb-4">
									<div className="mr-4">
										<div className="relative w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/30 animate-pulse-slow">
											<div className="absolute inset-0 border-4 border-yellow-300/50 rounded-full animate-ping"></div>
											<svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
													d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
												/>
											</svg>
										</div>
									</div>
									<div className="flex-1">
										<div className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
											<span className="mr-2">🎁</span>
											<span>НОВОГОДНИЙ СУПЕР-ОФФЕР</span>
											<span className="ml-2">🎁</span>
										</div>
										<h2 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight mb-2">
											Годовой абонемент премиум-класса
											<span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">
												со скидкой 25%
											</span>
										</h2>
										<p className="text-yellow-100 text-lg font-medium">
											Идеальный подарок себе на весь 2025 год!
										</p>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
									<div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
										<div className="text-3xl font-bold text-yellow-300 mb-1">18 000₽</div>
										<div className="text-sm text-yellow-100/80">вместо 24 000₽</div>
										<div className="text-xs text-yellow-200/60 mt-1">Экономия 6 000₽</div>
									</div>

									<div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
										<div className="text-2xl font-bold text-yellow-300 mb-1">12 процедур</div>
										<div className="text-sm text-yellow-100/80">на 12 месяцев</div>
										<div className="text-xs text-yellow-200/60 mt-1">По 1 процедуре в месяц</div>
									</div>

									<div className="bg-gradient-to-r from-yellow-900/50 to-amber-900/50 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
										<div className="text-2xl font-bold text-yellow-300 mb-1">VIP статус</div>
										<div className="text-sm text-yellow-100/80">Приоритетная запись</div>
										<div className="text-xs text-yellow-200/60 mt-1">Подарочный набор</div>
									</div>
								</div>

								{/* Таймер */}
								<div className="mb-6">
									<div className="text-sm text-yellow-200/80 mb-3 font-medium">До конца акции осталось:</div>
									<div className="flex space-x-3">
										<div className="text-center">
											<div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
												<div className="text-2xl font-bold text-yellow-300 font-mono">{String(timeLeft.days).padStart(2, '0')}</div>
												<div className="text-xs text-yellow-200/60 mt-1">дней</div>
											</div>
										</div>
										<div className="text-center">
											<div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
												<div className="text-2xl font-bold text-yellow-300 font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
												<div className="text-xs text-yellow-200/60 mt-1">часов</div>
											</div>
										</div>
										<div className="text-center">
											<div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
												<div className="text-2xl font-bold text-yellow-300 font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
												<div className="text-xs text-yellow-200/60 mt-1">минут</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="lg:w-1/3">
								<div className="relative">
									<div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur-lg opacity-70 animate-pulse"></div>
									<button
										onClick={(e) => scrollToSection(e, 'contact')}
										className="relative w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 px-8 py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 group shadow-xl"
									>
										<div className="flex flex-col items-center">
											<div className="text-2xl font-bold mb-1">ЗАБРОНИРОВАТЬ</div>
											<div className="text-sm font-medium text-gray-900/80">со скидкой 25%</div>
											<div className="mt-3 flex items-center text-sm font-medium">
												<span className="mr-2">🔥</span>
												<span className="animate-pulse">Только до 31 декабря!</span>
												<span className="ml-2">🔥</span>
											</div>
										</div>
										<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 blur-md rounded-full group-hover:scale-110 transition-transform"></div>
									</button>
								</div>

								<div className="mt-4 text-center">
									<div className="text-xs text-yellow-200/60">
										<div className="flex items-center justify-center">
											<ShieldCheck size={12} className="mr-1" />
											<span>Безопасная онлайн-оплата</span>
										</div>
										<div className="mt-1 flex items-center justify-center">
											<Gem size={12} className="mr-1" />
											<span>Можно оформить в рассрочку</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-6 pt-6 border-t border-yellow-500/20">
							<div className="flex flex-wrap justify-center gap-4 text-sm text-yellow-200/80">
								<div className="flex items-center">
									<CheckCircle size={16} className="text-yellow-400 mr-2" />
									<span>Бесплатная консультация косметолога</span>
								</div>
								<div className="flex items-center">
									<CheckCircle size={16} className="text-yellow-400 mr-2" />
									<span>Подарочный набор premium-ухода 2500₽</span>
								</div>
								<div className="flex items-center">
									<CheckCircle size={16} className="text-yellow-400 mr-2" />
									<span>Приоритетная запись на удобное время</span>
								</div>
							</div>
						</div>
					</div>

					<button
						onClick={() => setIsVisible(false)}
						className="absolute top-4 right-4 text-yellow-200/60 hover:text-yellow-300 transition-colors w-8 h-8 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40"
						aria-label="Закрыть баннер"
					>
						<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export const NewYearBanner4 = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [daysLeft, setDaysLeft] = useState(0);

	useEffect(() => {
		const now = new Date();
		const newYear = new Date(now.getFullYear() + 1, 0, 1);
		const diff = Math.ceil((newYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setDaysLeft(diff);

		if (now.getMonth() === 0 && now.getDate() < 10) {
			setIsVisible(false);
		}
	}, []);

	if (!isVisible) return null;

	return (
		<div className="relative my-6 md:my-8 overflow-hidden">
			<div className="relative bg-gradient-to-r from-rose-900 via-pink-900 to-purple-900 rounded-2xl md:rounded-3xl p-1 shadow-2xl">
				{/* Блестящий бордюр */}
				<div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 opacity-30 blur-md"></div>

				<div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl overflow-hidden">
					{/* Декоративные линии */}
					<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
					<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>

					{/* Фоновые элементы */}
					<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-y-32 translate-x-32"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-500/10 to-fuchsia-500/10 rounded-full translate-y-48 -translate-x-48"></div>

					<div className="container mx-auto px-4 py-8 md:py-10 relative z-10">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
							<div className="lg:w-3/5">
								<div className="flex items-start mb-6">
									<div className="mr-5">
										<div className="relative">
											<div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-pink-500/30 rotate-45">
												<div className="rotate-45 text-center">
													<span className="text-2xl font-bold text-white block">-25%</span>
													<span className="text-xs text-pink-200 block">СКИДКА</span>
												</div>
											</div>
											<div className="absolute -inset-2 border-2 border-pink-400/50 rounded-2xl animate-ping"></div>
										</div>
									</div>
									<div className="flex-1">
										<div className="inline-flex items-center bg-gradient-to-r from-pink-600/20 to-rose-600/20 backdrop-blur-sm border border-pink-500/30 text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
											<Sparkles size={14} className="mr-2" />
											ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ 2025
										</div>
										<h2 className="text-3xl md:text-4xl font-bold text-white font-serif leading-tight mb-3">
											Годовой абонемент премиум
											<span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300">
												"Все включено"
											</span>
										</h2>
										<p className="text-gray-300 text-lg mb-6 max-w-2xl">
											Полный уход за кожей на весь год по специальной цене.
											Идеальная инвестиция в свою красоту и уверенность.
										</p>
									</div>
								</div>

								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
									<div className="text-center p-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
										<div className="text-2xl font-bold text-pink-400 mb-1">12</div>
										<div className="text-sm text-gray-300">процедур</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
										<div className="text-2xl font-bold text-pink-400 mb-1">6 000₽</div>
										<div className="text-sm text-gray-300">экономия</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
										<div className="text-2xl font-bold text-pink-400 mb-1">VIP</div>
										<div className="text-sm text-gray-300">статус</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
										<div className="text-2xl font-bold text-pink-400 mb-1">{daysLeft}</div>
										<div className="text-sm text-gray-300">дней осталось</div>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="flex items-center bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm px-4 py-3 rounded-xl">
										<div className="mr-3">
											<Gift className="text-pink-400" size={24} />
										</div>
										<div>
											<div className="text-sm text-pink-300 font-medium">Подарок при покупке</div>
											<div className="text-xs text-gray-400">Набор ухода 2500₽</div>
										</div>
									</div>
									<div className="flex items-center bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm px-4 py-3 rounded-xl">
										<div className="mr-3">
											<Calendar className="text-pink-400" size={24} />
										</div>
										<div>
											<div className="text-sm text-pink-300 font-medium">Приоритетная запись</div>
											<div className="text-xs text-gray-400">В любое время</div>
										</div>
									</div>
								</div>
							</div>

							<div className="lg:w-2/5">
								<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl border border-gray-700/50">
									<div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6">
										<div className="text-center mb-6">
											<div className="text-4xl font-bold text-white font-serif mb-2">
												18 000₽
											</div>
											<div className="text-gray-400 mb-4">
												<span className="line-through text-gray-500 mr-2">24 000₽</span>
												<span className="text-pink-400 font-bold">-25%</span>
											</div>
											<div className="text-sm text-gray-300 mb-6">
												за 12 месяцев профессионального ухода
											</div>
										</div>

										<button
											onClick={(e) => scrollToSection(e, 'contact')}
											className="group relative w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 mb-4"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
											<div className="relative z-10 flex items-center justify-center">
												<Crown size={20} className="mr-3" />
												<span className="text-lg">ОФОРМИТЬ ПРЕМИУМ</span>
											</div>
										</button>

										<div className="text-center">
											<div className="text-xs text-gray-500 mb-2">
												Или в рассрочку: 4 платежа по 5 000₽
											</div>
											<div className="flex items-center justify-center text-sm text-gray-400">
												<ShieldCheck size={14} className="mr-2" />
												<span>100% гарантия качества</span>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-6 text-center">
									<p className="text-xs text-gray-500">
										*Абонемент можно подарить другу<br />
										**Возможность заморозки на 30 дней
									</p>
								</div>
							</div>
						</div>
					</div>

					<button
						onClick={() => setIsVisible(false)}
						className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700/50"
						aria-label="Закрыть баннер"
					>
						<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export const NewYearBanner5 = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [daysLeft, setDaysLeft] = useState(0);

	useEffect(() => {
		const now = new Date();
		const newYear = new Date(now.getFullYear() + 1, 0, 1);
		const diff = Math.ceil((newYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setDaysLeft(diff);

		if (now.getMonth() === 0 && now.getDate() < 10) {
			setIsVisible(false);
		}
	}, []);

	if (!isVisible) return null;

	return (
		<div className="relative my-6 md:my-8 overflow-hidden">
			<div className="relative bg-gradient-to-r from-pink-50 via-rose-50 to-lavender-50 rounded-2xl md:rounded-3xl p-1 shadow-lg border border-white/80">
				{/* Легкий блестящий бордюр */}
				<div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-rose-200 to-lavender-200 opacity-50 blur-sm"></div>

				<div className="relative bg-gradient-to-br from-white/90 via-white/95 to-white/90 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm">
					{/* Декоративные линии */}
					<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent animate-pulse"></div>
					<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lavender-300 to-transparent animate-pulse"></div>

					{/* Фоновые элементы - снежинки и пузырьки */}
					<div className="absolute top-4 right-8 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-lg"></div>
					<div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-tr from-lavender-200/30 to-pink-200/30 rounded-full blur-lg"></div>
					<div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-md"></div>

					{/* Точки как конфетти */}
					<div className="absolute top-10 right-20 w-2 h-2 bg-pink-300 rounded-full"></div>
					<div className="absolute bottom-16 left-24 w-3 h-3 bg-rose-300 rounded-full"></div>
					<div className="absolute top-32 left-32 w-2 h-2 bg-lavender-300 rounded-full"></div>

					<div className="container mx-auto px-4 py-8 md:py-10 relative z-10">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
							<div className="lg:w-3/5">
								<div className="flex items-start mb-6">
									<div className="mr-5">
										<div className="relative">
											<div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-300 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-200 rotate-45">
												<div className="rotate-45 text-center">
													<span className="text-2xl font-bold text-white block">-25%</span>
													<span className="text-xs text-pink-50 block">СКИДКА</span>
												</div>
											</div>
											<div className="absolute -inset-2 border-2 border-pink-300/30 rounded-2xl animate-ping"></div>
										</div>
									</div>
									<div className="flex-1">
										<div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 backdrop-blur-sm border border-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
											<Sparkles size={14} className="mr-2" />
											ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ 2025
										</div>
										<h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif leading-tight mb-3">
											Годовой абонемент премиум
											<span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-lavender-500">
												"Все включено"
											</span>
										</h2>
										<p className="text-gray-600 text-lg mb-6 max-w-2xl">
											Полный уход за кожей на весь год по специальной цене.
											Идеальная инвестиция в свою красоту и уверенность.
										</p>
									</div>
								</div>

								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
									<div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
										<div className="text-2xl font-bold text-pink-500 mb-1">12</div>
										<div className="text-sm text-gray-600">процедур</div>
									</div>
									<div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
										<div className="text-2xl font-bold text-pink-500 mb-1">6 000₽</div>
										<div className="text-sm text-gray-600">экономия</div>
									</div>
									<div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
										<div className="text-2xl font-bold text-pink-500 mb-1">VIP</div>
										<div className="text-sm text-gray-600">статус</div>
									</div>
									<div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
										<div className="text-2xl font-bold text-pink-500 mb-1">{daysLeft}</div>
										<div className="text-sm text-gray-600">дней осталось</div>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
									<div className="flex items-center bg-gradient-to-r from-pink-50 to-rose-50 backdrop-blur-sm px-4 py-3 rounded-xl border border-pink-100">
										<div className="mr-3">
											<Gift className="text-pink-500" size={24} />
										</div>
										<div>
											<div className="text-sm text-pink-700 font-medium">Подарок при покупке</div>
											<div className="text-xs text-gray-500">Набор ухода 2500₽</div>
										</div>
									</div>
									<div className="flex items-center bg-gradient-to-r from-pink-50 to-rose-50 backdrop-blur-sm px-4 py-3 rounded-xl border border-pink-100">
										<div className="mr-3">
											<Calendar className="text-pink-500" size={24} />
										</div>
										<div>
											<div className="text-sm text-pink-700 font-medium">Приоритетная запись</div>
											<div className="text-xs text-gray-500">В любое время</div>
										</div>
									</div>
								</div>
							</div>

							<div className="lg:w-2/5">
								<div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-1 shadow-lg border border-gray-100">
									<div className="bg-white rounded-2xl p-6">
										<div className="text-center mb-6">
											<div className="text-4xl font-bold text-gray-800 font-serif mb-2">
												18 000₽
											</div>
											<div className="text-gray-600 mb-4">
												<span className="line-through text-gray-400 mr-2">24 000₽</span>
												<span className="text-pink-500 font-bold">-25%</span>
											</div>
											<div className="text-sm text-gray-500 mb-6">
												за 12 месяцев профессионального ухода
											</div>
										</div>

										<button
											onClick={(e) => scrollToSection(e, 'contact')}
											className="group relative w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-pink-200 hover:scale-[1.02] transition-all duration-300 mb-4"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
											<div className="relative z-10 flex items-center justify-center">
												<Crown size={20} className="mr-3" />
												<span className="text-lg">ОФОРМИТЬ ПРЕМИУМ</span>
											</div>
										</button>

										<div className="text-center">
											<div className="text-xs text-gray-500 mb-2">
												Или в рассрочку: 4 платежа по 5 000₽
											</div>
											<div className="flex items-center justify-center text-sm text-gray-400">
												<ShieldCheck size={14} className="mr-2" />
												<span>100% гарантия качества</span>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-6 text-center">
									<p className="text-xs text-gray-500">
										*Абонемент можно подарить другу<br />
										**Возможность заморозки на 30 дней
									</p>
								</div>
							</div>
						</div>
					</div>

					<button
						onClick={() => setIsVisible(false)}
						className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full hover:bg-white border border-gray-200 shadow-sm"
						aria-label="Закрыть баннер"
					>
						<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

