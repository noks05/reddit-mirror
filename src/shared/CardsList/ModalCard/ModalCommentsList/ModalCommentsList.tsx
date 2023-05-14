import React from "react";
import styles from "./modalcommentslist.less";
import { useCommentsData } from "../../../../hooks/useCommentsData";
import { Text } from "../../../glop/Text";
import { EColors } from "../../../types.global";
import { GenericComments } from "../../../../utils/react/GenericComments";

interface IPropsModalCommentsList {
  id: string;
  subreddit: string;
}

export function ModalCommentsList({ id, subreddit }: IPropsModalCommentsList) {
  const [data] = useCommentsData(id, subreddit);
  if (!data.length) {
    return (
      <Text size={14} color={EColors.grey99}>
        Будьте первым кто оставит комментарий
      </Text>
    );
  }
  return <GenericComments data={data} />;
}
