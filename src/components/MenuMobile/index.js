import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
	}, [menuIsVisible]);

	return (
		<Container isVisible={menuIsVisible}>
			<IoClose size={45} onClick={() => setMenuIsVisible(false)} />
			<nav>
				<a href="#">Home</a>
				<a href="#">Produtos</a>
				<a href="#">Sobre nós</a>
				<a href="#">Contato</a>
			</nav>
		</Container>
	);
}
