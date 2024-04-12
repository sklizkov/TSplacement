import { styled } from 'styled-components'


export const LabelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* font-size: 12px; */
	/* background-color: rgba(254, 125, 0, .25); */
`

export const StyledLabel = styled.label`
	/* color: var(--color-label-text); */
	width: 34%;
	flex: none;
	display: block;
	padding-left: 4px;
	padding-right: 4px;
	user-select: none;
	font-family: var(--font-family);
	font-size: var(--font-size-mono);
	line-height: var(--line-height-mono);
	color: var(--color-text-dark);
`