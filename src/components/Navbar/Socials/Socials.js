import styled from 'styled-components'
import {
	TiSocialTwitter,
	TiSocialInstagram,
	TiSocialYoutube,
	TiSocialLinkedin,
	TiSocialFacebook
} from 'react-icons/ti'

const StyledSocials = styled.div`
	color: white;
	justify-content: ${(props) => props.justify};
	@media (min-width: 992px) {
		height: min-content
	}
	svg {
		font-size: 1.2rem !important;
		cursor: pointer;
		@media (min-width: 768px) {
			font-size: 1.75rem !important;
		}
		
	}
`

const Socials = ({ justify }) => {
	return (
		<StyledSocials
			justify={justify}
			className="hidden md:flex lg:flex-col  items-center gap-4  h-full"
		>
			<TiSocialFacebook />
			<TiSocialInstagram />
			<TiSocialTwitter />
			<TiSocialYoutube />
			<TiSocialLinkedin />
		</StyledSocials>
	)
}
export default Socials
