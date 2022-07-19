import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastMessage() {
  const notify = () => toast('Error');

  return (
    <div>
      <button onClick={notify}>Error</button>
      <ToastContainer />
    </div>
  );
}
