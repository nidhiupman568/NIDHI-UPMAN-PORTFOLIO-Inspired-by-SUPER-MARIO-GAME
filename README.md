
# Super Mario-Inspired Portfolio

Welcome to my portfolio, designed to capture the nostalgic essence of the classic Super Mario game! Here’s a detailed overview of the project, including controls, technologies used, development stages, challenges faced, and final thoughts. 

## Controls

You can move Mario to the left or right using the keyboard arrows on desktop or the arrow buttons on mobile.

## What I Used

- **Graphics**
- **Music and Sounds:** Sourced from YouTube videos
- **HTML**
- **CSS**
- **jQuery:** To simplify JavaScript coding
- **Google Fonts**

## The Stages

1. **Start with the Basics**
2. **Add Little Details**
3. **Achieve Pixel Perfect Images**
4. **Polish the Code**
5. **Overcome the Most Difficult Challenges**
6. **Resolve Additional Issues**

### Start with the Basics

On the screen, you'll see five primary elements:

1. **Mario**
2. **Sky** (clouds + mountains)
3. **Floor**
4. **Information Boxes**
5. **Arrow Buttons**

Steps to build this from scratch:
1. Write the HTML
2. Write the CSS
3. Write the JavaScript (and cry a bit)
4. Test, test, test
5. Polish the code

### Add Little Details

The Mario object is a simple `<img>` HTML tag with a transparent source image. The actual image is applied using the CSS `background` attribute.

To create the Mario moving animation, I used a sprite image with three frames:
- **Frame 1:** `background-position-x: 0px;`
- **Frame 2:** `background-position-x: -65px;`
- **Frame 3:** `background-position-x: -130px;`

To change Mario's direction (left or right), I used the same image file with the CSS attribute `-webkit-transform`:
- **Left:** `-webkit-transform: scaleX(-1);`
- **Right:** `-webkit-transform: scaleX(1);`

### Achieve Pixel Perfect Images

For the background image, I initially used a small image that appeared blurry on desktop. Adding the CSS attribute `image-rendering: crisp-edges` achieved crisp pixels. This small tweak made a significant difference.

### Polish the Code

In the first version, there was a lot of duplicate code for user controls (key presses and arrow button clicks). I refactored the code to use functions, reducing redundancy and improving maintainability.

### Overcome the Most Difficult Challenges

The most challenging part was handling all the JavaScript interactions, managing time intervals, and ensuring smooth controls on both desktop and mobile.

### Resolve Additional Issues

Some browsers, like Google Chrome, do not allow autoplaying music. To address this, I made the music play when the user interacts with the screen (e.g., clicks, presses keys, or clicks arrow buttons).

## Final Message

I hope you enjoy this project, find some inspiration, and share it with your family and friends who have fond memories of playing Mario Bros. Let's bring back some good memories together!

## Getting Started


1. Clone the repository: 'https://github.com/nidhiupman568/NIDHI-UPMAN-PORTFOLIO-Inspired-by-SUPER-MARIO-GAME.git'
   
2. Open the `index.html` file in your web browser.

#### Screenshots(Output)

![SUPERMARIO 1](https://github.com/nidhiupman568/NIDHI-UPMAN-PORTFOLIO-Inspired-by-SUPER-MARIO-GAME/assets/130860182/36cd501b-3df3-4053-910e-c1a44172ab2e)

![SUPERMARIO 2](https://github.com/nidhiupman568/NIDHI-UPMAN-PORTFOLIO-Inspired-by-SUPER-MARIO-GAME/assets/130860182/179c0509-6d2d-420d-b0a0-cdb5608210d0)

![SUPERMARIO 3](https://github.com/nidhiupman568/NIDHI-UPMAN-PORTFOLIO-Inspired-by-SUPER-MARIO-GAME/assets/130860182/5f0fd99c-3f71-4b9e-a9ef-8c6ed4b0219f)




