Mandelbrot Set Zoom

A web page that draws the Mandelbrot set, a shape with infinite detail as you zoom deeper. Click the picture to zoom in, or choose a random spot to begin with. The more you zoom, the more detail appears.
Its an interactive web renderer where you click to zoom in.

Live demo:https://synk-max.github.io/Mandelbrot-Set

How to run it:
The easiest option is to open the live demo link above

On a computer, download this repo using the green button named "code". 
Download the zip file, unzip it and open the index.html file

It needs an internet connection, because the p5.js library loads from a CDN (a website that hosts code).
So, open it through VsCode open index.html, double click and select "Open with Live Server Option".

Tip: Beware of the lag that follows through the zoom. click along the colored edge of the shape. Zooming into the solid black middle only shows more black.

How it works:
The two real and imaginary parts of a complex number is assigned to the x part and y part of the canvas.
The equation modeled by this set is z(n+1)=zn^2+c. where z is a complex number and so c is divided into cx and cy as real and imaginary parts. Every pixel is a place on a sheet of numbers. The program turns the pixel’s position into two numbers, cx and cy.
Here, the black part are all the constant numbers that are bounded, meaning they dont go towards infinity but stay within range

Limits
Regular 64-bit numbers have about 16 digits. Past roughly 10^14 times zoom, the picture turns blocky.
Deep views take a few seconds to draw, because the math runs on the CPU.

Deepest zoom I reached: 285 Iterations

My Refrences:
https://www.youtube.com/watch?v=6z7GQewK-Ks
https://p5js.org/reference/

Files
index.html: the page
main.js: the program (drawing, zoom, buttons)
screenshot.png: a deep zoom

Built with
JavaScript and p5.js 2.3.0.
