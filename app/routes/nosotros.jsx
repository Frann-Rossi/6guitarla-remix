import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
	return [
		{ title: "GuitarLA - Sobre Nosotros" },
		{ description: "Venta de guitarras, blog de musica" },
	];
}

export function links() {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
		{
			rel: "preload",
			href: imagen,
			as: "image",
		},
	];
}

const Nosotros = () => {
	return (
		<main className="contenedor nosotros">
			<h2 className="heading">Nosotros</h2>
			<div className="contenido">
				<img src={imagen} alt="imagen sobre nosotros" />
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
						provident ducimus in cum sed rem eligendi reprehenderit illum
						dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
						nisi provident ducimus in cum sed rem eligendi reprehenderit illum
						dolore.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi
						provident ducimus in cum sed rem eligendi reprehenderit illum
						dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
						nisi provident ducimus in cum sed rem eligendi reprehenderit illum
						dolore.
					</p>
				</div>
			</div>
		</main>
	);
};

export default Nosotros;
