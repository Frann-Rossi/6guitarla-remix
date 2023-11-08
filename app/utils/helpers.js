export const formatearFecha = (fecha) => {
	const fechaNueva = new Date(fecha);
	const opcines = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};
	return fechaNueva.toLocaleDateString("es-ES", opcines);
};
