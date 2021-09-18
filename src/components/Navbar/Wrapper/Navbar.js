import Headroom from 'react-headroom'
import styled from 'styled-components'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import LogoLinks from '../LogoLinks/LogoLinks'
import Wrapper from './Wrapper'

const StyledNavbar = styled.header`
	height: auto;
	position: relative;
	z-index: 10;
	@media (min-width: 992px) {
		height: 600px;
	}
	
`
const Navbar = () => {
	return (
		<div>
			<Headroom>
				<StyledNavbar className=" bg-blue-700 ">
					<Wrapper>
						<LogoLinks />
						<BurgerMenu />
					</Wrapper>
				</StyledNavbar>
			</Headroom>
		</div>
	)
}
export default Navbar
