import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
	PropertiesWrapper,
	PropContainer,
	ControllBar,
  WidgetsWrapper,
} from './styles'
import { widget } from '@/models/widgets'
import { Icon } from '@/components/Icon'
import { Widgets } from '@/types'
import { useRendererStore } from '@/stores/rendererStore'
import { useAppStore } from '@/stores/appStore'
import { Button, ButtonGroup } from '@/components/Button'
import { Select, Option } from '@/components/Select'
import { Dropdown } from '@/components/Dropdown'
import { Pane } from '@/components/Pane'
import { Label } from '@/components/Label'
import { Range } from '@/components/Range'
import { Widget } from '@/components/Widget'
import presets from '@/models/presets.json'


export const Properties: FC = () => {
	const { t } = useTranslation()

	const { mode } = useAppStore(state => state.panels.viewport)
  const { engine } = useAppStore(state => state.appEnv)

	const widgets = useRendererStore(state => state.widgets)
	const changeWidgetProp = useRendererStore(state => state.changeWidgetProp)
	const applyPreset = useRendererStore(state => state.applyPreset)
	const addWidget = useRendererStore(state => state.addWidget)
	const removeWidget = useRendererStore(state => state.removeWidget)
	const properties = useRendererStore(state => state.properties)
	const changeProperty = useRendererStore(state => state.changeProperty)
	const render = useRendererStore(state => state.render)
	const saveFile = useRendererStore(state => state.saveFile)
	const processing = useRendererStore(state => state.processing)

	return (
		<PropertiesWrapper>
			<Pane
				header={ (
					<>
						<ControllBar>
							<Dropdown
								trigger={ (
									<Button>
										<Icon name='plus' />
										{ t('add') }
									</Button>
								) }
							>
								<ButtonGroup>
									{ Object.keys(widget.widgets).map((key) => {
										return (
											<Button
												key={ key }
												onClick={ () => addWidget(key as Widgets) }
												align='left'
											><Icon name={ key } />{ t('widget.' + key) }</Button>
										)
									}) }
								</ButtonGroup>
							</Dropdown>

							<Dropdown
								style={ {marginLeft: 'auto'} }
								left
								trigger={ (
									<Button>
										{ t('presets') }
									</Button>
								) }
							>
								<ButtonGroup>
									{ Object.keys(presets).map((presetName) => {
										return (
											<Button
												key={ presetName }
												onClick={ () => {
													// @ts-ignore
													applyPreset(presets[presetName])
												} }
												align='left'
											>{ t('preset.' + presetName) }</Button>
										)
									}) }
								</ButtonGroup>
							</Dropdown>
						</ControllBar>
					</>
				) }
				footer={ (
					<>
						<PropContainer>
							<Label
								legend={ t(`widget.props.resolution`) }
							>
								<Select
									value={ `${ properties.resolution }` }
									onChange={ val => changeProperty('resolution', +val) }
								>
									<Option
										value={ `${ 8192 }` }
										disabled={ engine.name === 'WebKit' }
									>8k – 8192x8192</Option>
									<Option value={ `${ 4096 }` }>4k – 4096x4096</Option>
									<Option value={ `${ 2048 }` }>2k – 2048x2048</Option>
									<Option value={ `${ 1024 }` }>1k – 1024x1024</Option>
								</Select>
							</Label>

							<Label
								legend={ t(`widget.props.background`) }
							>
								<Range
									value={ properties.brightness }
									onChange={ val => changeProperty('brightness', +val) }
									min={ 0 }
									max={ 255 }
								/>
							</Label>

							<Label
								legend={ t(`widget.props.iterations`) }
							>
								<Range
									value={ properties.iterations }
									onChange={ val => changeProperty('iterations', +val) }
									min={ 64 }
									max={ 2048 }
									step={ 64 }
								/>
							</Label>
							<ButtonGroup direction='row'>
								<Button
									onClick={ render }
									size='big'
									variant='primary'
									width={ '100%' }
									align='left'
									disabled={ processing }
									style={ {textTransform: 'uppercase'} }
								>{ !processing ? t('generate') : t('processing') }</Button>

								<Button
									onClick={ () => saveFile(mode) }
									size='big'
									variant='success'
									width={ 44 }
									compact
								><Icon name='download' /></Button>
							</ButtonGroup>
						</PropContainer>
					</>
				) }
			>
        <WidgetsWrapper>
          { widgets.map(({ id, type, disabled, ...widgetProps }) => {
            return (
              <Widget
                key={ id }
                id={ id }
                type={ type }
                disabled={ disabled }
                values={ widgetProps }
                settings={ widget.getUiSettings(type!) }
                onChange={ changeWidgetProp }
                onRemove={ removeWidget }
              />
            )
          }) }
        </WidgetsWrapper>
			</Pane>
		</PropertiesWrapper>
	)
}
