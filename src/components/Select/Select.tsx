import { FC, ReactElement, ChangeEvent } from 'react'
import {
	StyledSelect,
} from './styles'


interface SelectProps {
	children: ReactElement[]
	value: string
	onChange: (val: string) => void
}

export const Select: FC<SelectProps> = ({
	children,
	value,
	onChange,
}) => {
	
	const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const rawVal = e.target.value
		
		onChange(rawVal)
	}

	return (
		<StyledSelect
			onChange={ changeHandler }
			value={ value }
		>
			{ children }
		</StyledSelect>
	)
}
