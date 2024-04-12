import { FC, useEffect } from 'react'
import { AppWrapper, StyledSection } from './styles'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PanelGroup, Panel } from '@/components/Panel'
import { Viewport } from '@/components/Viewport'
import { Properties } from '@/components/Properties'
import { useAppStore } from '@/stores/appStore'
import { useRendererStore } from '@/stores/rendererStore'


export const App: FC = () => {
	const viewportState = useAppStore(state => state.panels.viewport)
	const propertiesState = useAppStore(state => state.panels.properties)
	const changeMode = useAppStore(state => state.changeMode)
  const changePreview = useAppStore(state => state.changePreview)

	const render = useRendererStore(state => state.render)

	useEffect(() => {
		render()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<AppWrapper>
			<Header />

			<StyledSection>
				<PanelGroup direction="row">
					{ viewportState.active && (
						<Panel>
							<Viewport
								mode={ viewportState.mode }
                preview={ viewportState.preview }
								onChangeMode={ changeMode }
                onChangePreview={ changePreview }
							/>
						</Panel>
					) }

					{ propertiesState.active && (
						<Panel size={ propertiesState.size }>
							<Properties />
						</Panel>
					) }
				</PanelGroup>
			</StyledSection>

			<Footer />
		</AppWrapper>
	)
}
