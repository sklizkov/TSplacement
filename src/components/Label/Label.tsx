import { FC, ReactElement } from 'react'
import {
	LabelWrapper,
	StyledLabel,
} from './styles'


interface LabelProps {
	children: ReactElement
	legend: string
}

export const Label: FC<LabelProps> = ({
	children,
	legend,
}) => {

	return (
		<LabelWrapper>
			<StyledLabel>{ legend }</StyledLabel>

			{ children }
		</LabelWrapper>
	)
}