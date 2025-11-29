import React, { useEffect, useState } from 'react';
import { HorizontalAlignment, ToastType, VerticalAlignment } from './types';

const useToast = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState < ToastType > ToastType.SUCCESS;
  const [toastMessages, setToastMessages] = useState([]);
  const [horizontalPosition, setHorizontalPosition] = useState(
    HorizontalAlignment.LEFT
  );
  const [verticalPosition, setVerticalPosition] = useState(
    VerticalAlignment.BOTTOM
  );
  const timersIds = [];

  useEffect(() => {
    return () => {
      timersIds.forEach((timerId) => clearTimeout(timerId));
    };
  }, []);
  const showToast = () => {
    const newToast = {
      message,
      id: Date.now(),
      type,
    };
    setToastMessages((prev) => [...prev, newToast]);
    const timerId = setTimeout(() => {
      setToastMessages((prev) =>
        prev.filter((mesg) => mesg.id !== newToast.id)
      );
    });
    timersIds.push(timerId);
  };
  return {
    setMessage,
    setType,
    toastMessages,
    setVerticalPosition,
    setHorizontalPosition,
    showToast,
    verticalPosition,
    horizontalPosition,
  };
};

export default useToast;
