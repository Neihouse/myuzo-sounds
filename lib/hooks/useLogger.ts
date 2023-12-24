import { useEffect } from 'react';

export function useLogger(componentName: string) {
  useEffect(() => {
    console.log(`${componentName} mounted`);
    return () => {
      console.log(`${componentName} unmounted`);
    };
  }, [componentName]);
}
