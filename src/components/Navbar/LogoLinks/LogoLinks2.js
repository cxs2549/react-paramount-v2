import styled from 'styled-components'
import logo from '../../../assets/logo-2.png'
import Socials2 from '../Socials/Socials2'
import NavLinks2 from './NavLinks/NavLinks2'
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
			<div className="flex items-center justify-start  h-full lg:justify-between">
				<img src={logo} className="filter brightness-0 invert w-40 " alt="" />
				<NavLinks2 links={links} />
				<Socials2 />
			</div>
		</StyledLogoLinks>
	)
}
export default LogoLinks
