import React, { useEffect, useState } from 'react';
import { SplashScreen } from 'expo-router';
import { useKeepAwake } from 'expo-keep-awake';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return loaded ? <DelayedScreen/> : <SplashScreen/>;
}

function DelayedScreen() {
  useKeepAwake();

  return null;
}
