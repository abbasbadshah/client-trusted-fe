import { useState, useEffect, useRef } from 'react';

const usePageTitleAnimation = (defaultTitle, comeBackMessage) => {
  const [title, setTitle] = useState(defaultTitle);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTitle(defaultTitle);
        clearInterval(intervalRef.current);
      } else {
        const toggleTitle = () => {
          setTitle((prevTitle) => (prevTitle === defaultTitle ? comeBackMessage : defaultTitle));
        };

        toggleTitle();
        intervalRef.current = setInterval(toggleTitle, 2000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(intervalRef.current);
    };
  }, [defaultTitle, comeBackMessage]);

  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitleAnimation;