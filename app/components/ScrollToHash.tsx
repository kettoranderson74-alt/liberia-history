
"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      const id = decodeURIComponent(
        hash.substring(1)
      );

      let attempts = 0;

      const findAndScroll = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return;
        }

        attempts++;

        if (attempts < 30) {
          setTimeout(findAndScroll, 100);
        }
      };

      findAndScroll();
    };

    scrollToHash();

    window.addEventListener(
      "hashchange",
      scrollToHash
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        scrollToHash
      );
    };
  }, []);

  return null;
}

