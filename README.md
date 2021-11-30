# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./solution/desktop.png)
![](./solution/mobile.png)


### Links

- Solution URL: [https://github.com/blaqbox-prime/base-apparel-coming-soon](https://github.com/blaqbox-prime/social-proof-section)
- Live Site URL: [https://blaqbox-prime.github.io/base-apparel-coming-soon](https://blaqbox-prime.github.io/base-apparel-coming-soon)

## My process
I start off with creating color variables in the document root. Then creating the css classes for text colors and background colors. I then analyze the design and chopped it into 2 big sections (top and bottom) then split those sections furthur into smaller content containers and start writing the css for those containers as closely as possible to the design. After going as far as I can with the styling I then write the HTML with the classes I've already created. From there everything is adjusted as the HTML is written.

I use a mobile first aproach so the mobile ui is the initial style then a media query for larger screens, 760px+ is used to create the desktop design. For the desktop layout I used flexbox and while I'm not completely confident nor satisfied with the results it came out pretty well 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

I've never worked with forms in vanilla javascript and that, I must say was a whole mission to get around. I have worked with React and PHP (vanilla PHP & CodeIgniter4) so I had an idea of the 'how to' of it all. It's like learning something you thought you already knew. Using vanilla Javascript was a good excersice. We tend to ignore the basics as we move through the libraries that abstracts things and makes them a lot easier. I got to take a look at regular expressions. Now that's a whole mess just looking at it. At the very least I understood the basic premise and what the operators and patterns represent. Enough to get the job done anyway. 
The layout I feel like I cheated a little bit, I'm pretty sure there's a better way to do all that

 ```js
   let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 ```

## Author

- Instagram - [@ig_blaqbox.dev](https://www.instagram.com/ig_blaqbox.dev)
- Frontend Mentor - [@blaqbox-prime](https://www.frontendmentor.io/profile/blaqbox-prime)
- github - [@blaqbox-prime](https://www.github.com/blaqbox-prime)
