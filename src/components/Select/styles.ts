import { styled } from 'styled-components'


export const StyledSelect = styled.select`
	appearance: none;
	-webkit-appearance: none;
	background-color: var(--color-input-background);
	width: 100%;
	font-family: var(--font-family-mono);
	font-size: var(--font-size-mono);
	border: 1px solid transparent;
	padding: 4px 4px 5px 4px;
	margin: 0;
	border-radius: 0;
	position: relative;
	background-image: url('./img/select.svg');
	background-size: 32px 32px;
	background-repeat: no-repeat;
	background-position: right center;

	&::-ms-expand {
		display: none;
	}
`
