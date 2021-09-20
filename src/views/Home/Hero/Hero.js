import styled from 'styled-components'
import Info from './Info/Info'

const StyledHero = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;

	img {
		object-fit: cover;
		object-position: center top;
		min-height: 100%;
		min-width: 100%;
		@media (min-width: 992px) {
			min-height: 80vh;
			max-height: 80vh;
		}
	}
`
const Hero = ({ image, title, quote, author }) => {
	return (
		<div>
			<StyledHero className="relative">
				<img src={image} className="" alt="" />
			</StyledHero>
			<Info title={title} quote={quote} author={author} />
		</div>
	)
}
export default Hero
