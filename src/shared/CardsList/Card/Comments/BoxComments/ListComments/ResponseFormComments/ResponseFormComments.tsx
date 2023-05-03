import React, { useEffect, useRef, useState } from "react";
import styles from "./responseformcomments.less";
import { Text } from "../../../../../../Text";
import { EColors } from "../../../../../../types.global";

export function ResponseFormComments({ nameAutor }: { nameAutor: string }) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [inputValue, setInputValue] = useState(`${nameAutor}, `);

  useEffect(() => {
    const inputElem = inputRef.current;
    if (inputRef && inputElem) {
      inputElem.focus();
      inputElem.selectionStart = inputElem.value.length;
    }
  }, []);

  console.log(inputValue);

  return (
    <form className={styles.container} action="">
      <textarea
        className={styles.input}
        ref={inputRef}
        defaultValue={`${nameAutor}, `}
      />
      {/* <textarea
        className={styles.input}
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      /> */}
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
