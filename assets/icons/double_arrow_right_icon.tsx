import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export const DoubleArrowRightIcon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props}>
            <G data-name="01 align center">
                <Path d="M19.1 10.586l-5.289-5.293L12.4 6.707 17.689 12 12.4 17.293l1.415 1.414 5.285-5.293a2 2 0 000-2.828z" />
                <Path d="M12.811 11.293l-6-6L5.4 6.707 10.689 12 5.4 17.293l1.415 1.414 6-6a1 1 0 00-.004-1.414z" />
            </G>
        </Svg>
    )
}
