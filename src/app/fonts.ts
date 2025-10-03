import { Inter } from "next/font/google";
import localFont from "next/font/local";
export const IRANSans = localFont({
  variable: "--font-IRANSans",
  src: [
    // woff fonts
    {
      path: "./fonts/iransans/woff/IRANSansXFaNum-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff/IRANSansXFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff/IRANSansXFaNum-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff/IRANSansXFaNum-DemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff/IRANSansXFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
    // woff2 fonts
    {
      path: "./fonts/iransans/woff2/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff2/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff2/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff2/IRANSansXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/iransans/woff2/IRANSansXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

// export const Dana = localFont({
//   src: [
//     // woff fonts
//     {
//       path: "./fonts/dana/woff/dana-fanum-demibold.woff",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./fonts/dana/woff/dana-fanum-bold.woff",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/dana/woff/dana-fanum-extrabold.woff",
//       weight: "900",
//       style: "normal",
//     },
//     // woff2 fonts
//     {
//       path: "./fonts/dana/woff2/dana-fanum-demibold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./fonts/dana/woff2/dana-fanum-bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/dana/woff2/dana-fanum-extrabold.woff2",
//       weight: "900",
//       style: "normal",
//     },
//   ]
// });

export const InterFont = Inter({
  weight: ["300", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
