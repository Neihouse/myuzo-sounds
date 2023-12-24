import { useState } from 'react';

export function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return {
    isVisible,
    toggle,
  };
}
