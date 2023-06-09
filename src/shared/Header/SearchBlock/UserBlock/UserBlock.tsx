import React from "react";
import styles from "./userblock.less";
import { EIcons, Icon } from "../../../glop/Icon";
import { Text } from "../../../glop/Text";
import { EColors } from "../../../types.global";
import { Break } from "../../../Break";

interface IUserBlockPros {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}
export function UserBlock({ avatarSrc, username, loading }: IUserBlockPros) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=1zvLRFTNIfKsrbNLPmr0UA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcons.anon} size={50} color={EColors.greyD9} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={16} color={EColors.greyC4}>
            Загрузка...
          </Text>
        ) : (
          <Text size={20} color={username ? EColors.black : EColors.grey99}>
            {username || "Аноним"}
          </Text>
        )}
      </div>
    </a>
  );
}
