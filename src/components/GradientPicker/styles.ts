import { styled } from 'styled-components'


export const GradientPickerWrapper = styled.div`
	position: absolute;
	z-index: 9;
	bottom: 24px;
	left: 50%;
	transform: translate(-50%, 0);
	background-color: var(--color-background);
	/* background: red; */
	width: 320px;
	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
							rgba(0, 0, 0, 0.07) 0px 2px 4px,
							rgba(0, 0, 0, 0.07) 0px 4px 8px,
							rgba(0, 0, 0, 0.07) 0px 8px 16px,
							rgba(0, 0, 0, 0.07) 0px 16px 32px,
							rgba(0, 0, 0, 0.07) 0px 32px 64px;
	
`

export const GradientHeader = styled.header`
	display: flex;
	flex-direction: column;
	gap: 2px;
	padding: 4px;
`

export const GradientLine = styled.div`
	background-color: var(--color-input-background);
	padding: 4px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const ControlLine = styled.div`
	display: flex;
	font-size: 12px;
`