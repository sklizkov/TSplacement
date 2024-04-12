import { FC } from 'react'
import GHMark from '@/assets/img/github-mark.svg?react'
import {
	StyledGHLink,
} from './styles'


interface GHLinkProps {
	href?: string
}

export const GHLink: FC<GHLinkProps> = ({
	href,
}) => {
	return (
		<StyledGHLink
			target='_blank'
			href={ href || '#' }
      title='Source on GitHub'
		>
			<GHMark />
		</StyledGHLink>
	)
}
