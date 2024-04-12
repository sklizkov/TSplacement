import { FC } from 'react'
import { Logo } from '@/components/Logo'
import { GHLink } from '@/components/GHLink'
import {
	StyledHeader,
} from './styles'


export const Header: FC = () => {
	return (
		<StyledHeader>
			<Logo />

			<GHLink href={ __REPO__ } />
		</StyledHeader>
	)
}
