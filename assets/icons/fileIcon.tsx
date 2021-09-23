import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export function FileIcon(props: SvgProps) {
	return (
		<Svg
			data-name="Layer 1"
			viewBox="0 0 24 24"
			{...props}
		>
			<Path d="M14.414 0H5a3 3 0 00-3 3v21h20V7.586zM15 3.414L18.586 7H15zM4 22V3a1 1 0 011-1h8v7h7v13zm11.293-8.878l1.414 1.414-3.586 3.585a3 3 0 01-4.243 0l-1.585-1.585 1.414-1.414 1.586 1.585a1.023 1.023 0 001.414 0z" />
		</Svg>
	)
}
