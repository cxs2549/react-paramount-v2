import styled from 'styled-components'
import logo from '../../../assets/logo-2.png'
import Socials from '../Socials/Socials'
import NavLinks from './NavLinks/NavLinks'
const StyledLogoLinks = styled.div``
const LogoLinks = () => {
	const links = [
		{ name: 'movies' },
		{ name: 'tv' },
		{ name: 'animation' },
		{ name: 'careers' },
		{ name: 'studio tours' }
	]
	return (
		<StyledLogoLinks className=" w-full  items-center h-full">
			<div className="flex lg:flex-col items-center justify-start  h-full lg:justify-around">
				<img src={logo} className="filter brightness-0 invert w-40 " alt="" />
				<NavLinks links={links} />
				<Socials />
			</div>
		</StyledLogoLinks>
	)
}
export default LogoLinks
