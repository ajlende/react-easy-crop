import React, { useRef, useLayoutEffect, useState } from "react"

import "./Cropper.css"

type Scale = number

type Rotation = number

type Aspect = number

interface Size {
	width: number
	height: number
}

interface Point {
	x: number
	y: number
}

interface CropperProps {
	image: string
	crop: Point
	offset: Point
	cropSize: Size
	zoom: Scale
	rotation: Rotation
	aspect: Aspect
	onCropComplete: (...rest: any[]) => any
}

interface ComputeSizesArgs {
	container: HTMLElement
	media: HTMLElement
	rotation: Rotation
	aspect: Aspect
}

function computeSizes({ container, media }: ComputeSizesArgs): [Size, Scale] {
	const containerRect = container.getBoundingClientRect()
	const mediaRect = media.getBoundingClientRect()

	const size = {
		width: mediaRect.width,
		height: mediaRect.height,
	}
	const scale = 1
	return [size, scale]
}

function Cropper({ image, rotation, zoom, aspect, offset }: CropperProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const mediaRef = useRef<HTMLImageElement>(null)
	const [cropSize, setCropSize] = useState({ width: 0, height: 0 })
	const [scaleFix, setScaleFix] = useState(1)

	// Handle
	useLayoutEffect(() => {
		if (containerRef.current && mediaRef.current) {
			const resizeListener = () => {
				const [newCropSize, newScaleFix] = computeSizes({
					container: containerRef.current as HTMLElement,
					media: mediaRef.current as HTMLElement,
					rotation,
					aspect,
				})
				setCropSize(newCropSize)
				setScaleFix(newScaleFix)
			}
			window.addEventListener("resize", resizeListener)
			return () => {
				window.removeEventListener("resize", resizeListener)
			}
		}
	}, [rotation, aspect])

	const onMediaLoaded = () => {
		const [newCropSize, newScaleFix] = computeSizes({
			container: containerRef.current as HTMLElement,
			media: mediaRef.current as HTMLElement,
			rotation,
			aspect,
		})
		setCropSize(newCropSize)
		setScaleFix(newScaleFix)
	}

	const transform = [
		`translate(${offset.x}px ${offset.y}px)`,
		`rotate(${rotation}deg)`,
		`scale(${zoom * scaleFix})`,
	].join(" ")

	return (
		<>
			<div className="reactEasyCrop_Container" ref={containerRef}>
				{image && (
					<img
						alt=""
						src={image}
						className="reactEasyCrop_Image"
						style={{ transform }}
						ref={mediaRef}
						onLoad={onMediaLoaded}
					/>
				)}
				{cropSize.width > 0 && cropSize.height > 0 && (
					<div
						className="reactEasyCrop_CropArea reactEasyCrop_CropAreaGrid"
						style={{
							width: `${cropSize.width}px`,
							height: `${cropSize.height}px`,
						}}
					/>
				)}
			</div>
		</>
	)
}

export default Cropper
