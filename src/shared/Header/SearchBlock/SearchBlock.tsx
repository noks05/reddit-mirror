import React, { useContext } from "react";
import styles from "./searchblock.less";
import { UserBlock } from "./UserBlock";
import { userContext } from "../../context/userContext";

export function SearchBlock() {
  const data = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      search block
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
