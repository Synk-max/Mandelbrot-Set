Mandelbrot Set Zoom

A web page that draws the Mandelbrot set, a shape with infinite detail as you zoom deeper. Click the picture to zoom in, or choose a random spot to begin with. The more you zoom, the more detail appears.

Live demo:https://synk-max.github.io/Mandelbrot-Set

How to run it:
The easiest option is to open the live demo link above

On a computer:
Download this repo (the green Code button, then Download ZIP) and unzip it.
Open index.html in a web browser (double-click it).
Wait a second or two for the picture to draw.

It needs an internet connection, because the p5.js library loads from a CDN (a website that hosts code).

Tip: Beware of the lag that follows through the zoom. click along the colored edge of the shape. Zooming into the solid black middle only shows more black.


Limits
Regular 64-bit numbers have about 16 digits. Past roughly 10^14 times zoom, the picture turns blocky.
Deep views take a few seconds to draw, because the math runs on the CPU.

Deepest zoom I reached: YOUR-NUMBER times.

Files
index.html: the page
main.js: the program (drawing, zoom, buttons)
screenshot.png: a deep zoom

Built with
JavaScript and p5.js 2.3.0.
