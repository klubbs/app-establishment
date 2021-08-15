import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const QrIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <G data-name="01 align center">
                <Path d="M21 24h-5v-2h5a1 1 0 001-1v-5h2v5a3 3 0 01-3 3zM2 8H0V3a3 3 0 013-3h5v2H3a1 1 0 00-1 1zM8 24H3a3 3 0 01-3-3v-5h2v5a1 1 0 001 1h5zM24 8h-2V3a1 1 0 00-1-1h-5V0h5a3 3 0 013 3z" />
            </G>
        </Svg>
    )
}

