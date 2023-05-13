import React, { useEffect, useRef, useState } from "react";
import styles from "./formcomments.less";
import { Text } from "../../../../../../Text";
import { EColors } from "../../../../../../types.global";

export function FormComments({ nameAutor }: { nameAutor: string }) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  let [inputValue, setInputValue] = useState(`${nameAutor}, `);

  useEffect(() => {
    const inputElem = inputRef.current;
    if (inputRef && inputElem) {
      inputElem.focus();
      inputElem.selectionStart = inputElem.value.length;
    }
  }, []);

  return (
    <form className={styles.container} action="">
      {/* неконтролируемая компонента */}
      {/* <textarea
        className={styles.input}
        ref={inputRef}
        defaultValue={inputValue}
      /> */}
      {/* контролируемая компонента */}
      <textarea
        className={styles.input}
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <div className={styles.toolsBox}>
        <div className={styles.tools}>tools</div>
        <button
          className={styles.button}
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          <Text size={14} color={EColors.white}>
            Комментировать
          </Text>
        </button>
      </div>
    </form>
  );
}
