import localFont from "next/font/local";

 export const Geist = localFont({
    display: 'swap',
    variable: '--font-Geist',
    src: [
        {
            path: "../../public/fonts/Geist/static/Geist-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Geist/static/Geist-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Geist/static/Geist-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/Geist/static/Geist-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Geist/static/Geist-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/Geist/static/Geist-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ]
})


 export const Vazirmatn = localFont({
    display: 'swap',
    variable: '--font-Vazirmatn',
    src: [
        {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-Thin.woff2",
            weight: "200",
            style: "normal",
        },
         {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/vazirmatn/fonts/webfonts/Vazirmatn-Black.woff2",
            weight: "900",
            style: "normal",
        },
    ]
})


export const FONTS = ` ${Geist.variable   }, ${Vazirmatn.variable} `
                    