import styled from 'styled-components'
const StyledWrapper = styled.div``
const Wrapper = ({ children }) => {
	return <StyledWrapper className="p-4  flex items-center h-full w-full">{children}</StyledWrapper>
}
export default Wrapper
