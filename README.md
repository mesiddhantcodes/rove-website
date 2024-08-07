# Admin Panel Rove

This is an admin panel developed using React and Tailwind CSS. The panel allows admins to manage travelers, bus stoppages, and drivers, with the ability to update the data as needed.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)


## Features

- **User Authentication**: Secure login and access control.
- **Dashboard**: Overview of the system with useful statistics.
- **Traveler Management**: Add, view, update, and delete travelers.
- **Driver Management**: Manage driver details.
- **Bus Stoppages**: Manage bus routes and stoppages.
- **Responsive Design**: Works on desktop and mobile devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Preact**: A fast alternative to React with the same modern API.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Next generation frontend tooling.
- **Axios**: Promise-based HTTP client for the browser.
- **Chart.js**: Simple yet flexible JavaScript charting library.
- **React-Chartjs-2**: React wrapper for Chart.js.
- **React-Hot-Toast**: React notifications made easy.
- **Preact-Router**: A simple router for Preact.
- **Flowbite**: Tailwind CSS component library.
- **Faker**: Library for generating fake data.
- **Tw-Elements-React**: Tailwind Elements for React.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (version 16.x or higher)
- npm (version 7.x or higher) or yarn

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/admin-panel.git
   cd admin-panel
2. Install
   ```sh   
   npm install
   # or
   yarn install
   # and
   npm run dev
   # or
   yarn dev

### Project Structure
```bash
admin-panel/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── sidebar.jsx
│   ├── pages/
│   │   ├── bus.jsx
│   │   ├── dashboard.jsx
│   │   ├── login.jsx
│   │   ├── route.jsx
│   │   └── users.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── DashboardLayout.jsx
│   └── index.jsx
├── arduino/
│   ├── code/
│   │   └── arduino_code.ino
│   └── README.md
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js

