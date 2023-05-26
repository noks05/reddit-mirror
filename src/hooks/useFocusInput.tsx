import { useEffect } from "react";

export function useFocusInput(
  inputRef: React.MutableRefObject<HTMLFormElement | null>
) {
  useEffect(() => {
    if (inputRef) {
      const inputHtmlElem = inputRef.current?.querySelector("textarea");
      if (!inputHtmlElem) return;
      inputHtmlElem.focus();
      inputHtmlElem.selectionStart = inputHtmlElem.value.length;
    }
  }, []);
}
