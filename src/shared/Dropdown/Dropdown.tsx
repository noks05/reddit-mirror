import React, { useEffect, useState } from "react";
import styles from "./dropdown.less";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  styleContainer?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({
  button,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
  children,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  function handleOpen() {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
