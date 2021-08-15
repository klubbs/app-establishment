import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const WelcomeLogoImage: React.FC<SvgProps> = (props: SvgProps) => {

    return (
        <Svg
            width={180}
            height={314}
            viewBox="0 0 834 314"
            fill="none"
            {...props}
        >
            <Path
                d="M96 186.2c2.4 2 3.6 4.467 3.6 7.4 0 2.533-.867 4.733-2.6 6.6s-3.8 2.8-6.2 2.8c-2.533 0-4.8-.933-6.8-2.8l-49.8-44v37c0 3.2-.933 5.667-2.8 7.4-1.867 1.6-4.267 2.4-7.2 2.4s-5.4-.8-7.4-2.4c-1.867-1.733-2.8-4.2-2.8-7.4V69.8c0-3.2.933-5.6 2.8-7.2 2-1.733 4.467-2.6 7.4-2.6 2.933 0 5.333.867 7.2 2.6 1.867 1.6 2.8 4 2.8 7.2v78.4l45.6-42.6c2.267-2 4.467-3 6.6-3 2.533 0 4.733.933 6.6 2.8 1.867 1.867 2.8 4.067 2.8 6.6 0 2.533-1.133 4.867-3.4 7l-35.6 32.6L96 186.2zm31.52 16.8c-2.933 0-5.4-.8-7.4-2.4-1.866-1.6-2.8-4-2.8-7.2V69.8c0-3.2.934-5.6 2.8-7.2 2-1.733 4.467-2.6 7.4-2.6 2.934 0 5.334.867 7.2 2.6 1.867 1.6 2.8 4 2.8 7.2v123.6c0 3.2-.933 5.6-2.8 7.2-1.866 1.6-4.266 2.4-7.2 2.4zm113.838-100.6c3.066 0 5.466.867 7.2 2.6 1.866 1.733 2.8 4.133 2.8 7.2v81.4c0 2.8-.934 5.067-2.8 6.8-1.867 1.733-4.334 2.6-7.4 2.6-2.8 0-5.067-.8-6.8-2.4-1.734-1.733-2.6-4-2.6-6.8v-7.6c-3.067 5.6-7.334 9.867-12.8 12.8-5.334 2.933-11.334 4.4-18 4.4-23.734 0-35.6-13.067-35.6-39.2v-52c0-3.067.866-5.467 2.6-7.2 1.866-1.733 4.4-2.6 7.6-2.6 3.066 0 5.466.867 7.2 2.6 1.866 1.733 2.8 4.133 2.8 7.2V164c0 7.867 1.6 13.667 4.8 17.4 3.2 3.733 8.133 5.6 14.8 5.6 7.866 0 14.133-2.533 18.8-7.6 4.8-5.067 7.2-11.8 7.2-20.2v-47c0-2.933.933-5.267 2.8-7 1.866-1.867 4.333-2.8 7.4-2.8zm90.667-.4c8.533 0 16.067 2.067 22.6 6.2 6.533 4.133 11.6 10 15.2 17.6 3.733 7.6 5.6 16.467 5.6 26.6 0 10-1.867 18.867-5.6 26.6-3.6 7.733-8.733 13.733-15.4 18-6.533 4.267-14 6.4-22.4 6.4-7.333 0-13.8-1.533-19.4-4.6-5.6-3.2-9.867-7.733-12.8-13.6v8c0 2.933-.933 5.333-2.8 7.2-1.733 1.733-4.133 2.6-7.2 2.6s-5.533-.867-7.4-2.6c-1.867-1.867-2.8-4.267-2.8-7.2V69.6c0-2.933.933-5.267 2.8-7 2-1.733 4.533-2.6 7.6-2.6 2.933 0 5.267.867 7 2.6 1.867 1.6 2.8 3.8 2.8 6.6v51.2c2.933-5.867 7.2-10.4 12.8-13.6 5.6-3.2 12.067-4.8 19.4-4.8zm-4.8 85.4c8.667 0 15.4-3.067 20.2-9.2 4.933-6.133 7.4-14.733 7.4-25.8 0-10.933-2.4-19.333-7.2-25.2-4.8-6-11.6-9-20.4-9-8.8 0-15.6 3-20.4 9-4.667 6-7 14.533-7 25.6 0 11.067 2.333 19.6 7 25.6 4.8 6 11.6 9 20.4 9z"
                fill="#fff"
            />
            <Path
                d="M440.189 203.4c-9.6 0-18.067-2.067-25.4-6.2-7.2-4.133-12.8-10-16.8-17.6-3.867-7.733-5.8-16.667-5.8-26.8 0-10.267 1.933-19.2 5.8-26.8 4-7.733 9.6-13.667 16.8-17.8 7.333-4.133 15.8-6.2 25.4-6.2 9.6 0 18 2.067 25.2 6.2 7.333 4.133 12.933 10.067 16.8 17.8 4 7.6 6 16.533 6 26.8 0 10.133-2 19.067-6 26.8-3.867 7.6-9.467 13.467-16.8 17.6-7.2 4.133-15.6 6.2-25.2 6.2zm0-16c8.933 0 15.733-2.933 20.4-8.8 4.8-5.867 7.2-14.467 7.2-25.8 0-11.2-2.4-19.733-7.2-25.6-4.8-6-11.6-9-20.4-9-8.8 0-15.6 3-20.4 9-4.8 5.867-7.2 14.4-7.2 25.6 0 11.333 2.333 19.933 7 25.8 4.8 5.867 11.667 8.8 20.6 8.8zm112.891 16c-9.6 0-18.067-2.067-25.4-6.2-7.2-4.133-12.8-10-16.8-17.6-3.867-7.733-5.8-16.667-5.8-26.8 0-10.267 1.933-19.2 5.8-26.8 4-7.733 9.6-13.667 16.8-17.8 7.333-4.133 15.8-6.2 25.4-6.2 9.6 0 18 2.067 25.2 6.2 7.333 4.133 12.933 10.067 16.8 17.8 4 7.6 6 16.533 6 26.8 0 10.133-2 19.067-6 26.8-3.867 7.6-9.467 13.467-16.8 17.6-7.2 4.133-15.6 6.2-25.2 6.2zm0-16c8.933 0 15.733-2.933 20.4-8.8 4.8-5.867 7.2-14.467 7.2-25.8 0-11.2-2.4-19.733-7.2-25.6-4.8-6-11.6-9-20.4-9-8.8 0-15.6 3-20.4 9-4.8 5.867-7.2 14.4-7.2 25.6 0 11.333 2.333 19.933 7 25.8 4.8 5.867 11.666 8.8 20.6 8.8zm104.49 16c-13.6 0-24.733-2.8-33.4-8.4-2.4-1.467-4.133-3-5.2-4.6-.933-1.6-1.4-3.4-1.4-5.4 0-2.133.6-3.933 1.8-5.4 1.2-1.467 2.734-2.2 4.6-2.2 1.734 0 4.467 1.067 8.2 3.2 4 2.133 7.867 3.867 11.6 5.2 3.867 1.333 8.667 2 14.4 2 6.4 0 11.4-1.133 15-3.4 3.6-2.267 5.4-5.467 5.4-9.6 0-2.667-.733-4.8-2.2-6.4-1.333-1.6-3.733-3-7.2-4.2-3.466-1.333-8.6-2.733-15.4-4.2-11.733-2.533-20.2-5.933-25.4-10.2-5.066-4.4-7.6-10.333-7.6-17.8 0-5.733 1.667-10.867 5-15.4 3.334-4.667 7.934-8.267 13.8-10.8 5.867-2.533 12.534-3.8 20-3.8 5.334 0 10.534.733 15.6 2.2 5.067 1.333 9.534 3.333 13.4 6 4.4 2.933 6.6 6.333 6.6 10.2 0 2.133-.666 3.933-2 5.4-1.2 1.467-2.666 2.2-4.4 2.2-1.2 0-2.4-.267-3.6-.8-1.2-.533-2.8-1.4-4.8-2.6-3.6-2.133-7-3.8-10.2-5-3.066-1.2-6.933-1.8-11.6-1.8-5.6 0-10.133 1.2-13.6 3.6-3.333 2.4-5 5.667-5 9.8 0 3.733 1.534 6.667 4.6 8.8 3.2 2 9.134 3.933 17.8 5.8 8.934 1.867 15.934 4 21 6.4 5.067 2.4 8.667 5.4 10.8 9 2.267 3.467 3.4 7.933 3.4 13.4 0 8.667-3.666 15.667-11 21-7.2 5.2-16.866 7.8-29 7.8z"
                fill="#EF9E31"
            />
            <Path
                d="M62.32 293.3c-.56 0-1.02-.16-1.38-.48-.32-.36-.48-.84-.48-1.44v-38.82c0-.52.18-.96.54-1.32.4-.36.88-.54 1.44-.54h14.04c4.4 0 7.8 1.06 10.2 3.18 2.44 2.12 3.66 5.12 3.66 9 0 3.92-1.22 6.96-3.66 9.12-2.44 2.12-5.84 3.18-10.2 3.18h-12.3v16.2c0 .6-.18 1.08-.54 1.44-.32.32-.76.48-1.32.48zM76.24 272c6.92 0 10.38-3.04 10.38-9.12 0-6-3.46-9-10.38-9H64.18V272h12.06zm32.756-8.82c3.52 0 6.14.92 7.86 2.76 1.76 1.84 2.64 4.62 2.64 8.34v17.1c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1-.16-1.32-.48c-.32-.36-.48-.82-.48-1.38v-3.6c-.84 1.8-2.06 3.2-3.66 4.2-1.6.96-3.44 1.44-5.52 1.44-1.88 0-3.6-.38-5.16-1.14-1.52-.76-2.74-1.8-3.66-3.12-.92-1.32-1.38-2.8-1.38-4.44-.04-2.2.5-3.9 1.62-5.1 1.12-1.24 2.98-2.12 5.58-2.64s6.24-.78 10.92-.78h1.26v-2.22c0-2.64-.54-4.56-1.62-5.76-1.08-1.24-2.78-1.86-5.1-1.86-2.96 0-5.78.78-8.46 2.34-.12.08-.44.3-.96.66-.48.32-.9.48-1.26.48-.4 0-.74-.14-1.02-.42-.24-.32-.36-.7-.36-1.14 0-.88.7-1.74 2.1-2.58 1.4-.8 2.96-1.42 4.68-1.86 1.72-.44 3.42-.66 5.1-.66zm-1.98 27.06c2.6 0 4.72-.88 6.36-2.64 1.68-1.76 2.52-4 2.52-6.72v-1.98h-1.14c-3.84 0-6.78.16-8.82.48-2.04.32-3.48.88-4.32 1.68-.84.76-1.26 1.88-1.26 3.36 0 1.68.64 3.08 1.92 4.2 1.28 1.08 2.86 1.62 4.74 1.62zm35.602-26.94c.76-.04 1.3.06 1.62.3.32.24.48.64.48 1.2 0 1-.6 1.56-1.8 1.68l-1.8.18c-2.84.28-4.96 1.3-6.36 3.06-1.36 1.76-2.04 3.82-2.04 6.18v15.54c0 .6-.16 1.06-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.32-.48-.78-.48-1.38v-26.28c0-.6.16-1.06.48-1.38.36-.32.82-.48 1.38-.48.52 0 .94.16 1.26.48.32.32.48.76.48 1.32v3.9c1.64-3.44 4.68-5.32 9.12-5.64l.84-.06zm17.999-.12c3.52 0 6.14.92 7.86 2.76 1.76 1.84 2.64 4.62 2.64 8.34v17.1c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1-.16-1.32-.48c-.32-.36-.48-.82-.48-1.38v-3.6c-.84 1.8-2.06 3.2-3.66 4.2-1.6.96-3.44 1.44-5.52 1.44-1.88 0-3.6-.38-5.16-1.14-1.52-.76-2.74-1.8-3.66-3.12-.92-1.32-1.38-2.8-1.38-4.44-.04-2.2.5-3.9 1.62-5.1 1.12-1.24 2.98-2.12 5.58-2.64s6.24-.78 10.92-.78h1.26v-2.22c0-2.64-.54-4.56-1.62-5.76-1.08-1.24-2.78-1.86-5.1-1.86-2.96 0-5.78.78-8.46 2.34-.12.08-.44.3-.96.66-.48.32-.9.48-1.26.48-.4 0-.74-.14-1.02-.42-.24-.32-.36-.7-.36-1.14 0-.88.7-1.74 2.1-2.58 1.4-.8 2.96-1.42 4.68-1.86 1.72-.44 3.42-.66 5.1-.66zm-1.98 27.06c2.6 0 4.72-.88 6.36-2.64 1.68-1.76 2.52-4 2.52-6.72v-1.98h-1.14c-3.84 0-6.78.16-8.82.48-2.04.32-3.48.88-4.32 1.68-.84.76-1.26 1.88-1.26 3.36 0 1.68.64 3.08 1.92 4.2 1.28 1.08 2.86 1.62 4.74 1.62zm59.479-3.48c.36 0 .66.16.9.48.28.28.42.62.42 1.02 0 .88-.68 1.74-2.04 2.58-2.88 1.72-5.92 2.58-9.12 2.58-4.44 0-7.94-1.34-10.5-4.02-2.56-2.68-3.84-6.36-3.84-11.04 0-3 .56-5.64 1.68-7.92 1.16-2.32 2.76-4.1 4.8-5.34 2.08-1.28 4.46-1.92 7.14-1.92 3.76 0 6.72 1.22 8.88 3.66 2.2 2.4 3.3 5.72 3.3 9.96 0 .72-.16 1.26-.48 1.62-.32.32-.84.48-1.56.48h-19.98c.12 3.68 1.08 6.48 2.88 8.4 1.8 1.92 4.34 2.88 7.62 2.88 1.72 0 3.16-.22 4.32-.66 1.16-.48 2.4-1.1 3.72-1.86.88-.6 1.5-.9 1.86-.9zm-10.56-20.58c-2.8 0-5.04.88-6.72 2.64-1.68 1.76-2.68 4.22-3 7.38h18.54c-.08-3.2-.88-5.66-2.4-7.38-1.52-1.76-3.66-2.64-6.42-2.64zm29.242 27.24c-1.68 0-3.34-.22-4.98-.66-1.6-.48-3.02-1.12-4.26-1.92-.76-.52-1.3-.96-1.62-1.32-.28-.4-.42-.84-.42-1.32 0-.4.12-.74.36-1.02.28-.28.6-.42.96-.42s.98.3 1.86.9c1.16.76 2.34 1.38 3.54 1.86 1.24.48 2.78.72 4.62.72 2.36 0 4.2-.42 5.52-1.26 1.32-.88 1.98-2.12 1.98-3.72 0-.96-.24-1.74-.72-2.34-.48-.64-1.28-1.18-2.4-1.62-1.12-.48-2.72-.94-4.8-1.38-3.56-.8-6.1-1.82-7.62-3.06-1.48-1.28-2.22-2.98-2.22-5.1 0-2.56 1-4.62 3-6.18 2-1.6 4.6-2.4 7.8-2.4 1.56 0 3.04.2 4.44.6 1.44.4 2.68.98 3.72 1.74 1.4.96 2.1 1.9 2.1 2.82 0 .4-.14.76-.42 1.08-.24.28-.54.42-.9.42-.4 0-1.02-.32-1.86-.96-1.08-.76-2.16-1.36-3.24-1.8-1.04-.48-2.38-.72-4.02-.72-2.08 0-3.74.48-4.98 1.44-1.24.92-1.86 2.18-1.86 3.78 0 .92.2 1.68.6 2.28.44.6 1.16 1.14 2.16 1.62 1.04.44 2.52.88 4.44 1.32 2.76.64 4.88 1.32 6.36 2.04 1.48.72 2.54 1.58 3.18 2.58.64 1 .96 2.28.96 3.84 0 2.44-1.04 4.42-3.12 5.94-2.04 1.48-4.76 2.22-8.16 2.22zm31.6-3.18c1.12.12 1.68.64 1.68 1.56 0 .48-.18.86-.54 1.14-.36.28-.94.4-1.74.36l-1.68-.12c-3.04-.2-5.3-1.12-6.78-2.76-1.44-1.68-2.16-4.22-2.16-7.62v-15.96h-4.56c-.48 0-.86-.12-1.14-.36-.28-.28-.42-.64-.42-1.08 0-.44.14-.8.42-1.08.28-.28.66-.42 1.14-.42h4.56v-7.44c0-.6.16-1.06.48-1.38.32-.32.76-.48 1.32-.48s1 .16 1.32.48c.36.32.54.78.54 1.38v7.44h7.26c.52 0 .92.14 1.2.42.28.28.42.64.42 1.08 0 .44-.14.8-.42 1.08-.28.24-.68.36-1.2.36h-7.26v16.14c0 2.48.48 4.26 1.44 5.34.96 1.04 2.46 1.64 4.499 1.8l1.621.12zm18.488-27.06c3.52 0 6.14.92 7.86 2.76 1.76 1.84 2.64 4.62 2.64 8.34v17.1c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1-.16-1.32-.48c-.32-.36-.48-.82-.48-1.38v-3.6c-.84 1.8-2.06 3.2-3.66 4.2-1.6.96-3.44 1.44-5.52 1.44-1.88 0-3.6-.38-5.16-1.14-1.52-.76-2.74-1.8-3.66-3.12-.92-1.32-1.38-2.8-1.38-4.44-.04-2.2.5-3.9 1.62-5.1 1.12-1.24 2.98-2.12 5.58-2.64s6.24-.78 10.92-.78h1.26v-2.22c0-2.64-.54-4.56-1.62-5.76-1.08-1.24-2.78-1.86-5.1-1.86-2.96 0-5.78.78-8.46 2.34-.12.08-.44.3-.96.66-.48.32-.9.48-1.26.48-.4 0-.74-.14-1.02-.42-.24-.32-.36-.7-.36-1.14 0-.88.7-1.74 2.1-2.58 1.4-.8 2.96-1.42 4.68-1.86 1.72-.44 3.42-.66 5.1-.66zm-1.98 27.06c2.6 0 4.72-.88 6.36-2.64 1.68-1.76 2.52-4 2.52-6.72v-1.98h-1.14c-3.84 0-6.78.16-8.82.48-2.04.32-3.48.88-4.32 1.68-.84.76-1.26 1.88-1.26 3.36 0 1.68.64 3.08 1.92 4.2 1.28 1.08 2.86 1.62 4.74 1.62zm35.722-27.06c2.56 0 4.82.62 6.78 1.86 1.96 1.24 3.48 3 4.56 5.28 1.08 2.24 1.62 4.86 1.62 7.86 0 3.04-.54 5.72-1.62 8.04-1.08 2.28-2.6 4.06-4.56 5.34-1.96 1.24-4.22 1.86-6.78 1.86-2.36 0-4.4-.5-6.12-1.5-1.72-1.04-3.02-2.54-3.9-4.5v3.96c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.36-.48-.82-.48-1.38v-39.12c0-.56.16-1 .48-1.32.36-.36.82-.54 1.38-.54.56 0 1 .18 1.32.54.32.32.48.76.48 1.32v16.92c.88-1.96 2.18-3.44 3.9-4.44 1.72-1.04 3.76-1.56 6.12-1.56zm-.48 27c3.04 0 5.4-1.06 7.08-3.18 1.72-2.12 2.58-5.06 2.58-8.82 0-3.76-.86-6.66-2.58-8.7-1.68-2.08-4.06-3.12-7.14-3.12-3.04 0-5.38 1.04-7.02 3.12-1.64 2.08-2.46 5.02-2.46 8.82 0 3.8.82 6.74 2.46 8.82 1.68 2.04 4.04 3.06 7.08 3.06zm43.515-3.42c.36 0 .66.16.9.48.28.28.42.62.42 1.02 0 .88-.68 1.74-2.04 2.58-2.88 1.72-5.92 2.58-9.12 2.58-4.44 0-7.94-1.34-10.5-4.02-2.56-2.68-3.84-6.36-3.84-11.04 0-3 .56-5.64 1.68-7.92 1.16-2.32 2.76-4.1 4.8-5.34 2.08-1.28 4.46-1.92 7.14-1.92 3.76 0 6.72 1.22 8.88 3.66 2.2 2.4 3.3 5.72 3.3 9.96 0 .72-.16 1.26-.48 1.62-.32.32-.84.48-1.56.48h-19.98c.12 3.68 1.08 6.48 2.88 8.4 1.8 1.92 4.34 2.88 7.62 2.88 1.72 0 3.16-.22 4.32-.66 1.16-.48 2.4-1.1 3.72-1.86.88-.6 1.5-.9 1.86-.9zm-10.56-20.58c-2.8 0-5.04.88-6.72 2.64-1.68 1.76-2.68 4.22-3 7.38h18.54c-.08-3.2-.88-5.66-2.4-7.38-1.52-1.76-3.66-2.64-6.42-2.64zm21.682 27.12c-.56 0-1.02-.16-1.38-.48-.32-.32-.48-.78-.48-1.38v-39.18c0-.6.16-1.06.48-1.38.36-.32.82-.48 1.38-.48.52 0 .94.16 1.26.48.36.32.54.78.54 1.38v39.18c0 .6-.18 1.06-.54 1.38-.32.32-.74.48-1.26.48zm33.761-6.54c.36 0 .66.16.9.48.28.28.42.62.42 1.02 0 .88-.68 1.74-2.04 2.58-2.88 1.72-5.92 2.58-9.12 2.58-4.44 0-7.94-1.34-10.5-4.02-2.56-2.68-3.84-6.36-3.84-11.04 0-3 .56-5.64 1.68-7.92 1.16-2.32 2.76-4.1 4.8-5.34 2.08-1.28 4.46-1.92 7.14-1.92 3.76 0 6.72 1.22 8.88 3.66 2.2 2.4 3.3 5.72 3.3 9.96 0 .72-.16 1.26-.48 1.62-.32.32-.84.48-1.56.48h-19.98c.12 3.68 1.08 6.48 2.88 8.4 1.8 1.92 4.34 2.88 7.62 2.88 1.72 0 3.16-.22 4.32-.66 1.16-.48 2.4-1.1 3.72-1.86.88-.6 1.5-.9 1.86-.9zm-10.56-20.58c-2.8 0-5.04.88-6.72 2.64-1.68 1.76-2.68 4.22-3 7.38h18.54c-.08-3.2-.88-5.66-2.4-7.38-1.52-1.76-3.66-2.64-6.42-2.64zm31.462 27.24c-2.68 0-5.04-.62-7.08-1.86-2.04-1.24-3.62-3-4.74-5.28-1.12-2.28-1.68-4.9-1.68-7.86 0-3 .56-5.64 1.68-7.92 1.16-2.32 2.76-4.12 4.8-5.4 2.08-1.28 4.46-1.92 7.14-1.92 1.52 0 3 .2 4.44.6 1.44.4 2.72 1 3.84 1.8.72.52 1.22 1 1.5 1.44.32.4.48.84.48 1.32 0 .44-.12.8-.36 1.08s-.54.42-.9.42c-.4 0-1.04-.34-1.92-1.02-1.04-.76-2.08-1.36-3.12-1.8-1.04-.44-2.3-.66-3.78-.66-3.12 0-5.56 1.08-7.32 3.24-1.76 2.12-2.64 5.06-2.64 8.82 0 3.72.86 6.62 2.58 8.7 1.76 2.04 4.2 3.06 7.32 3.06 1.52 0 2.78-.22 3.78-.66 1.04-.44 2.16-1.04 3.36-1.8.36-.24.7-.46 1.02-.66.36-.2.64-.3.84-.3.4 0 .72.14.96.42.24.28.36.62.36 1.02 0 .48-.14.9-.42 1.26-.28.36-.82.82-1.62 1.38-1.08.8-2.4 1.44-3.96 1.92-1.52.44-3.04.66-4.56.66zm18.696-.12c-.56 0-1.02-.16-1.38-.48-.32-.32-.48-.78-.48-1.38v-26.28c0-.6.16-1.06.48-1.38.36-.32.82-.48 1.38-.48.56 0 1 .16 1.32.48.32.32.48.78.48 1.38v26.28c0 .6-.16 1.06-.48 1.38-.32.32-.76.48-1.32.48zm0-36.78c-.8 0-1.46-.24-1.98-.72-.48-.48-.72-1.1-.72-1.86 0-.8.24-1.44.72-1.92.52-.48 1.18-.72 1.98-.72s1.44.24 1.92.72c.52.48.78 1.12.78 1.92 0 .76-.26 1.38-.78 1.86-.48.48-1.12.72-1.92.72zm42.881 6.66c6.44 0 9.66 3.76 9.66 11.28v16.98c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.36-.48-.82-.48-1.38V274.7c0-2.92-.52-5.02-1.56-6.3-1.04-1.32-2.7-1.98-4.98-1.98-2.6 0-4.68.88-6.24 2.64-1.52 1.76-2.28 4.12-2.28 7.08v15.3c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.36-.48-.82-.48-1.38V274.7c0-2.92-.52-5.02-1.56-6.3-1.04-1.32-2.7-1.98-4.98-1.98-2.6 0-4.68.88-6.24 2.64-1.52 1.76-2.28 4.12-2.28 7.08v15.3c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.36-.48-.82-.48-1.38v-26.28c0-.6.16-1.06.48-1.38.36-.32.82-.48 1.38-.48.56 0 .98.16 1.26.48.32.32.48.76.48 1.32v3.6c.84-1.8 2.04-3.16 3.6-4.08 1.6-.96 3.44-1.44 5.52-1.44 4.6 0 7.58 1.92 8.94 5.76a9.3 9.3 0 013.84-4.2c1.72-1.04 3.7-1.56 5.94-1.56zm41.447 23.58c.36 0 .66.16.9.48.28.28.42.62.42 1.02 0 .88-.68 1.74-2.04 2.58-2.88 1.72-5.92 2.58-9.12 2.58-4.44 0-7.94-1.34-10.5-4.02-2.56-2.68-3.84-6.36-3.84-11.04 0-3 .56-5.64 1.68-7.92 1.16-2.32 2.76-4.1 4.8-5.34 2.08-1.28 4.46-1.92 7.14-1.92 3.76 0 6.72 1.22 8.88 3.66 2.2 2.4 3.3 5.72 3.3 9.96 0 .72-.16 1.26-.48 1.62-.32.32-.84.48-1.56.48h-19.98c.12 3.68 1.08 6.48 2.88 8.4 1.8 1.92 4.34 2.88 7.62 2.88 1.72 0 3.16-.22 4.32-.66 1.16-.48 2.4-1.1 3.72-1.86.88-.6 1.5-.9 1.86-.9zm-10.56-20.58c-2.8 0-5.04.88-6.72 2.64-1.68 1.76-2.68 4.22-3 7.38h18.54c-.08-3.2-.88-5.66-2.4-7.38-1.52-1.76-3.66-2.64-6.42-2.64zm33.442-3c7 0 10.5 3.76 10.5 11.28v16.98c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.36-.48-.82-.48-1.38V274.7c0-2.88-.58-4.98-1.74-6.3-1.16-1.32-3-1.98-5.52-1.98-2.88 0-5.2.88-6.96 2.64-1.72 1.76-2.58 4.12-2.58 7.08v15.3c0 .56-.16 1.02-.48 1.38-.32.32-.76.48-1.32.48s-1.02-.16-1.38-.48c-.32-.36-.48-.82-.48-1.38v-26.28c0-.56.16-1 .48-1.32.36-.36.82-.54 1.38-.54.52 0 .94.16 1.26.48.32.32.48.76.48 1.32v3.78c.92-1.84 2.24-3.24 3.96-4.2 1.76-1 3.78-1.5 6.06-1.5zm32.672 27.06c1.12.12 1.68.64 1.68 1.56 0 .48-.18.86-.54 1.14-.36.28-.94.4-1.74.36l-1.68-.12c-3.04-.2-5.3-1.12-6.78-2.76-1.44-1.68-2.16-4.22-2.16-7.62v-15.96h-4.56c-.48 0-.86-.12-1.14-.36-.28-.28-.42-.64-.42-1.08 0-.44.14-.8.42-1.08.28-.28.66-.42 1.14-.42h4.56v-7.44c0-.6.16-1.06.48-1.38.32-.32.76-.48 1.32-.48s1 .16 1.32.48c.36.32.54.78.54 1.38v7.44h7.26c.52 0 .92.14 1.2.42.28.28.42.64.42 1.08 0 .44-.14.8-.42 1.08-.28.24-.68.36-1.2.36h-7.26v16.14c0 2.48.48 4.26 1.44 5.34.96 1.04 2.46 1.64 4.5 1.8l1.62.12zm18.549 3.18c-2.68 0-5.04-.62-7.08-1.86-2-1.24-3.56-3-4.68-5.28-1.12-2.28-1.68-4.94-1.68-7.98s.56-5.7 1.68-7.98c1.12-2.28 2.68-4.04 4.68-5.28 2.04-1.24 4.4-1.86 7.08-1.86 2.64 0 4.98.62 7.02 1.86 2.04 1.24 3.6 3 4.68 5.28 1.12 2.28 1.68 4.94 1.68 7.98s-.56 5.7-1.68 7.98c-1.08 2.28-2.64 4.04-4.68 5.28-2.04 1.24-4.38 1.86-7.02 1.86zm-.06-3.24c3.08 0 5.46-1.02 7.14-3.06 1.68-2.04 2.52-4.98 2.52-8.82 0-3.76-.86-6.68-2.58-8.76-1.68-2.12-4.02-3.18-7.02-3.18-3.04 0-5.4 1.06-7.08 3.18-1.68 2.08-2.52 5-2.52 8.76 0 3.84.82 6.78 2.46 8.82 1.64 2.04 4 3.06 7.08 3.06zm30.596 3.24c-1.68 0-3.34-.22-4.98-.66-1.6-.48-3.02-1.12-4.26-1.92-.76-.52-1.3-.96-1.62-1.32-.28-.4-.42-.84-.42-1.32 0-.4.12-.74.36-1.02.28-.28.6-.42.96-.42s.98.3 1.86.9c1.16.76 2.34 1.38 3.54 1.86 1.24.48 2.78.72 4.62.72 2.36 0 4.2-.42 5.52-1.26 1.32-.88 1.98-2.12 1.98-3.72 0-.96-.24-1.74-.72-2.34-.48-.64-1.28-1.18-2.4-1.62-1.12-.48-2.72-.94-4.8-1.38-3.56-.8-6.1-1.82-7.62-3.06-1.48-1.28-2.22-2.98-2.22-5.1 0-2.56 1-4.62 3-6.18 2-1.6 4.6-2.4 7.8-2.4 1.56 0 3.04.2 4.44.6 1.44.4 2.68.98 3.72 1.74 1.4.96 2.1 1.9 2.1 2.82 0 .4-.14.76-.42 1.08-.24.28-.54.42-.9.42-.4 0-1.02-.32-1.86-.96-1.08-.76-2.16-1.36-3.24-1.8-1.04-.48-2.38-.72-4.02-.72-2.08 0-3.74.48-4.98 1.44-1.24.92-1.86 2.18-1.86 3.78 0 .92.2 1.68.6 2.28.44.6 1.16 1.14 2.16 1.62 1.04.44 2.52.88 4.44 1.32 2.76.64 4.88 1.32 6.36 2.04 1.48.72 2.54 1.58 3.18 2.58.64 1 .96 2.28.96 3.84 0 2.44-1.04 4.42-3.12 5.94-2.04 1.48-4.76 2.22-8.16 2.22z"
                fill="#6D6D6D"
            />
            <Path
                d="M834 144.833L825.017 104h-80.034l-8.885 39.947-.098 4.97a16.2 16.2 0 004.083 10.69v30.143a12.25 12.25 0 0012.25 12.25h65.334a12.252 12.252 0 0012.25-12.25v-30.143a16.2 16.2 0 004.083-10.69v-4.084zm-89.833.445l7.35-33.111h13.066V128.5h8.167v-16.333h24.5V128.5h8.167v-16.333h13.066l7.35 33.111v3.639c0 2.166-.86 4.243-2.392 5.774a8.162 8.162 0 01-5.774 2.392h-4.084a8.162 8.162 0 01-5.774-2.392 8.162 8.162 0 01-2.392-5.774h-8.167a8.166 8.166 0 01-8.167 8.166h-8.166a8.166 8.166 0 01-8.167-8.166h-8.167c0 2.166-.86 4.243-2.392 5.774a8.162 8.162 0 01-5.774 2.392h-4.084a8.162 8.162 0 01-5.774-2.392 8.162 8.162 0 01-2.392-5.774v-3.639zm73.5 48.555h-65.334a4.082 4.082 0 01-4.083-4.083v-25.08c1.331.368 2.703.563 4.083.58h4.084a16.236 16.236 0 0012.25-5.643 16.228 16.228 0 0012.25 5.643h8.166a16.293 16.293 0 0012.25-5.541 16.305 16.305 0 0012.25 5.541h4.084a16.063 16.063 0 004.083-.58v25.08a4.08 4.08 0 01-4.083 4.083z"
                fill="#EF9E31"
            />
        </Svg>
    )
}

