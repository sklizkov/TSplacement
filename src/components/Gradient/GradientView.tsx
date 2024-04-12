import { FC, ComponentProps } from 'react'

import {
	StyledGradientView,
} from './styles'


interface GradientViewProps {
	width?: number | string
	height?: number | string
}

export const GradientView: FC<GradientViewProps & ComponentProps<'div'>> = ({
	width,
	height,
	...props
}) => {

	return (
		<StyledGradientView
			$width={ width || '100%' }
			$height={ height || '100%' }
			{ ...props }
		/>
	)
}
