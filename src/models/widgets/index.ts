import {
	Widgets,
	WidgetProps,
	IRects,
	ILines,
	IArray,
	IMatrix,
} from '@/types'
import { RectsWidget} from './RectsWidget'
import { LinesWidget } from './LinesWidget'
import { ArrayWidget } from './ArrayWidget'
import { MatrixWidget } from './MatrixWidget'


type TWidgets = { [key in Widgets]?: (RectsWidget | LinesWidget | ArrayWidget | MatrixWidget) }

class Widget {
	widgets: TWidgets = {}

	constructor(obj: TWidgets) {
		this.widgets = obj
	}

	getInitialProps(key: Widgets, opt: WidgetProps = {}) {
		return this.widgets[key]?.getInitialProps(opt)
	}

	getUiSettings(key: Widgets) {
		return this.widgets[key]?.getUiSettings()
	}

}

export const widget = new Widget({
	[Widgets.Rects]: new RectsWidget(),
	[Widgets.Lines]: new LinesWidget(),
	[Widgets.Array]: new ArrayWidget(),
	[Widgets.Matrix]: new MatrixWidget(),
	// ...
})

export const renderWidget = (key: Widgets, ctx: CanvasRenderingContext2D, payload: WidgetProps) => {
	switch(key) {
		case Widgets.Rects:
			return RectsWidget.render(ctx, payload as IRects)
		case Widgets.Lines:
			return LinesWidget.render(ctx, payload as ILines)
		case Widgets.Array:
			return ArrayWidget.render(ctx, payload as IArray)
		case Widgets.Matrix:
			return MatrixWidget.render(ctx, payload as IMatrix)
		// ...
		default:
			//
	}
}