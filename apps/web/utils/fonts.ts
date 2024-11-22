import localFont from "next/font/local";

export const interTightVariableFont = localFont({
	src: "../public/fonts/InterTight-VariableFont_wght.ttf", // localFont looks for the physical file paths relative to where it's imported, so can't use absolute imports!
	variable: "--font-inter-tight",
	display: "swap",
});

/**
 * This is for static fonts, it will be used when the user's browser doesn't support variable font.
 */
// export const interTightStaticFonts = localFont({
//   src: [
//     {
//       path: '../public/fonts/InterTight-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/InterTight-Bold.woff2',
//       weight: '700',
//       style: 'bold',
//     },
//   ],
// });
