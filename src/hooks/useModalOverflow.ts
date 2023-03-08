import { useEffect } from "react";

function useModalOverflow(isOpen: boolean) {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    function setOverflow(value: string) {
      document.body.style.overflow = value;
    }

    setOverflow(isOpen ? "hidden" : "auto");

    return () => {
      setOverflow("auto");
    };
  }, [isOpen || false]);
}

export default useModalOverflow;
