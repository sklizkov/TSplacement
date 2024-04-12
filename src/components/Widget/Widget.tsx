// @ts-nocheck
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
	WidgetWrapper,
	WidgetHeader,
	WidgetContainer,
} from './styles'
import { WidgetProps } from '@/types'
import { Action } from '@/stores/rendererStore'
import { Icon } from '@/components/Icon'
import { Button, ButtonGroup } from '@/components/Button'
import { Label } from '@/components/Label'
import { Range, Range2 } from '@/components/Range'


interface WidgetComponentProps {
	id: WidgetProps['id']
	type: WidgetProps['type']
	disabled: WidgetProps['disabled']
	values: WidgetProps
	settings: unknown
	onChange: Action['changeWidgetProp']
	onRemove: Action['removeWidget']
}

export const Widget: FC<WidgetComponentProps> = ({
	id,
	type,
	disabled,
	values,
	settings,
	onChange,
	onRemove,
}) => {
	const { t } = useTranslation()

	const checkboxesHandler = (key, list, item) => {
		const newValue = list
		newValue[item] = !newValue[item]
		
		onChange(id, key, newValue)
	}

	return (
		<WidgetWrapper>
			<WidgetHeader>
				<Button
					onClick={ () => onChange(id, 'disabled', !disabled) }
					style={ { marginRight: 'auto', opacity: (disabled ? .5 : 1) } }
					variant='link'
					compact
				>
					<Icon name={ `${ type }` } />
					{ t(`widget.${ type }`) }
				</Button>

				<Button
					onClick={ () => onRemove(id) }
					compact
				>
					<Icon name={ 'trash' } />
				</Button>
			</WidgetHeader>

			{ !disabled && (
				<WidgetContainer>
					{ Object.keys(settings).map((key) => {
						return (
							<Label
								key={ key }
								legend={ t(`widget.props.${ key }`) }
							>
								<>
									{ (settings[key].type === 'range' && typeof values[key] === 'number') && (
										<Range
											value={ values[key] }
											onChange={ (val) => onChange(id, key, val) }
											{ ...settings[key] }
										/>
									) }

									{ (settings[key].type === 'range' && typeof values[key] === 'object') && (
										<Range2
											value={ values[key] }
											onChange={ (val) => onChange(id, key, val) }
											{ ...settings[key] }
										/>
									) }
									
									{ (settings[key].type === 'checkboxes') && (
										<ButtonGroup direction='row' style={ {width: '100%'} }>
											{ settings[key].items.map(item => {
												return (
													<Button
														key={ item }
														onClick={ () => checkboxesHandler(key, { ...values[key] }, item) }
														active={ values[key][item] }
														compact
														style={ {flex: 1} }
													><Icon name={ item } /></Button>
												)
											}) }
										</ButtonGroup>
									) }
								</>
							</Label>
						)
					}) }
				</WidgetContainer>
			) }
		</WidgetWrapper>
	)
}