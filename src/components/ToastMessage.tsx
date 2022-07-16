import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast('Error');

  return (
    <div>
      <button onClick={notify}>Error</button>
      <ToastContainer />
    </div>
  );
}
