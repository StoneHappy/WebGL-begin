import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import './style.css'

function App()
{
    return (
        <div >
          hello world!
        </div>
      );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);