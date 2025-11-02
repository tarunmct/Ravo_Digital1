# Ravo Digitals - Multi-Page Website

A complete, fully responsive, and modern multi-page website for Ravo Digitals built with React + Vite + Tailwind CSS + React Router DOM + Framer Motion.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🚀 Smooth animations using Framer Motion
- 📱 Fully responsive for mobile, tablet, and desktop
- 🎯 Multi-page routing with React Router DOM v6
- 📧 Contact form integration with Web3Forms API
- 🖼️ Interactive gallery with lightbox preview
- 🎭 Sticky navbar with mobile hamburger menu

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM v6** - Client-side routing
- **Framer Motion** - Animation library

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx       # Navigation bar component
  │   ├── Footer.jsx       # Footer component
  │   └── ServiceCard.jsx  # Reusable service card component
  ├── pages/
  │   ├── Home.jsx                # Landing page
  │   ├── About.jsx               # About page
  │   ├── DigitalMarketing.jsx   # Digital Marketing service page
  │   ├── ITServices.jsx          # IT Services page
  │   ├── EventManagement.jsx     # Event Management page
  │   ├── Frames.jsx               # Gallery/Frames page
  │   └── Contact.jsx             # Contact page with form
  ├── App.jsx            # Main app component with routing
  ├── main.jsx           # Entry point
  └── index.css          # Global styles with Tailwind directives
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Web3Forms API Key

Open `src/pages/Contact.jsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual Web3Forms access key.

You can get a free access key from [Web3Forms](https://web3forms.com/).

### 3. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port shown in the terminal).

### 4. Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Routes

- `/` - Home page
- `/about` - About page
- `/digital-marketing` - Digital Marketing services
- `/it-services` - IT Services
- `/event-management` - Event Management services
- `/frames` - Gallery/Frames showcase
- `/contact` - Contact page with form

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:
- Primary: `#FFC107` (Yellow)
- Secondary: `#000000` (Black)
- Accent: `#FFFFFF` (White)

### Fonts

The project uses Poppins font from Google Fonts, loaded in `index.html` and `src/index.css`.

### Social Media Links

Update social media URLs in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## License

© 2024 Ravo Digitals | All Rights Reserved
