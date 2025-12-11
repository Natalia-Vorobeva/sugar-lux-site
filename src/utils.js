

	export const scrollToSection = (e, sectionId) => {
	e.preventDefault();
	const element = document.getElementById(sectionId);
	if (element) {
		const headerOffset = 80; // Учитываем высоту хедера
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
}