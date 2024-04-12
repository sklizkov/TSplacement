import { FC } from 'react'
import {
	StyledFooter,
	StyledAppInfo,
} from './styles'
import { useAppStore } from '@/stores/appStore'


export const Footer: FC = () => {
	const { browser, engine, os } = useAppStore(state => state.appEnv)

	return (
		<StyledFooter>
			<StyledAppInfo>
        <a href="https://github.com/sklizkov/TSplacement/blob/main/README.md#privacy" target='_blank'>Privacy</a>
      </StyledAppInfo>

			<StyledAppInfo>
        { [
          os.name + ' v' + os.version,
          browser.name + ' v' + browser.version,
          engine.name + ' v' + engine.version,
          'App v' + __VERSION__,
        ].join(' | ') }
			</StyledAppInfo>
		</StyledFooter>
	)
}
