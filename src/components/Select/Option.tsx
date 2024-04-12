import { FC } from 'react'


interface OptionProps {
	children: string
	value?: string
	disabled?: boolean
}

export const Option: FC<OptionProps> = ({
	children,
	value,
	disabled,
}) => {

	return (
		<option
			value={ value }
			disabled={ disabled }
		>{ children }</option>
	)
}
