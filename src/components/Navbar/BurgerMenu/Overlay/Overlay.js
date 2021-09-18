import styled from 'styled-components'
const StyledOverlay = styled.div`
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-color: rgba(0,0,0,.7);
`
const Overlay = ({close}) => {
return (
<StyledOverlay onClick={close}>

</StyledOverlay>
)
}
export default Overlay