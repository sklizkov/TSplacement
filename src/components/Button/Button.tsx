import { FC, ReactNode, CSSProperties } from 'react'
import {
	StyledButton,
} from './styles'


interface ButtonProps {
	children: ReactNode
	onClick?: () => void
	style?: CSSProperties
	size?: 'big' | 'medium' | 'small'
	variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'link'
	transparent?: boolean
	align?: 'left' | 'center' | 'right'
	compact?: boolean
	width?: number | string
	disabled?: boolean
	active?: boolean
}

export const Button: FC<ButtonProps> = ({
	children,
	onClick,
	style,
	size,
	variant,
	transparent,
	align,
	compact,
	width,
	disabled,
	active,
}) => {
	return (
		<StyledButton
			onClick={ onClick }
			style={ style }
			disabled={ disabled }
			
			$size={ size || 'medium' }
			$align={ align || 'center' }
			$compact={ !!compact }
			$variant={ variant || 'secondary' }
			$width={ width || 'auto' }
			$transparent={ !!transparent }
			$disabled={ !!disabled }
			$active={ !!active }
		>
			{ children }
		</StyledButton>
	)
}
