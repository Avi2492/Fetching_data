# React + Vite - Admin dashboard

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Technologies Used 
## tailwind CSS, React.js, D3.js, react-router-dom, .fetch, API Integration, Cloud Storage - Firebase.

# Installation Guidance

## vite + react - 
- npm create vite@latest
- > Give Project Name
  > Select React
  > Select JavaScript
- Project Setup Done
- > cd projectname
  > then install node_modules
  > npm I

# Vite + React with Tailwind CSS Integration

This guide explains how to integrate Tailwind CSS with a Vite + React project.

## 1. Create a Vite + React Project

Use the following commands to create a new Vite + React project:

```bash
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```css
/* index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
```js
// src/App.jsx
import React from 'react';
import './styles/tailwind.css';

function App() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-500">Hello, Vite + React + Tailwind CSS!</h1>
    </div>
  );
}

export default App;
```
```bash
npm run dev
```

## Install D3.js file to show data in graphs like I used pie chart

This guide outlines the steps to add D3.js, a powerful JavaScript library for data visualization, to a Vite + React project.

## 1. Install D3.js

Use npm to install D3.js in your project:

```bash
npm install d3
```
```javascript
// src/components/MyChart.jsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function MyChart() {
  const chartRef = useRef();

  useEffect(() => {
    // D3.js code for creating the chart goes here

    const svg = d3.select(chartRef.current);

    // Example: Creating a simple bar chart
    const data = [4, 8, 15, 16, 23, 42];

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 25)
      .attr('y', (d) => 100 - d * 3)
      .attr('width', 20)
      .attr('height', (d) => d * 3)
      .attr('fill', 'steelblue');
  }, []);

  return (
    <div>
      <h2>My D3.js Chart</h2>
      <svg ref={chartRef}></svg>
    </div>
  );
}

export default MyChart;
```
## Done setup

```bash
npm run dev
```

# Setting up React Router in Vite + React Project

This guide explains how to install `react-router-dom` and set up routing in a Vite + React project.

## 1. Install `react-router-dom`

Use npm to install `react-router-dom`:

```bash
npm install react-router-dom
```
```javascript
// src/components/Home.jsx
import React from 'react';

function Home() {
  return <h2>Home Page</h2>;
}

export default Home;
```
# Create a Router Component
```javascript
// src/components/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
```

# To add firebase store in your project
# Using Firebase Firestore in Vite + React Project

This guide explains how to integrate Firebase Firestore into your Vite + React project to save and retrieve data.

## 1. Set Up Firebase Project

- Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
- Go to the "Firestore Database" section and create a new Firestore database.

## 2. Obtain Firebase Configuration

- In your Firebase project settings, navigate to the "Project settings" > "General" tab.
- Scroll down to the "Your apps" section and select your web app.
- Copy the Firebase SDK configuration snippet.

## 3. Install Firebase in Your Project

Install Firebase in your Vite + React project:

```bash
npm install firebase
```
## Configure Firebase in Your Project
### Create a Firebase configuration file, for example, firebase.js, and paste the Firebase SDK configuration snippet:

```javascript
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
```
# 5. Use Firestore in Your React Components
### Now, you can use Firestore in your React components. For example, to save data:
```javascript
// src/components/SaveData.jsx
import React, { useState } from 'react';
import firestore from '../firebase';

function SaveData() {
  const [data, setData] = useState('');

  const handleSaveData = async () => {
    try {
      // Save data to Firestore
      const docRef = await addDoc(collection(firestore, 'your_collection_name'), {
        data: data,
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <h2>Save Data to Firestore</h2>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleSaveData}>Save Data</button>
    </div>
  );
}

export default SaveData;
```

### ensure to add this also: 
```javacript
import { addDoc, collection } from 'firebase/firestore';
```
### run your project
```bash
npm run dev
```

