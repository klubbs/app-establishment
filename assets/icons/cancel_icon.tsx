import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const CancelIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <Path
                d="M18.707 6.707l-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12l-5.293 5.293 1.414 1.414L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293z"
                data-name="01 align center"
            />
        </Svg>
    )
}

