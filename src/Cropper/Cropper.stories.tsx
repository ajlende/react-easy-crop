import React, { useState } from "react"
import { action } from "@storybook/addon-actions"

import Cropper from "."

import testImg from "../stories/static/test.png"

export default {
	title: "Cropper",
	component: Cropper,
	argTypes: {
		zoom: {
			control: {
				type: "range",
				min: 1,
				max: 3,
				step: 0.1,
			},
		},
		skew: {
			control: {
				type: "range",
				min: -45,
				max: 45,
				step: 1,
			},
		},
		rotation: {
			control: {
				type: "range",
				min: -360,
				max: 360,
				step: 90,
			},
		},
		aspect: {
			control: {
				type: "select",
				options: {
					"4:3": 4 / 3,
					"3:4": 3 / 4,
				},
			},
		},
		crop: { table: { disable: true } },
		cropSize: { table: { disable: true } },
		onCropComplete: { table: { disable: true } },
	},
}

const __defaultArgs = {
	zoom: 1,
	skew: 0,
	rotation: 0,
	aspect: 3 / 4,
	image: testImg,
	flipHorizontal: false,
	flipVertical: false,
}
export const __default = (args: any) => {
	const [crop] = useState({ x: 0, y: 0 })
	const [cropSize] = useState({ width: 1, height: 1 })

	return (
		<Cropper
			{...args}
			crop={crop}
			cropSize={cropSize}
			rotation={args.rotation + args.skew}
			onCropComplete={action("onCropComplete")}
		/>
	)
}
__default.args = __defaultArgs
