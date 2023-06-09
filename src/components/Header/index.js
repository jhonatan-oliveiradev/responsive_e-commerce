/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

import logoImg from "../../assets/Logo.svg";
import { Container } from "./styles";

export function Header({ setMenuIsVisible }) {
	return (
		<Container>
			<section>
				<img src={logoImg} alt="Logo" />
				<nav>
					<a href="#">Home</a>
					<a href="#">Produtos</a>
					<a href="#">Sobre nós</a>
					<a href="#">Contato</a>
				</nav>
			</section>

			<section>
				<FaSearch />
				<FaShoppingBag />
				<RiMenu3Fill
					onClick={() => setMenuIsVisible(true)}
					className="mobile"
				/>
			</section>
		</Container>
	);
}
