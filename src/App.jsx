// App.jsx
import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { services, advantages } from './constants/services.jsx'
import {
	Heart,
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
import Header from './Header'

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

import { NewYearBanner5 } from './Bunners';


// Стильные иконки для кнопок
const PremiumIcon = () => (
	<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
			d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
		/>
	</svg>
);

const CrystalIcon = () => (
	<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
			d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0 2v2m0 0V7m0 2l-6 2"
		/>
	</svg>
);

// Instagram иконка
const InstagramIcon = () => (
	<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
	</svg>
);

// Facebook иконка
const FacebookIcon = () => (
	<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
	</svg>
);

// Простой компонент для анимаций
const FadeIn = ({ children, delay = 0 }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), delay);
		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
			{children}
		</div>
	);
};

function App() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [captchaValue, setCaptchaValue] = useState(null);
	const [captchaError, setCaptchaError] = useState('');
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [showCaptchaError, setShowCaptchaError] = useState(false);

	const validateForm = () => {
		if (!captchaValue) {
			setCaptchaError("Пожалуйста, подтвердите, что вы не робот");
			setShowCaptchaError(true);
			return false;
		}
		return true;
	};

	const onSubmit = async (data) => {
		if (!captchaValue) {
			setCaptchaError('Пожалуйста, подтвердите, что вы не робот');
			return;
		}

		setIsSubmitting(true);

		// Имитация отправки в Telegram
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitSuccess(true);
			reset();
			setCaptchaValue(null);
			setCaptchaError('');

			// Сбросить успешное сообщение через 5 секунд
			setTimeout(() => setSubmitSuccess(false), 5000);
		}, 1500);
	};

	const onCaptchaChange = (value) => {
		setCaptchaValue(value);
		setCaptchaError('');
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-pink-50/30 via-white to-white font-sans">
			<Header />

			{/* Герой-секция */}
			<section className="container mx-auto px-4 sm:px-6 pt-8 pb-12 md:pt-16 md:pb-24">
				<div className="flex flex-col lg:flex-row items-center">
					<FadeIn delay={100} className="lg:w-1/2 mb-12 lg:mb-0">
						<div className="mb-8">
							<div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-4 py-2.5 rounded-full text-sm font-medium mb-6 font-sans shadow-sm border border-pink-200">
								<Award className="mr-2" size={16} />
								<span>10+ лет профессионального опыта</span>
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
								Идеальная гладкость кожи с{' '}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500">
									профессиональным шугарингом
								</span>
							</h1>
						</div>
						<p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
							Более 10 лет создаю безупречную гладкость вашей кожи с использованием
							авторских безболезненных техник и натуральных составов премиум-класса.
						</p>


						{/* Статистика */}
						<div className="grid grid-cols-3 gap-4 max-w-md">
							<div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-pink-100">
								<div className="text-2xl sm:text-3xl font-bold text-pink-600 font-serif">5000+</div>
								<div className="text-gray-600 text-sm">успешных процедур</div>
							</div>
							<div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-pink-100">
								<div className="text-2xl sm:text-3xl font-bold text-pink-600 font-serif">98%</div>
								<div className="text-gray-600 text-sm">довольных клиентов</div>
							</div>
							<div className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-pink-100">
								<div className="text-2xl sm:text-3xl font-bold text-pink-600 font-serif">4.9/5</div>
								<div className="text-gray-600 text-sm">рейтинг эксперта</div>
							</div>
						</div>
					</FadeIn>

					<FadeIn delay={300} className="lg:w-1/2 relative">
						<div className="relative mx-auto max-w-md">
							{/* Мягкая карточка с теплыми акцентами */}
							<div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-6 shadow-xl shadow-pink-100 border border-pink-100">
								{/* Фото мастера в мягком оформлении */}
								<div className="relative mb-6">
									<div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-lg">
										<img
											src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
											alt="Ирина, мастер шугаринга"
											className="w-full h-full object-cover"
										/>
									</div>
									{/* Декоративный элемент вокруг фото */}
									<div className="absolute -inset-4 border-2 border-pink-200 rounded-full opacity-40"></div>
								</div>

								{/* Информация о мастере */}
								<div className="text-center mb-6">
									<h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">Ирина Сорокина</h3>


									{/* Короткое душевное описание */}
									<p className="text-gray-600 text-sm italic mb-6 max-w-md mx-auto">
										"Для меня шугаринг — это не просто процедура, а искусство создания комфорта
										и уверенности в себе для каждой женщины"
									</p>
								</div>
							</div>
						</div>
					</FadeIn>
				</div>
			</section>

			<NewYearBanner5 />

			{/* Услуги с каскадным эффектом */}
			<section id="services" className="container mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 pt-4 mb-4 font-serif">Мои услуги</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg">
						Полный спектр услуг по шугарингу с профессиональными материалами
						и индивидуальным подходом к каждому клиенту
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{services.map((service, index) => (
						<div
							key={service.id}
							className={`relative rounded-2xl overflow-hidden shadow-xl bg-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${index % 3 === 0 ? 'lg:mt-0' : index % 3 === 1 ? 'lg:mt-8' : 'lg:mt-16'
								}`}
							style={{
								animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
								animationFillMode: 'both'
							}}
						>
							{service.popular && (
								<div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg">
									Популярно
								</div>
							)}

							<div className="h-48 overflow-hidden">
								<div className={`w-full h-full bg-gradient-to-br ${index % 3 === 0 ? 'from-pink-100 to-rose-100' :
									index % 3 === 1 ? 'from-purple-100 to-pink-100' :
										'from-rose-100 to-orange-100'
									}`}></div>
							</div>

							<div className="p-6">
								<div className="flex justify-between items-start mb-3">
									<h3 className="text-xl font-bold text-gray-900 font-serif">{service.title}</h3>
									<span className="text-2xl font-bold text-pink-600">{service.price}</span>
								</div>

								<p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

								<div className="flex justify-between items-center text-sm text-gray-500">
									<div className="flex items-center">
										<Clock size={16} className="mr-1" />
										<span>{service.duration}</span>
									</div>

									<button className="text-pink-600 font-medium hover:text-pink-700 flex items-center transition-colors group">
										Записаться
										<ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Обо мне и преимущества */}
			<section id="about" className="bg-gradient-to-r from-pink-50/50 to-rose-50/50 py-16">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Обо мне</h2>
							<p className="text-gray-700 mb-6 text-lg leading-relaxed">
								Меня зовут Ирина, и я профессиональный мастер шугаринга с более чем 10-летним опытом.
								Начала свой путь в индустрии красоты в 2012 году и с тех пор помогла тысячам клиентов
								обрести идеально гладкую кожу без раздражений.
							</p>
							<p className="text-gray-700 mb-8 text-lg leading-relaxed">
								Я постоянно совершенствую свои навыки, посещаю международные мастер-классы
								и использую только сертифицированные гипоаллергенные материалы.
								Моя цель — не просто удалить волосы, а сделать процедуру максимально комфортной
								и эффективной для каждого клиента.
							</p>

							<div className="grid grid-cols-2 gap-6">
								<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
									<div className="text-3xl font-bold text-pink-600 mb-2 font-serif">5000+</div>
									<div className="text-gray-700">Успешных процедур</div>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
									<div className="text-3xl font-bold text-pink-600 mb-2 font-serif">10+</div>
									<div className="text-gray-700">Лет опыта</div>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
									<div className="text-3xl font-bold text-pink-600 mb-2 font-serif">98%</div>
									<div className="text-gray-700">Довольных клиентов</div>
								</div>
								<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
									<div className="text-3xl font-bold text-pink-600 mb-2 font-serif">15+</div>
									<div className="text-gray-700">Сертификатов</div>
								</div>
							</div>
						</div>

						<div className="lg:w-1/2">
							<div id="advantages" className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-2xl transition-shadow duration-500">
								<h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Мои преимущества</h3>

								<div className="space-y-6">
									{advantages.map((advantage, index) => (
										<div
											key={index}
											className="flex items-start transition-all duration-500 hover:translate-x-2"
											style={{
												animation: `fadeInRight 0.6s ease-out ${index * 0.1}s both`,
												animationFillMode: 'both'
											}}
										>
											<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4 shadow-sm">
												<CheckCircle className="text-pink-600" size={24} />
											</div>
											<p className="text-gray-700 text-lg leading-relaxed">{advantage}</p>
										</div>
									))}
								</div>

								<div className="mt-10 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl hover:shadow-md transition-shadow duration-300 border border-pink-100">
									<div className="flex items-center">
										<div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center mr-4 shadow-sm">
											<MessageCircle className="text-pink-600" size={28} />
										</div>
										<div>
											<h4 className="font-bold text-gray-900 text-lg font-serif">Консультация</h4>
											<p className="text-gray-700">Бесплатная консультация перед первой процедурой</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Контакты и форма */}
			<section id="contact" className="container mx-auto px-4 sm:px-6 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 pt-4 mb-4 font-serif">Контакты и запись</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg">
						Свяжитесь со мной любым удобным способом или заполните форму для записи на процедуру
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-1/2">
						<div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 h-full border border-pink-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Контактная информация</h3>

							<div className="space-y-6 mb-8">
								<div className="flex items-center group">
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
										<Phone className="text-pink-600" size={22} />
									</div>
									<div>
										<div className="text-gray-600 text-sm">Телефон</div>
										<a href="tel:+79161234567" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors font-serif block">
											+7 (916) 123-45-67
										</a>
									</div>
								</div>

								<div className="flex items-center group">
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
										<Mail className="text-pink-600" size={22} />
									</div>
									<div>
										<div className="text-gray-600 text-sm">Email</div>
										<a href="mailto:irina@sugarlux.ru" className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors font-serif block">
											irina@sugarlux.ru
										</a>
									</div>
								</div>

								<div className="flex items-center group">
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
										<MapPin className="text-pink-600" size={22} />
									</div>
									<div>
										<div className="text-gray-600 text-sm">Адрес студии</div>
										<div className="text-lg font-medium text-gray-900 font-serif">Москва, ул. Тверская, д. 10</div>
										<div className="text-gray-600 text-sm">(м. Тверская, 5 минут пешком)</div>
									</div>
								</div>

								<div className="flex items-center group">
									<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
										<Clock className="text-pink-600" size={22} />
									</div>
									<div>
										<div className="text-gray-600 text-sm">График работы</div>
										<div className="text-lg font-medium text-gray-900 font-serif">Пн-Пт: 10:00 - 20:00</div>
										<div className="text-lg font-medium text-gray-900 font-serif">Сб-Вс: 11:00 - 18:00</div>
									</div>
								</div>
							</div>

							<div className="mb-8">
								<h4 className="font-bold text-gray-900 mb-4 font-serif">Социальные сети</h4>
								<div className="flex space-x-4">
									<a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 shadow-sm group">
										<InstagramIcon className="group-hover:scale-110 transition-transform" />
									</a>
									<a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300 shadow-sm group">
										<FacebookIcon className="group-hover:scale-110 transition-transform" />
									</a>
								</div>
							</div>

							<div className="p-5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-100">
								<div className="flex items-center">
									<div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4 shadow-sm">
										<span className="text-white font-bold">-15%</span>
									</div>
									<div>
										<h4 className="font-bold text-gray-900 text-lg font-serif">Первая процедура</h4>
										<p className="text-gray-700">Новым клиентам скидка 15% на первую процедуру</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:w-1/2">
						<div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 h-full border border-pink-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Онлайн-запись</h3>

							{submitSuccess ? (
								<div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center">
									<div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
										<ShieldCheck size={40} className="text-white" />
									</div>
									<h4 className="text-2xl font-bold mb-3 font-serif text-green-800">Заявка отправлена!</h4>
									<p className="text-green-700 mb-6">Я свяжусь с вами в течение 30 минут для подтверждения записи.</p>
									<button
										onClick={() => setSubmitSuccess(false)}
										className="text-green-700 hover:text-green-800 font-medium underline transition-colors text-lg"
									>
										Отправить еще одну заявку
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="space-y-6">
										<div>
											<label className="block text-gray-700 mb-2 font-medium font-sans" htmlFor="name">
												Ваше имя *
											</label>
											<input
												type="text"
												id="name"
												className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-pink-500'
													}`}
												placeholder="Введите ваше имя"
												{...register("name", { required: "Введите ваше имя" })}
											/>
											{errors.name && (
												<p className="text-red-500 text-sm mt-2 flex items-center">
													<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
													{errors.name.message}
												</p>
											)}
										</div>

										<div>
											<label className="block text-gray-700 mb-2 font-medium font-sans" htmlFor="phone">
												Телефон *
											</label>
											<input
												type="tel"
												id="phone"
												className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-pink-500'
													}`}
												placeholder="+7 (___) ___-__-__"
												{...register("phone", {
													required: "Введите ваш телефон",
													pattern: {
													}
												})}
											/>
											{errors.phone && (
												<p className="text-red-500 text-sm mt-2 flex items-center">
													<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
													{errors.phone.message}
												</p>
											)}
										</div>

										<div>
											<label className="block text-gray-700 mb-2 font-medium font-sans" htmlFor="service">
												Выберите услугу
											</label>
											<select
												id="service"
												className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all bg-white"
												{...register("service")}
											>
												<option value="">-- Выберите услугу --</option>
												{services.map(service => (
													<option key={service.id} value={service.title}>{service.title}</option>
												))}
											</select>
										</div>

										<div>
											<label className="block text-gray-700 mb-2 font-medium font-sans" htmlFor="message">
												Ваше сообщение
											</label>
											<textarea
												id="message"
												rows="4"
												className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
												placeholder="Укажите удобные дату и время, зону для процедуры или задайте вопрос..."
												{...register("message")}
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-medium text-lg hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-pink-500/30 group relative overflow-hidden"
										>
											<div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
											<div className="relative z-10 flex items-center justify-center">
												{isSubmitting ? (
													<>
														<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
															<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
															<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
														</svg>
														Отправка...
													</>
												) : (
													<>
														<Sparkles className="mr-3 group-hover:rotate-12 transition-transform" />
														<span>Отправить заявку</span>
													</>
												)}
											</div>
										</button>

										<div className="pt-4 border-t border-gray-100">
											<div className="flex items-start space-x-3">
												<div className="flex-shrink-0 mt-0.5">
													<div className="w-8 h-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
														<Shield size={18} className="text-pink-600" />
													</div>
												</div>
												<div>
													<p className="text-gray-600 text-sm leading-relaxed">
														Нажимая кнопку, вы даете согласие на обработку персональных данных
														в соответствии с{' '}
														<a href="#" className="text-pink-600 hover:text-pink-700 font-medium underline">
															Политикой конфиденциальности
														</a>
														. Ваши данные защищены и не будут переданы третьим лицам.
													</p>
												</div>
											</div>
										</div>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Футер */}
			<footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-8 md:mb-0">
							<div className="flex items-center space-x-3 mb-4">
								<div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
									<span className="text-white font-bold text-xl font-serif">SL</span>
								</div>
								<div>
									<span className="text-2xl font-bold font-serif">SugarLux</span>
									<p className="text-gray-400 text-sm">Профессиональный шугаринг</p>
								</div>
							</div>
						</div>

						<div className="text-center md:text-right">
							<div className="mb-4">
								<a href="tel:+79161234567" className="text-xl font-bold hover:text-pink-400 transition-colors font-serif">+7 (916) 123-45-67</a>
							</div>
							<div className="text-gray-400 mb-4">Москва, ул. Тверская, д. 10, офис 25</div>
							<div className="flex justify-center md:justify-end space-x-6">
								<a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
						<p>© {new Date().getFullYear()} SugarLux. Все права защищены.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App