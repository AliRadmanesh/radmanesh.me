import localFont from "next/font/local";

export const openSansVariableFont = localFont({
	src: "../public/fonts/OpenSans-VariableFont_wdth,wght.ttf", // localFont looks for the physical file paths relative to where it's imported, so can't use absolute imports!
	variable: "--font-open-sans",
	display: "swap",
});

/**
 * This is for static fonts, it will be used when the user's browser doesn't support variable font.
 */
// export const openSansStaticFonts = localFont({
//   src: [
//     {
//       path: '../public/fonts/OpenSans-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/OpenSans-Bold.woff2',
//       weight: '700',
//       style: 'bold',
//     },
//   ],
// });
