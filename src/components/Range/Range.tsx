import { FC, ChangeEvent, useState, useEffect } from 'react'
import {
	RangeWrapper,
	SliderWrapper,
	InputWrapper,
	StyledInput,
	CustomInputWrapper,
	StyledTrack,
	StyledThumb,
	StyledThumbFill,
} from './styles'
import { TextField } from '@/components/TextField'


interface RangeProps {
	value: number
	onChange: (value: number) => void
	min: number
	max: number
	step?: number
	before?: string
	after?: string
}

export const Range: FC<RangeProps> = ({
	value,
	onChange,
	min,
	max,
	step,
	before,
	after,
}) => {
	const [val, setVal] = useState<number>(value)
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		setVal(value)
	}, [ value ])

	const textChangeHandler = (textVal: string) => {
		const numVal = Number(textVal)
		
		if (Number.isNaN(numVal)) {
			setErr('err')
		} else {
			setErr('')
			onChange(Math.max(min, Math.min(numVal, max)))
		}
	}

	const rangeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const nextValue = event.target.value

		onChange(Number(nextValue))
		setErr('')
	}

	const pos = ((val - min) / (max - min)) * 100

	return (
		<RangeWrapper>
			<TextField
				value={ `${ val }` }
				onChange={ textChangeHandler }

				error={ err }

				before={ before }
				after={ after }

				align='center'
			/>

			<SliderWrapper
				style={ { width: '75%' } }
			>
				<InputWrapper>
					<StyledInput
						type='range'

						value={ val }
						onChange={ rangeChangeHandler }

						min={ min }
						max={ max }
						step={ step || 1 }
					/>
				</InputWrapper>

				<CustomInputWrapper>
					<StyledTrack
						style={ { left: `${ pos }%` } }
					/>

					<StyledThumbFill
						style={{
							left: `0`,
							right: `${ 100 - pos }%`,
						}}
					/>

					<StyledThumb />
				</CustomInputWrapper>
			</SliderWrapper>
		</RangeWrapper>
	)
}