import { useState, useEffect } from "react";

export const NewYearBanner5 = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [daysLeft, setDaysLeft] = useState(0);
	const [is3DEnabled, setIs3DEnabled] = useState(true);

	useEffect(() => {
		const now = new Date();
		const newYear = new Date(now.getFullYear() + 1, 0, 1);
		const diff = Math.ceil((newYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
		setDaysLeft(diff);

		if (now.getMonth() === 0 && now.getDate() < 10) {
			setIsVisible(false);
		}

		// Добавляем глобальные стили для анимаций
		const styleSheet = document.createElement('style');
		styleSheet.innerHTML = `
			@keyframes ny-flicker1 {
				0%, 100% { opacity: 0.8; transform: scale(1); }
				50% { opacity: 1; transform: scale(1.2); }
			}
			@keyframes ny-flicker2 {
				0%, 100% { opacity: 0.6; transform: scale(1); }
				30%, 70% { opacity: 1; transform: scale(1.1); }
			}
			@keyframes ny-flicker3 {
				0%, 100% { opacity: 0.7; transform: scale(1); }
				20%, 80% { opacity: 1; transform: scale(1.15); }
			}
			@keyframes ny-flicker4 {
				0%, 60%, 100% { opacity: 0.5; transform: scale(1); }
				30%, 90% { opacity: 1; transform: scale(1.2); }
			}
			@keyframes ny-flicker5 {
				0%, 100% { opacity: 0.9; transform: scale(1); }
				40% { opacity: 1; transform: scale(1.25); }
				80% { opacity: 0.6; transform: scale(0.95); }
			}
			@keyframes ny-flicker6 {
				0%, 100% { opacity: 0.7; transform: scale(1); }
				25%, 75% { opacity: 1; transform: scale(1.15); }
			}
			@keyframes ny-flicker7 {
				0%, 100% { opacity: 0.8; transform: scale(1); }
				33%, 66% { opacity: 1; transform: scale(1.1); }
			}
			@keyframes ny-flicker8 {
				0%, 50%, 100% { opacity: 0.6; transform: scale(1); }
				25%, 75% { opacity: 1; transform: scale(1.2); }
			}
			@keyframes ny-flicker9 {
				0%, 100% { opacity: 0.5; transform: scale(1); }
				45%, 55% { opacity: 1; transform: scale(1.3); }
			}
			@keyframes ny-flicker10 {
				0%, 40%, 80%, 100% { opacity: 0.7; transform: scale(1); }
				20%, 60% { opacity: 1; transform: scale(1.25); }
			}
			@keyframes ny-rotate3d {
				0% { transform: rotateY(0deg); }
				100% { transform: rotateY(360deg); }
			}
			@keyframes ny-textRotate {
				0% { transform: translate(-50%, -50%) rotateY(0deg); }
				100% { transform: translate(-50%, -50%) rotateY(-360deg); }
			}
			@keyframes ny-pulseHeader {
				0%, 100% { transform: scale(1); opacity: 1; }
				50% { transform: scale(1.05); opacity: 0.9; }
			}
			@keyframes ny-gentlePulse {
				0%, 100% { transform: scale(1); }
				50% { transform: scale(1.03); }
			}
			@keyframes ny-twinkle {
				0%, 100% { opacity: 0.6; }
				50% { opacity: 1; }
			}
			@keyframes ny-garland-wave {
				0%, 100% { transform: translateY(0px); }
				50% { transform: translateY(3px); }
			}
			
			/* CSS классы для фона - временно черные для проверки */
			.ny-pattern-bg {
				background-image: 
					radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.3) 0%, transparent 25%),
					radial-gradient(circle at 90% 30%, rgba(0, 0, 0, 0.25) 0%, transparent 30%),
					radial-gradient(circle at 40% 70%, rgba(0, 0, 0, 0.2) 0%, transparent 35%),
					radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.15) 0%, transparent 40%);
				background-size: 100% 100%;
				opacity: 0.4;
			}
			
			/* CSS класс для заголовка */
			.ny-title {
				font-family: 'Playfair Display', serif !important;
				background: linear-gradient(90deg, #7f1d1d, #b91c1c, #7f1d1d) !important;
				-webkit-background-clip: text !important;
				-webkit-text-fill-color: transparent !important;
				background-clip: text !important;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.1) !important;
			}
			
			/* CSS класс для 3D шара */
			.ny-ball-3d {
				background: radial-gradient(circle at 30% 30%, #ef4444, #b91c1c 70%);
				box-shadow: inset -15px -15px 25px rgba(0, 0, 0, 0.5), 
							inset 10px 10px 20px rgba(255, 255, 255, 0.1), 
							0 0 20px rgba(239, 68, 68, 0.7), 
							0 0 40px rgba(239, 68, 68, 0.3);
				transform-style: preserve-3d;
			}
			
			/* CSS класс для 2D шара */
			.ny-ball-2d {
				background: linear-gradient(to bottom right, #ef4444, #ec4899, #f472b6);
				box-shadow: 0 0 20px rgba(239, 68, 68, 0.7), 
							0 0 40px rgba(239, 68, 68, 0.3);
			}
			
			/* CSS класс для текста в шаре */
			.ny-ball-text {
				text-shadow: 0 2px 4px rgba(0,0,0,0.5);
				backface-visibility: hidden;
			}
			
			/* CSS класс для этикетки */
			.ny-label-pulse {
				animation: ny-pulseHeader 2s infinite ease-in-out;
			}
			
			/* CSS класс для бликов на шаре */
			.ny-ball-highlight-1 {
				top: 1rem;
				left: 1rem;
				width: 1rem;
				height: 1rem;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 50%;
				filter: blur(4px);
			}
			
			.ny-ball-highlight-2 {
				bottom: 1.5rem;
				right: 1.5rem;
				width: 0.75rem;
				height: 0.75rem;
				background: rgba(255, 255, 255, 0.4);
				border-radius: 50%;
				filter: blur(4px);
			}
			
			/* Классы для гирлянд с проводами */
			.garland-wire {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				height: 2px;
				background: linear-gradient(90deg, #4a5568, #718096, #4a5568);
				z-index: 1;
				opacity: 0.7;
			}
			
			.garland-light-wrapper {
				position: absolute;
				z-index: 2;
				transform: translate(-50%, -50%);
			}
			
			.garland-light {
				position: relative;
				width: 16px;
				height: 16px;
				border-radius: 50%;
				animation-duration: 1.5s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
				animation-direction: alternate;
			}
			
			/* Эффект обвития вокруг провода */
			.garland-light::before {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 20px;
				height: 20px;
				border: 2px solid rgba(255, 255, 255, 0.2);
				border-radius: 50%;
			}
		`;
		document.head.appendChild(styleSheet);

		return () => {
			document.head.removeChild(styleSheet);
		};
	}, []);

	if (!isVisible) return null;

	// Функция для создания гирлянды с обвитием
	const createGarlandLights = (count, isTop) => {
		const lights = [];
		const colors = ['#ef4444', '#22c55e', '#3b82f6', '#eab308'];
		const animations = [
			'ny-flicker1', 'ny-flicker2', 'ny-flicker3', 'ny-flicker4', 'ny-flicker5',
			'ny-flicker6', 'ny-flicker7', 'ny-flicker8', 'ny-flicker9', 'ny-flicker10'
		];

		for (let i = 0; i < count; i++) {
			const position = (i / (count - 1)) * 100;
			// Создаем волнообразное расположение для обвития
			const waveOffset = Math.sin(i * 0.5) * 8;
			const topPosition = isTop ? `calc(50% + ${waveOffset}px)` : `calc(50% + ${waveOffset}px)`;

			const colorIndex = i % colors.length;
			const animationIndex = i % animations.length;
			const animationDelay = `${(i * 0.15)}s`;
			const animationName = animations[animationIndex];
			const animationDuration = `${2 + Math.random()}s`;

			lights.push(
				<div
					key={`${isTop ? 'top' : 'bottom'}-garland-${i}`}
					className="garland-light-wrapper"
					style={{
						left: `${position}%`,
						top: topPosition,
						animationName: 'ny-garland-wave',
						animationDuration: animationDuration,
						animationIterationCount: 'infinite',
						animationTimingFunction: 'ease-in-out',
						animationDelay: animationDelay
					}}
				>
					<div
						className="garland-light"
						style={{
							backgroundColor: colors[colorIndex],
							boxShadow: `0 0 10px ${colors[colorIndex]}, 0 0 20px ${colors[colorIndex]}`,
							animationName: animationName,
							animationDelay: animationDelay
						}}
					></div>
				</div>
			);
		}
		return lights;
	};

	return (
		<div className="relative my-6 md:my-8 overflow-hidden">
			{/* Узорный фон с черными узорами для проверки */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white/10 to-purple-50/20"></div>
				<div className="absolute inset-0 ny-pattern-bg"></div>
			</div>

			{/* Верхняя гирлянда с проводом и обвитием */}
			<div className="absolute top-0 left-0 right-0 h-12 z-10 overflow-hidden">
				<div className="garland-wire"></div>
				{createGarlandLights(20, true)}
			</div>

			{/* Нижняя гирлянда с проводом и обвитием */}
			<div className="absolute bottom-0 left-0 right-0 h-12 z-10 overflow-hidden">
				<div className="garland-wire"></div>
				{createGarlandLights(20, false)}
			</div>

			<div className="relative bg-gradient-to-r from-white via-pink-50/30 to-white rounded-2xl md:rounded-3xl p-1 shadow-xl border-2 border-white/90 mt-12 mb-12">
				<div className="relative bg-gradient-to-br from-white/95 via-white/98 to-white/95 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm border border-white/80">


					<div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
							<div className="lg:w-3/5">
								<div className="flex items-start mb-8">								
									
									
									<div className="flex-1">
										<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ny-title">
											Годовой абонемент
										</h2>
										<p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed font-['Playfair_Display'] italic">
											Встретьте Новый 2026 год с идеальной кожей!
											Специальное предложение с подарками и максимальной выгодой.
										</p>
									</div>
								</div>

								{/* Четыре карточки в один ряд */}
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
									<div className="text-center p-6 bg-gradient-to-b from-white to-pink-50/50 rounded-2xl border-2 border-red-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
										<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-pink-400"></div>
										<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
											<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
											</svg>
										</div>
										<div className="text-l font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 font-['Playfair_Display']">
											Новогодний подарок
										</div>
									</div>

									<div className="text-center p-6 bg-gradient-to-b from-white to-emerald-50/50 rounded-2xl border-2 border-emerald-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
										<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-400"></div>
										<div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2 font-['Playfair_Display']">12</div>
										<div className="text-gray-700 font-medium font-['Playfair_Display']">процедур</div>
										<div className="text-xs text-gray-500 mt-1 font-['Playfair_Display']">за весь год</div>
									</div>

									<div className="text-center p-6 bg-gradient-to-b from-white to-amber-50/50 rounded-2xl border-2 border-amber-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
										<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
										<div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2 font-['Playfair_Display']">6 000₽</div>
										<div className="text-gray-700 font-medium font-['Playfair_Display']">экономия</div>
										<div className="text-xs text-gray-500 mt-1 font-['Playfair_Display']">специальная цена</div>
									</div>

									<div className="text-center p-6 bg-gradient-to-b from-white to-blue-50/50 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
										<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
										<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 font-['Playfair_Display']">{daysLeft}</div>
										<div className="text-gray-700 font-medium font-['Playfair_Display']">дней осталось</div>
										<div className="text-xs text-gray-500 mt-1 font-['Playfair_Display']">до конца акции</div>
									</div>
								</div>
							</div>

							<div className="lg:w-2/5">
								<div className="relative bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-2 shadow-2xl border-2 border-white overflow-hidden">
									<div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/80">
										<div className="text-center mb-8">
											<div className="text-5xl font-bold font-['Playfair_Display'] mb-4">
												<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-green-600 to-blue-600">
													18 000₽
												</span>
											</div>
											<div className="text-gray-600 mb-6 text-lg font-['Playfair_Display']">
												<span className="line-through text-gray-400 mr-3 text-xl">24 000₽</span>
												<span className="text-red-600 font-bold text-xl">-25%</span>
											</div>
											<div className="text-gray-700 font-medium font-['Playfair_Display']">
												Полный уход за 12 месяцев
											</div>
										</div>

										<div className="text-center pt-6 border-t border-gray-200">
											<p className="text-gray-600 mb-4 text-sm font-['Playfair_Display']">
												Идеальный подарок себе или близким на Новый год
											</p>
											<div className="flex items-center justify-center space-x-2">
												{['#ef4444', '#22c55e', '#3b82f6', '#eab308', '#8b5cf6'].map((color, i) => (
													<div
														key={`twinkle-${i}`}
														className="w-2 h-2 rounded-full"
														style={{
															backgroundColor: color,
															animationName: 'ny-twinkle',
															animationDuration: `${1 + i * 0.5}s`,
															animationIterationCount: 'infinite',
															animationDirection: 'alternate',
															animationDelay: `${i * 0.2}s`
														}}
													></div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button
						onClick={() => setIsVisible(false)}
						className="absolute top-8 right-8 text-gray-500 hover:text-gray-700 transition-colors w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white border-2 border-gray-200 shadow-lg z-30 hover:scale-110 transition-transform"
						aria-label="Закрыть баннер"
					>
						<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* Искреннее новогоднее поздравление */}
					<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
						<div className="text-center">
							<div className="text-sm text-gray-600 italic mb-1 font-['Playfair_Display']">
								Пусть 2026 год принесёт вам красоту, здоровье и уверенность!
							</div>
							<div className="flex items-center justify-center">
								<div className="w-16 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent mx-2"></div>
								<span className="text-gray-700 font-semibold font-['Playfair_Display']">С любовью, Ирина</span>
								<div className="w-16 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mx-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};