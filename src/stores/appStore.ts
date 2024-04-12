import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Modes } from '@/types'
import { parser } from '@/svcs/browser'
import { IBrowser, IEngine, IOS } from 'ua-parser-js'


type State = {
	appEnv: {
		browser: IBrowser
		engine: IEngine
		os: IOS
	}

	panels: {
		viewport: {
			active: boolean
			mode: Modes
      preview: boolean
		}

		properties: {
			active: boolean
			size: number | string
		}
	}
}

type Action = {
	togglePanel: (key: keyof State['panels']) => void
	changeMode: (key: Modes) => void
  changePreview: (val: boolean) => void
}

export const useAppStore = create<State & Action>()(immer((set) => {
	const { browser, engine, os } = parser.getResult()

	return {
		appEnv: { browser, engine, os },

		panels: {
			viewport: {
				active: true,
				mode: Modes.height,
        preview: false,
			},
			properties: {
				active: true,
				size: 340,
			}
		},

		togglePanel: (key) => set((state) => {
			state.panels[key].active = !state.panels[key].active
		}),

		changeMode: (key) => set((state) => {
			state.panels.viewport.mode = key
		}),

    changePreview: (val) => set((state) => {
      state.panels.viewport.preview = val
    }),

		// ...
	}
}))
