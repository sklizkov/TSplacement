import { styled, css } from 'styled-components'


export const TextFieldWrapper = styled.div<{
	$focus: boolean
	$disabled: boolean
	$error: boolean
	$warning: boolean
}>`
	--border-color: var(--color-input-border);

	position: relative;
	border: 1px solid transparent;
	background-color: var(--color-input-background);
	font-family: var(--font-family-mono);
	font-size: var(--font-size-mono);
	line-height: var(--line-height-mono);
	color: var(--color-text);
	/* flex: 1; // ??? */
	width: 100%;
	/* flex: none; */
	display: flex;
	align-items: center;
	cursor: text;

	${ ({ $disabled }) => $disabled && css`
		pointer-events: none;
		color: var(--color-text-dark);
		cursor: default;
	` }

	${ ({ $error }) => $error && css`
		--border-color: var(--color-error);

		&:after {
			display: block;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--color-error);
			opacity: .2;
			pointer-events: none;
		}
	` }

	${ ({ $warning }) => $warning && css`
		--border-color: var(--color-warning);

		&:after {
			display: block;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--color-warning);
			opacity: .2;
			pointer-events: none;
		}
	` }

	${ ({ $focus }) => $focus && css`
		border-color: var(--border-color);
	` }
`

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
`

export const StyledTextInput = styled.input<{
	$align: 'left' | 'center' | 'right'
}>`
	display: block;
	width: 100%;
	background-color: transparent;
	border: 0;
	text-align: ${ ({ $align }) => $align };
	padding: 6px 4px;
`

export const StyledPlaceholder = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	user-select: none;
	padding: 6px 4px;
	background-color: transparent;
	color: var(--color-text-dark);
`

export const StyledSign = styled.div`
	display: block;
	padding: 6px 4px;
	color: var(--color-text-dark);
	user-select: none;
	pointer-events: none;
`