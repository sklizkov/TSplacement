import { FC, useState, useEffect, ChangeEvent } from 'react'
import { range } from '@/types'
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
	value: range
	onChange: (value: range) => void
	min: number
	max: number
	step?: number
	before?: string
	after?: string
}

export const Range2: FC<RangeProps> = ({
	value,
	onChange,
	min,
	max,
	step,
	before,
	after,
}) => {
	const [minVal, setMinVal] = useState<number>(value[0])
	const [maxVal, setMaxVal] = useState<number>(value[1])

	const [minErr, setMinErr] = useState<string>('')
	const [maxErr, setMaxErr] = useState<string>('')

	useEffect(() => {
		setMinVal(value[0])
		setMaxVal(value[1])
	}, [ value ])

	const minTextChangeHandler = (textVal: string) => {
		const numVal = Number(textVal)
		
		if (Number.isNaN(numVal)) {
			setMinErr('err')
		} else {
			setMinErr('')
			const inRangeVal = Math.max(min, Math.min(numVal, max))
			const clapVal = Math.min(inRangeVal, maxVal)
			onChange([ clapVal, value[1] ])
		}
	}

	const maxTextChangeHandler = (textVal: string) => {
		const numVal = Number(textVal)
		
		if (Number.isNaN(numVal)) {
			setMaxErr('err')
		} else {
			setMaxErr('')
			const inRangeVal = Math.max(min, Math.min(numVal, max))
			const clapVal = Math.max(inRangeVal, minVal)
			onChange([ value[0], clapVal ])
		}
	}

	const minRangeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const nextValue = Number(event.target.value)
		const clapVal = Math.min(nextValue, maxVal)
		
		onChange([ clapVal, value[1] ])
		setMinErr('')
	}
	
	const maxRangeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const nextValue = Number(event.target.value)
		const clapVal = Math.max(nextValue, minVal)
		onChange([ value[0], clapVal ])
		setMaxErr('')
	}

	const minPos = ((minVal - min) / (max - min)) * 100
	const maxPos = ((maxVal - min) / (max - min)) * 100

	return (
		<RangeWrapper>
			<TextField
				value={ `${ minVal }` }
				onChange={ minTextChangeHandler }

				error={ minErr }

				before={ before }
				after={ after }

				align='center'
			/>

			<SliderWrapper
				style={ { width: '50%' } }
			>
				<InputWrapper>
					<StyledInput
						type='range'

						value={ minVal }
						onChange={ minRangeChangeHandler }

						min={ min }
						max={ max }
						step={ step || 1 }

						style={ {
							width: 'calc(100% - 5px)',
						} }
					/>

					<StyledInput
						type='range'

						value={ maxVal }
						onChange={ maxRangeChangeHandler }

						min={ min }
						max={ max }
						step={ step || 1 }

						style={ {
							width: 'calc(100% - 5px)',
						} }
					/>
				</InputWrapper>

				<CustomInputWrapper
					style={ {
						width: 'calc(100% - 8px)',
					} }
				>
					<StyledTrack
						style={ { left: `${ minPos }%` } }
					/>

					<StyledThumbFill
						style={{
							left: `calc(${ minPos }% + 2px)`,
							right: `calc(${ 100 - maxPos }% - 4px)`,
						}}
					/>

					<StyledThumb />

					<StyledTrack
						style={ {
							left: `calc(${ maxPos }% + 5px)`,
						} }
					/>
				</CustomInputWrapper>
			</SliderWrapper>

			<TextField
				value={ `${ maxVal }` }
				onChange={ maxTextChangeHandler }

				error={ maxErr }

				before={ before }
				after={ after }

				align='center'
			/>
		</RangeWrapper>
	)
}