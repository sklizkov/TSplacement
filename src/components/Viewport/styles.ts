import {
	styled,
} from 'styled-components'


export const ViewportWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

export const ControllBarLeft = styled.div`
	position: absolute;
	top: 16px;
	left: 16px;
	z-index: 1;
	background-color: var(--color-input-background);
	/* padding: 2px; */
`

export const ControllBarRight = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
	z-index: 1;
	background-color: var(--color-input-background);
	/* padding: 2px; */
`
