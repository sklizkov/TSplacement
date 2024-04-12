import { styled, css } from 'styled-components'


export const StyledButton = styled.button<{
	$size: 'big' | 'medium' | 'small'
	$align: 'left' | 'center' | 'right'
	$compact: boolean
	$variant: 'primary' | 'secondary' | 'success' | 'warning' | 'link'
	$width: number | string
	$transparent: boolean
	$disabled: boolean
	$active: boolean
}>`
	${ ({ $size }) => {
		switch($size) {
			case 'big':
				return css`
					--size: 44px;
					--icon-size: 30px;
					--text-size: var(--font-size-mono);
					--gap: 4px;
					--padding: 16px;
				`
			case 'medium':
				return css`
					--size: 32px;
					--icon-size: 30px;
					--text-size: var(--font-size-mono);
					--gap: 2px;
					--padding: 8px;
				`
			case 'small':
				return css`
					--size: 24px;
					--icon-size: 22px;
					--text-size: var(--font-size-mono);
					--gap: 2px;
					--padding: 4px;
				`
			default:
				// ...
		}
	} };

	${ ({ $variant, $transparent }) => {
		if ($transparent) {
			switch($variant) {
				case 'primary':
					return css`
						--button-background: var(--color-primary-transparent);
						--button-background-hover: var(--color-primary-transparent-light);
						--button-background-active: var(--color-primary-transparent-dark);
						--button-border: var(--button-background);
						--button-color: var(--color-primary);
					`
				case 'secondary':
					return css`
						--button-background: var(--color-secondary-transparent);
						--button-background-hover: var(--color-secondary-transparent-light);
						--button-background-active: var(--color-secondary-transparent-dark);
						--button-border: var(--button-background);
						--button-color: inherit;
					`
				case 'success':
					return css`
						--button-background: var(--color-success-transparent);
						--button-background-hover: var(--color-success-transparent-light);
						--button-background-active: var(--color-success-transparent-dark);
						--button-border: var(--button-background);
						--button-color: var(--color-success);
					`
				case 'warning':
					return css`
						--button-background: var(--color-warning-transparent);
						--button-background-hover: var(--color-warning-transparent-light);
						--button-background-active: var(--color-warning-transparent-dark);
						--button-border: var(--button-background);
						--button-color: var(--color-warning);
					`
				case 'link':
					return css`
						--button-background: transparent;
						--button-background-hover: transparent;
						--button-background-active: transparent;
						--button-border: var(--button-background);
						--button-color: inherit;
					`
				default:
					// ...
			}
		} else {
			switch($variant) {
				case 'primary':
					return css`
						--button-background: var(--color-primary);
						--button-background-hover: var(--color-primary-light);
						--button-background-active: var(--color-primary-dark);
						--button-border: var(--button-background);
						--button-color: var(--color-text-button);
					`
				case 'secondary':
					return css`
						--button-background: var(--color-secondary);
						--button-background-hover: var(--color-secondary-light);
						--button-background-active: var(--color-secondary-dark);
						--button-border: var(--button-background);
						--button-color: inherit;
					`
				case 'success':
					return css`
						--button-background: var(--color-success);
						--button-background-hover: var(--color-success-light);
						--button-background-active: var(--color-success-dark);
						--button-border: var(--button-background);
						--button-color: var(--color-text-button);
					`
				case 'warning':
					return css`
						--button-background: var(--color-warning);
						--button-background-hover: var(--color-warning-light);
						--button-background-active: var(--color-warning-dark);
						--button-border: var(--button-background);
						--button-color: var(--color-text-button);
					`
				case 'link':
					return css`
						--button-background: transparent;
						--button-background-hover: transparent;
						--button-background-active: transparent;
						--button-border: var(--button-background);
						--button-color: inherit;
					`
				default:
					// ...
			}
		}
	} };

	${ ({ $compact }) => $compact && css`--padding: 0;` }

	${ ({ $width }) => {
		const size = typeof $width === 'number' ? $width + 'px' : $width
		return css`
			width: ${ size };
		`
	} }

	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	/* width: 100%; */
	/* flex: 1; */
	gap: var(--gap);
	height: var(--size);
	min-width: var(--size);
	font-family: var(--font-family-mono);
	font-size: var(--text-size);
	line-height: var(--line-height-mono);
	font-weight: 500;
	padding: 0 var(--padding);
	white-space: nowrap;

	justify-content: ${ ({ $align }) => $align };

	border: 1px solid transparent;
	background-color: var(--button-background);
	color: var(--button-color);

	${ ({ $disabled }) => $disabled && css`
		pointer-events: none;
		opacity: .5;
		cursor: default;
	` }
	
	${ ({ $active }) => $active && css`
			background-color: var(--button-background-active);
			border-color: var(--button-border);
	` }

	&:hover {
		background-color: var(--button-background-hover);
	}
	
	&:active {
		background-color: var(--button-background-active);
		border-color: var(--button-border);
	}

	& > svg {
		display: block;
		height: var(--icon-size);
	}
`

export const ButtonGroupWrapper = styled.div<{
	$direction: 'row' | 'column'
}>`
	display: flex;
	flex-direction: ${ ({ $direction }) => $direction };
	gap: 2px;
`
