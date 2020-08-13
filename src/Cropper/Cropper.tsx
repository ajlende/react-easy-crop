import React, { useRef } from "react"

import "./Cropper.css"

interface CropperProps {
	image: string
	crop: { x: number; y: number }
	cropSize: { width: number; height: number }
	zoom: number
	rotation: number
	aspect: number
	onCropComplete: (...rest: any[]) => any
}

function Cropper(props: CropperProps) {
	const { image } = props
	const transform = "translate(0px) rotate(0deg) scale(1)"
	const containerRef = useRef(null)
	const width = "287.25px"
	const height = "383px"
	return (
		<>
			<div className="reactEasyCrop_Container" ref={containerRef}>
				<img
					alt=""
					src={image}
					className="reactEasyCrop_Image"
					style={{ transform }}
				/>
				<div
					className="reactEasyCrop_CropArea reactEasyCrop_CropAreaGrid"
					style={{ width, height }}
				/>
			</div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</>
	)
}

export default Cropper
