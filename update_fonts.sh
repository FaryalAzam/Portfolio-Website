#!/bin/bash
sed -i 's/font-cormorant italic pr-4/font-elsie font-black pr-4/g' src/components/heroSection/HeroMain.jsx
sed -i 's/font-cormorant italic pr-1 text-cyan font-medium/font-elsie font-black pr-1 text-cyan/g' src/components/Navbar/NavLogo.jsx
sed -i 's/font-cormorant italic font-medium/font-elsie font-black/g' src/components/contactSection/ContactMain.jsx
sed -i 's/font-cormorant italic font-medium/font-elsie font-black/g' src/components/skillsSection/SkillMain.jsx
sed -i 's/font-cormorant italic font-medium/font-elsie font-black/g' src/components/projectSection/ProjectMain.jsx
sed -i 's/font-cormorant italic font-medium/font-elsie font-black/g' src/components/experienceSection/ExperienceMain.jsx
sed -i 's/font-cormorant italic font-medium/font-elsie font-black/g' src/components/aboutSection/AboutMain.jsx
sed -i 's/font-cormorant italic font-medium/font-elsie font-black/g' src/components/certificationsSection/CertificationsMain.jsx
sed -i "s/family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope/family=Elsie+Swash+Caps:wght@400;900\&family=Manrope/g" src/index.css
sed -i 's/--font-cormorant: "Cormorant Garamond", serif;/--font-elsie: "Elsie Swash Caps", serif;/g' src/index.css
