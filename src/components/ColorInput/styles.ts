import { styled } from 'styled-components'


export const ColorWrapper = styled.div`
	display: flex;
	gap: 2px;
	width: 100%;
`

export const StyledButton = styled.div`
	position: relative;

	& > .react-colorful {
		position: absolute;
		left: 0;
		top: -2px;
		transform: translateY(-100%);
		max-width: 180px;
		z-index: 9;
		padding: 8px;
		border-radius: 0;
		background: var(--color-input-background);
		
		.react-colorful__saturation {
			border-radius: 0;
		}
		
		.react-colorful__saturation-pointer {
			border-radius: 0;
			width: 16px;
			height: 16px;
		}
		
		.react-colorful__hue {
			margin-top: 8px;
			border-radius: 0;
		}
		
		.react-colorful__hue-pointer {
			border-radius: 0;
			width: 8px;
		}
	}
`

export const ColorView = styled.div`
	display: block;
	width: 16px;
	height: 16px;
	flex: none;
`