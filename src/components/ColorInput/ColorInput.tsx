import { FC, useState, useRef, CSSProperties } from 'react'
import { HexColorPicker } from 'react-colorful'
import { TextField } from '@/components/TextField'
import { Button } from '@/components/Button'
import { useClickOutside } from '@/hooks'
import { validHex } from '@/utils/color'
import {
	ColorWrapper,
	StyledButton,
	ColorView,
} from './styles'


interface ColorInputProps {
	value: string
	onChange: (val: string) => void
	style?: CSSProperties
}

export const ColorInput: FC<ColorInputProps> = ({
	value,
	onChange,
	style,
}) => {
	const [show, setShow] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	
	const clickOutsidehandler = () => {
		setShow(false)
	}
	
	useClickOutside(ref, clickOutsidehandler)

	const changeHandler = (val: string) => {
		if (val[0] === '#') {
			if (!validHex(val)) return
			onChange(val.slice(1, 7))
		} else {
			if (!validHex('#' + val)) return
			onChange(val.slice(0, 6))
		}
	}

	return (
		<ColorWrapper
			style={ style }
		>
			<StyledButton ref={ ref }>
				{ show && <HexColorPicker
					color={ '#' + value }
					onChange={ changeHandler }
				/> }

				<Button
					onClick={ () => setShow(!show) }
					active={ show }
				>
					<ColorView style={ {backgroundColor: '#' + value} } />
				</Button>
			</StyledButton>

			<TextField
				value={ value }
				onChange={ changeHandler }
				before={ '#' }
			/>
		</ColorWrapper>
	)
}