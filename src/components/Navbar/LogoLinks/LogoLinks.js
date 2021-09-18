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
			<div className="flex items-center justify-start md:flex-col lg:justify-between h-full">
				<img src={logo} className="filter brightness-0 invert w-40 " alt="" />
				<NavLinks links={links} />
				<Socials />
			</div>
		</StyledLogoLinks>
	)
}
export default LogoLinks
