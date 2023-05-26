import React, { useEffect, useRef } from "react";
import styles from "./formcomments.less";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from "../../../store/store";
import { useFocusInput } from "../../../hooks/useFocusInput";
import { useForm } from "react-hook-form";
import { ToolsBar } from "./ToolsBar";

export function FormComments() {
  const inputValue = useSelector<RootState, string>(
    (state) => state.commentText
  );
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLFormElement | null>(null);
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
  useFocusInput(inputRef);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Ваш комментарий отправлен!\n", "текст: ", data.comment);
  };
  errors.comment && console.log(errors.comment.message);

  useEffect(() => {
    const subscription = watch((value) =>
      dispatch(updateComment(value.comment))
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <form
      className={styles.container}
      action=""
      onSubmit={handleSubmit(onSubmit)}
      ref={inputRef}
    >
      <textarea
        className={styles.input}
        value={inputValue}
        {...register("comment", {
          required: "Ошибка!",
          maxLength: 1000,
        })}
        aria-invalid={errors.comment ? true : undefined}
      />
      <ToolsBar icons={inconsArr} />
    </form>
  );
}
