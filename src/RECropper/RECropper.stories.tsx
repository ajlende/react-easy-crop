import React, { useState } from "react"
import { action } from "@storybook/addon-actions"

import RECropper from "."

import testImg from "../stories/static/test.png"

export default {
	title: "React Easy Crop",
	component: RECropper,
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
		video: { table: { disable: true } },
		transform: { table: { disable: true } },
		minZoom: { table: { disable: true } },
		maxZoom: { table: { disable: true } },
		cropShape: { table: { disable: true } },
		cropSize: { table: { disable: true } },
		showGrid: { table: { disable: true } },
		zoomSpeed: { table: { disable: true } },
		zoomWithScroll: { table: { disable: true } },
		onCropChange: { table: { disable: true } },
		onZoomChange: { table: { disable: true } },
		onRotationChange: { table: { disable: true } },
		onCropComplete: { table: { disable: true } },
		onInteractionStart: { table: { disable: true } },
		onInteractionEnd: { table: { disable: true } },
		onMediaLoaded: { table: { disable: true } },
		style: { table: { disable: true } },
		classes: { table: { disable: true } },
		restrictPosition: { table: { disable: true } },
		initialCroppedAreaPixels: { table: { disable: true } },
		mediaProps: { table: { disable: true } },
		disableAutomaticStylesInjection: { table: { disable: true } },
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
	const [crop, setCrop] = useState({ x: 0, y: 0 })

	return (
		<RECropper
			{...args}
			crop={crop}
			rotation={args.rotation + args.skew}
			onCropChange={setCrop}
			onZoomChange={() => {}}
			onRotationChange={action("onRotationChange")}
			onCropComplete={action("onCropComplete")}
			onInteractionStart={action("onInteractionStart")}
			onInteractionEnd={action("onInteractionEnd")}
			onMediaLoaded={action("onMediaLoaded")}
		/>
	)
}
__default.args = __defaultArgs
