import { createGlobalStyle } from "styled-components";

import InterWoff from "../fonts/inter-v12-latin-regular.woff";
import InterWoff2 from "../fonts/inter-v12-latin-regular.woff2";

const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #27AE60;
  --color-primary-light: #93D7AF ;
  --color-secondary: #EB5757;
  --color-gray-100: #333333;
  --color-gray-50: #828282;
	--color-gray-20: #E0E0E0;
	--color-gray-0: #F5F5F5;
	--color-negative: #E60000;
	--color-warning: #FFCD07;
	--color-success: #168821;
	--color-information: #155BCB;
	--color-white: #fff;
}

@font-face {
font-family: 'Inter';
  src: url(${InterWoff}) format('woff'),
       url(${InterWoff2}) format('woff2');
}

body {
	height: 100vh;
	width: 100vw;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	box-sizing: border-box;
  font-family: 'Inter', sans-serif ;
  font-size: 1rem;

}

button {
	cursor: pointer;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;

}
ul,ol {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

export default GlobalStyle;
