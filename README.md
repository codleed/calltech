# CallTech HVAC Solutions - Landing Page

A modern, responsive landing page for an HVAC business built with React, Tailwind CSS v4, Ant Design, Framer Motion, and Redux Toolkit.

## 🚀 Features

- **Modern Tech Stack**: React 19, Vite, Tailwind CSS v4, Ant Design, Framer Motion, Redux Toolkit
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **State Management**: Redux Toolkit for managing business data and UI state
- **Component-Based Architecture**: Modular, reusable components
- **JSON Data Management**: Business data stored in a single JSON file
- **Accessibility**: ARIA attributes and keyboard navigation support

## 📁 Project Structure

```
hvac-landing/
├── src/
│   ├── assets/
│   │   └── business.json          # Business data
│   ├── components/
│   │   ├── Header.jsx             # Navigation header
│   │   ├── Hero.jsx               # Hero section
│   │   ├── About.jsx              # About section
│   │   ├── Services.jsx           # Services showcase
│   │   ├── Reviews.jsx            # Customer reviews
│   │   ├── Contact.jsx            # Contact form
│   │   └── Footer.jsx             # Footer
│   ├── pages/
│   │   └── Home.jsx               # Main landing page
│   ├── store/
│   │   ├── slices/
│   │   │   └── businessSlice.js   # Redux slice
│   │   └── store.js               # Redux store
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Tailwind CSS imports
├── package.json
└── vite.config.js
```

## 🛠️ Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Business Data
Edit `src/assets/business.json` to customize:
- Business name and tagline
- Contact information
- Services offered
- Customer reviews
- Business hours
- Certifications

### Styling
- Tailwind CSS v4 with custom theme variables
- Custom colors defined in `src/index.css`
- Responsive breakpoints and utilities

### Components
Each component is self-contained and can be easily modified:
- Props-based data passing
- Redux state management
- Framer Motion animations
- Ant Design UI components

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 3xl (1920px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🔧 Technologies Used

- **React 19**: Latest React with modern hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS v4**: Utility-first CSS framework
- **Ant Design**: Professional UI components
- **Framer Motion**: Smooth animations and transitions
- **Redux Toolkit**: State management
- **React Redux**: React bindings for Redux

## 📞 Contact Features

- Contact form with validation
- Phone number click-to-call
- Email integration
- Service selection dropdown
- Form state management with Redux

## ⚡ Performance

- Optimized bundle size
- Lazy loading for images
- Efficient animations
- Minimal re-renders
- Fast development with Vite HMR

## 🎯 SEO Ready

- Semantic HTML structure
- Meta tags optimization
- Accessible markup
- Fast loading times

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Color Scheme

The project uses a professional HVAC-themed color palette:
- Primary Blue: #1e40af (hvac-blue)
- Gray: #64748b (hvac-gray)
- Light Background: #f8fafc (hvac-light)
- Primary variants: 50-900 scale

## 📱 Sections

1. **Header**: Sticky navigation with mobile menu
2. **Hero**: Eye-catching intro with call-to-action
3. **About**: Company information and statistics
4. **Services**: HVAC services showcase
5. **Reviews**: Customer testimonials
6. **Contact**: Contact form and business info
7. **Footer**: Additional links and emergency contact

## 🔧 Customization Tips

1. **Update Business Info**: Modify `src/assets/business.json`
2. **Change Colors**: Update Tailwind theme in `src/index.css`
3. **Add Services**: Extend the services array in business.json
4. **Modify Layout**: Edit component files in `src/components/`
5. **Add Animations**: Use Framer Motion variants for new animations

## 📞 Support

For questions or support, please contact the development team or refer to the documentation of the individual technologies used.
