Deep zoom of the Mandelbrot set
A web page that draws the Mandelbrot set, a shape with infinite detail. Click the picture to zoom in. The more you zoom, the more detail appears. I made it for the Fractal card.


How to run it:
Easiest: open the live demo link above.

On your computer:
Download this repo (green Code button, then Download ZIP) and unzip it.
Open index.html in a web browser (double-click it).
Wait a second or two for the picture to draw.

It needs an internet connection, because the p5.js library loads from a CDN (a website that hosts code).


How to use it:
Click the picture: zooms in 2 times. The spot you clicked moves to the middle.
Reset: goes back to the first view.
Random Spot: jumps to a random view that has both black and color, so you do not land on a flat black or flat color screen.
Tip: click along the colored edge of the shape. Zooming into the solid black middle only shows more black.

How it works:
For every pixel, the program does this:
Turn the pixel's position into a point c on the math plane.
Start with z = 0, then repeat z = z * z + c.
If z gets further than 2 from the middle, it will fly off forever. Stop and count the steps.
Color the pixel by the step count. A point that never flies away is black.

The number of steps tested grows as you zoom in, so deeper views keep their detail.

Speed-up: two big shapes in the middle (the main cardioid and the period-2 bulb) are known to be inside the set. The program checks for them first and skips the long loop for those points.

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
