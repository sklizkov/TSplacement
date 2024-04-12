import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Renderer } from '@/models/Renderer'
import { Colorizer } from '@/models/Colorizer'
import { widget } from '@/models/widgets'
import { Widgets, IColor, Modes, WidgetProps } from '@/types'


export type State = {
	renderer: Renderer
	processing: boolean

	properties: {
		resolution: number,
		iterations: number
		brightness: number
	}

	widgets: WidgetProps[]

	colorizer: {
		gradient: IColor[]
	}
}

export type Action = {
	changeProperty: (key: keyof State['properties'], value: number) => void
	render: () => void
	saveFile: (map: Modes) => void

	addWidget: (widgetType: Widgets) => void
	removeWidget: (id: WidgetProps['id']) => void
	changeWidgetProp: <T extends keyof WidgetProps>(id: WidgetProps['id'], key: T, value: WidgetProps[T]) => void
	applyPreset: (opt: {
		properties: { iterations: number, brightness: number },
		widgets: WidgetProps[]
	}) => void

	addColor: (stop: IColor['stop']) => void
	removeColor: (id: IColor['id']) => void
	changeColor: <T extends keyof IColor>(id: IColor['id'], key: T, value: IColor[T]) => void

	setGradient: (gradient: IColor[]) => void

	colorize: () => void
}

// @ts-ignore
export const useRendererStore = create<State & Action>()(immer((set, get) => {
  // ...
	return {
		renderer: new Renderer(4096),
		processing: false,

		properties: {
			resolution: 4096,
			iterations: 1024,
			brightness: 64,
		},

		widgets: [
			widget.getInitialProps(Widgets.Rects),
			widget.getInitialProps(Widgets.Rects, { alpha: [60, 90] }),
			widget.getInitialProps(Widgets.Lines),
			widget.getInitialProps(Widgets.Array),
			widget.getInitialProps(Widgets.Matrix),
		],

		colorizer: {
			gradient: [ ...Colorizer.getInitialGradient() ],
		},

		changeProperty: (key, value) => set((state) => {
			state.properties[key] = value
		}),

		render: async () => {
			set((state) => { state.processing = true })
			await get().renderer.renderHeight(get().properties, get().widgets)
			await get().renderer.renderNormal()
			await get().renderer.renderColor(get().colorizer.gradient)
			set((state) => { state.processing = false })
		},

		saveFile: (map) => set((state) => {
			state.renderer.saveFile(map)
		}),

		addWidget: (widgetType) => set((state) => {
			state.widgets.push(widget.getInitialProps(widgetType)!)
		}),

		removeWidget: (id) => set((state) => {
			const ind = state.widgets.findIndex(w => w.id === id)
			if (ind !== -1) state.widgets.splice(ind, 1)
		}),

		changeWidgetProp: (id, key, value) => set((state) => {
			const ind = state.widgets.findIndex(w => w.id === id)
			if (ind !== -1) state.widgets[ind][key] = value
		}),

		applyPreset: (opt) => set((state) => {
			state.widgets.length = 0

			state.properties.iterations = opt.properties.iterations
			state.properties.brightness = opt.properties.brightness

			opt.widgets.forEach(({ type, ...props }) => {
				state.widgets.push(widget.getInitialProps(type!, props)!)
			})
		}),

		addColor: (stop) => set((state) => {
			state.colorizer.gradient.push(Colorizer.getColor({
				stop: stop,
			}))
		}),

		removeColor: (id) => set((state) => {
			const ind = state.colorizer.gradient.findIndex(c => c.id === id)
			if (ind !== -1) state.colorizer.gradient.splice(ind, 1)
		}),

		changeColor: (id, key, value) => set((state) => {
			const ind = state.colorizer.gradient.findIndex(c => c.id === id)
			if (ind !== -1) state.colorizer.gradient[ind][key] = value
		}),

		setGradient:(gradient) => set((state) => {
			state.colorizer.gradient = [ ...gradient.map((color: IColor) => Colorizer.getColor(color)) ]
		}),

		colorize: async () => {
			set((state) => { state.processing = true })
			await get().renderer.renderColor(get().colorizer.gradient)
			set((state) => { state.processing = false })
		},
		// ...
	}
}))
