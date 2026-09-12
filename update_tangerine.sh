#!/bin/bash
sed -i 's/family=Elsie+Swash+Caps:wght@400;900&family=Manrope:wght@200..800&display=swap/family=Elsie+Swash+Caps:wght@400;900\&family=Manrope:wght@200..800\&family=Tangerine:wght@400;700\&display=swap/g' src/index.css
sed -i '/--font-elsie/a \  --font-tangerine: "Tangerine", cursive;' src/index.css
sed -i 's/font-elsie font-black pr-4/font-tangerine font-bold pr-4 text-7xl sm:text-8xl md:text-9xl leading-none pt-2/g' src/components/heroSection/HeroMain.jsx
