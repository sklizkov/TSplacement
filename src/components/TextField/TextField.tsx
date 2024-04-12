import { FC, useState, ChangeEvent, useRef, CSSProperties } from 'react'

import {
	TextFieldWrapper,
	InputWrapper,
	StyledTextInput,
	StyledPlaceholder,
	StyledSign,
} from './styles'


interface TextFieldProps {
	value: string
	onChange: (value: string) => void
	placeholder?: string
	disabled?: boolean
	error?: string
	warning?: string
	before?: string
	after?: string
	align?: 'left' | 'center' | 'right'
	style?: CSSProperties
}

export const TextField: FC<TextFieldProps> = ({
	value,
	onChange,
	placeholder,
	disabled,
	error,
	warning,
	before,
	after,
	align,
	style,
}) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [focus, setFocus] = useState<boolean>(false)

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const nextValue = event.target.value

		onChange(nextValue)
	}

	const focusHandler = () => {
		inputRef.current?.focus()
	}

	return (
		<TextFieldWrapper
			$focus={ focus }
			onClick={ focusHandler }

			$disabled={ !!disabled }
			$error={ !!error }
			$warning={ !!warning }

			style={ style }
		>
			{ before && <StyledSign>{ before }</StyledSign> }

			<InputWrapper>
				<StyledTextInput
					type='text'
					ref={ inputRef }

					value={ value }
					onChange={ changeHandler }

					onFocus={ () => setFocus(true) }
					onBlur={ () => setFocus(false) }

					$align={ align || 'left' }
				/>

				{ placeholder && !(value || focus) && (
					<StyledPlaceholder>{ placeholder }</StyledPlaceholder>
				) }
			</InputWrapper>

			{ after && <StyledSign>{ after }</StyledSign> }
		</TextFieldWrapper>
	)
}
