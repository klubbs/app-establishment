import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const AlignLeftIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <G data-name="01 align center">
                <Path d="M0 4h24v2H0zM0 9h16v2H0zM0 19h16v2H0zM0 14h24v2H0z" />
            </G>
        </Svg>
    )
}

