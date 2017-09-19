# react-next-image-zoom
React/Next.js Example: Image Zoom with Vanilla JavaScript

This library demonstrates how to create a light-weight image zoom for an eccommerce site using plain javascript (no libraries!) and React.
I'm using the [Next.js](https://github.com/zeit/next.js/) framework for server-side rendering, but this example should also work for normal React.
The CSS is being handled by Styled-JSX, which comes with Next, but can be easily ported to other CSS preprocessors.

Uses two images: a smaller preview, and a higher resolution original. The smaller image is all that loads with the page, and the larger, higher detail image is loaded lazily when the zoom is used.

To start: ```npm run dev``` then navigate to localhost:3000 in your browser.