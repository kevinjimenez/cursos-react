import React from 'react'

export const useNearScreen = () => {
    const [show, setShow] = React.useState(false);

    const elemento = React.useRef(null);

    React.useEffect(() => {
        Promise.resolve(
          typeof window.IntersectionObserver !== "undefined"
            ? window.IntersectionObserver
            : //@ts-ignore
              import("intersection-observer")
        ).then(() => {
          const observer = new window.IntersectionObserver(function (entries) {
            const { isIntersecting } = entries[0];
            if (isIntersecting) {
              setShow(true);
              observer.disconnect();
            }
          });
          //@ts-ignore
          observer.observe(elemento.current);
        });
        // sin un fecth de api
      }, [elemento]);

      return [show, elemento]
};
