# StarMovie

StarMovie is a modern movie discovery and bookmarking application designed to help users explore trending movies and save their favorites. Built with React, TypeScript, and Vite, StarMovie offers a fast, engaging, and responsive user experience. A simple login feature is implemented using Redux Persist to store and rehydrate user authentication state across sessions.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Authentication**: Secure login and protected routes for authorized access.
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS 

---

## Tech Stack

- **Frontend**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Redux 

---

## Live Deployment

Check out the live site here: [https://hrdeck-uptick.netlify.app](https://hrdeck-uptick.netlify.app)

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd hrdeck
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173)

4. **Build for production**
   ```bash
   npm run build
   ```
5. **Preview production build**
   ```bash
   npm run preview
   ```


---

## Folder Structure

```
hrdeck/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable UI components
│   ├── constants/         # Static data and field definitions
│   ├── context/           # React Context for state management
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components (Dashboard, etc.)
│   ├── pages/             # Page components (Dashboard, Employees, Login, etc.)
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and mock data
│   ├── index.css          # Global styles (Tailwind)
│   └── main.tsx           # App entry point
├── package.json           # Project metadata and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the MIT License.
