import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pane } from '@/components/Pane'
import { Button, ButtonGroup } from '@/components/Button'
import { ColorInput } from '@/components/ColorInput'
import { TextField } from '@/components/TextField'
import { Gradient, GradientView } from '@/components/Gradient'
import { IColor } from '@/types'
import {
	GradientPickerWrapper,
	GradientHeader,
	ControlLine,
	GradientLine,
} from './styles'
import PlusIcon from '@/assets/icons/plus.svg?react'
import MinusIcon from '@/assets/icons/minus.svg?react'
import { useRendererStore } from '@/stores/rendererStore'
import presets from '@/models/gradients.json'


export const GradientPicker: FC = () => {
	const { t } = useTranslation()
	const gradient = useRendererStore(state => state.colorizer.gradient)
	const changeColor = useRendererStore(state => state.changeColor)
	const addColor = useRendererStore(state => state.addColor)
	const removeColor = useRendererStore(state => state.removeColor)
	const colorize = useRendererStore(state => state.colorize)
	const setGradient = useRendererStore(state => state.setGradient)

	const [active, setActive] = useState(0)
	const [showPresets, setShowPresets] = useState(false)

	const changeActiveHandler = (id: IColor['id']) => {
		const ind = gradient.findIndex(g => g.id === id)
		setActive(ind)
	}

	const colorChangeHandler = (val: IColor['code']) => {
		if (!val) return

		const id = gradient[active].id

		changeColor(id, 'code', val)
	}

	const stopChangeHandler = (val: IColor['stop']) => {
		if (!val) return

		const id = gradient[active].id
		const next = Math.min(Math.max(0, val), 100) / 100

		changeColor(id, 'stop', next)
	}
	
	const addHandler = () => {
		if (gradient.length > 11) return

		const activeStop = gradient[active].stop
		if (activeStop === undefined) return
		
		if (activeStop < .9) {
			addColor(activeStop + .1)
		} else {
			addColor(activeStop - .1)
		}
	}
	
	const deleteHandler = () => {
		if (gradient.length < 3) return 

		const activeId = gradient[active].id

		if (active < 1) {
			setActive(active + 1)
		} else {
			setActive(active - 1)
		}
		
		removeColor(activeId)
	}

	return (
		<GradientPickerWrapper>
			<Pane
				header={ (
					<GradientHeader>
						<ButtonGroup direction='row' >
							<Button
								size='small'
								compact
								onClick={ deleteHandler }
								disabled={ gradient.length < 3 }
								style={ {flex: 'none'} }
							><MinusIcon /></Button>
							<Button
								size='small'
								compact
								onClick={ addHandler }
								disabled={ gradient.length > 11 }
								style={ {flex: 'none'} }
							><PlusIcon /></Button>
							
							<Button
								size='small'
								// compact
								style={ {marginLeft: 'auto', flex: 'none'} }
								onClick={ () => setShowPresets(!showPresets) }
							>{ t('presets') }</Button>
						</ButtonGroup>
						
						<GradientLine>
							<GradientView
								height={ 8 }
								style={ {background: 'linear-gradient(to right, black, white)'} }
							/>
							
							<Gradient
								colors={ gradient }
								active={ gradient[active].id }
								onChange={ (id: IColor['id'], val: IColor['stop']) => changeColor(id, 'stop', val) }
								onActive={ changeActiveHandler }
							/>
						</GradientLine>
						
						<ControlLine>
							<ColorInput
								value={ gradient[active].code }
								onChange={ (val) => colorChangeHandler(val as string) }
								style={ {width: 112} }
							/>
							
							<TextField
								value={ `${ +gradient[active].stop! * 100 }` }
								onChange={ (val) => stopChangeHandler(Number.parseInt(val as string)) }
								after={ '%' }
								align='right'
								style={ {width: 56, marginLeft: 'auto'} }
							/>
						</ControlLine>
					</GradientHeader>
				) }
				
				footer={ (
					<ButtonGroup
						direction='row'
						style={ {width: 'fit-content', margin: '0 0 0 auto', padding: 4} }
					>
						<Button
							// transparent
							variant='primary'
							onClick={ colorize }
						>{ t('colorize') }</Button>
					</ButtonGroup>
				) }
				style={ {height: showPresets ? 320 : 'auto'} }
			>
				{ showPresets && <ButtonGroup
					style={ {padding: 4} }
				>
					{ presets.map((gradient, i) => {
						const cssProps: string[] = [ ...gradient ]
							.sort((a: IColor, b: IColor) => a.stop! - b.stop!)
							.map((color: IColor) => {
								return ` #${ color.code! } ${ Number.parseInt(`${ color.stop! * 100 }`) }%`
							})
						return (
							<Button
								key={ i }
								compact
								style={ { width: '100%', padding: 4 } }
								onClick={ () => setGradient(gradient) }
							>
								<GradientView
									height={ 22 }
									style={ {background: `linear-gradient(to right,${ cssProps.join(',') })`} }
								/>
							</Button>
						)
					}) }
				</ButtonGroup> }
			</Pane>
		</GradientPickerWrapper>
	)
}
