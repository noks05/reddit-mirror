import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./formcomments.less";
import { Text } from "../../../../../../glop/Text";
import { EColors } from "../../../../../../types.global";
import { Icon } from "../../../../../../glop/Icon";

export function FormComments({ nameAutor }: { nameAutor: string }) {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [inputValue, setInputValue] = useState(`${nameAutor}, `);
  const inconsArr: string[] = [
    "arrows",
    "picture",
    "file",
    "download",
    "avatar",
    "reload",
    "link",
    "pen",
    "underline",
    "pdf",
  ];

  useEffect(() => {
    if (inputRef) {
      const inputHtmlElem = inputRef.current;
      if (!inputHtmlElem) return;
      inputHtmlElem.focus();
      inputHtmlElem.selectionStart = inputHtmlElem.value.length;
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
        <ul className={styles.tools}>
          {inconsArr.map((icon: string) => (
            <li className={styles.itemTools} key={icon}>
              <button type="button" className={styles.tool}>
                <Icon name={icon} color={EColors.grey99} />
              </button>
            </li>
          ))}
        </ul>
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
