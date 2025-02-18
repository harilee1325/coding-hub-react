#!/bin/bash


# Create public directory and its contents
mkdir -p public/assets
touch public/index.html
touch public/favicon.ico
touch public/assets/react.svg

# Create src directory and its subdirectories
mkdir -p src/{components,pages,hooks,context,services,utils,styles}

# Create placeholder files in src
touch src/components/Header.tsx
touch src/components/Footer.tsx
touch src/pages/Home.tsx
touch src/pages/About.tsx
touch src/hooks/useAuth.ts
touch src/context/AuthContext.tsx
touch src/services/pocketbase.ts
touch src/utils/helpers.ts
touch src/styles/App.css
touch src/App.tsx
touch src/index.tsx
touch src/reportWebVitals.ts

# Create tests directory and its subdirectories
mkdir -p tests/{unit,integration}

# Create root-level configuration files
touch package.json
touch tsconfig.json
touch .eslintrc.js
touch .prettierrc
touch README.md

echo "Project structure created successfully!" 