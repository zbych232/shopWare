import React from 'react';
import { ShopwareListProvider } from './contexts/ShopwareListContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import './App.scss';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ShopwareListProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </ShopwareListProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
