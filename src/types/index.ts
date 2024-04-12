export interface range {
	0: number
	1: number
	length: 2
}


export enum Modes {
	height = 'height',
	normal = 'normal',
	color = 'color',
}

export enum WidgetValueTypes {
	number = 'number',
	range = 'range',
	checkboxes = 'checkboxes'
}

export interface IColor {
	id?: string
	code: string
	stop: number
}


export enum Widgets {
	Rects = 'rects',
	Lines = 'lines',
	Array = 'array',
	Matrix = 'matrix',
}

interface IWidget {
	id: string
	type: Widgets
	disabled: boolean
}

export interface IRects extends IWidget {
	brightness: range
	alpha: range
	scale: range
}

export interface ILines extends IWidget {
	brightness: range
	lineWidth: number
}

export interface IArray extends IWidget {
	brightness: range
	scale: range
	spacing: range
	amount: range
}

interface shapes {
	square: boolean
	strokeSquare: boolean
	circle: boolean
	strokeCircle: boolean
	rhombus: boolean
	strokeRhombus: boolean
}

export interface IMatrix extends IWidget {
	shapes: shapes
	brightness: range
	scale: range
	spacing: range
	amount: range
	chance: number
}

export type WidgetProps = Partial<IRects> & Partial<ILines> & Partial<IArray> & Partial<IMatrix>
