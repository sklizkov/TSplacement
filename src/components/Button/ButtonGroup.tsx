import { FC, ReactNode, CSSProperties } from 'react'
import {
	ButtonGroupWrapper,
} from './styles'


interface ButtonGroupProps {
	children: ReactNode
	direction?: 'row' | 'column'
	style?: CSSProperties
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
	children,
	direction,
	style,
}) => {
	return (
		<ButtonGroupWrapper
			$direction={ direction || 'column' }
			style={ style }
		>
			{ children }
		</ButtonGroupWrapper>
	)
}
