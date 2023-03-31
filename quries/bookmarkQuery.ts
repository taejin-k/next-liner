import { useMutation } from "@tanstack/react-query";
import { Dispatch } from "react";
import { deleteBookMarkAPI, postBookMarkAPI } from "../apis/bookMarkAPI";
import useGlobalModal from "./../hooks/useGlobalModal";

export const usePostBookMarkMutation = (
  setSave: Dispatch<React.SetStateAction<boolean>>
) => {
  const { openGlobalModal } = useGlobalModal();

  const query = useMutation(
    ["PostBookMark"],
    (variables: { id: string }) => postBookMarkAPI(variables.id),
    {
      onSuccess: () => setSave(true),
      onError: () =>
        openGlobalModal({
          isOpen: true,
          text: "Something went wrong",
        }),
    }
  );

  return query;
};

export const useDeleteBookMarkMutation = (
  setSave: Dispatch<React.SetStateAction<boolean>>
) => {
  const { openGlobalModal } = useGlobalModal();

  const query = useMutation(
    ["DeleteBookMark"],
    (variables: { id: string }) => deleteBookMarkAPI(variables.id),
    {
      onSuccess: () => setSave(false),
      onError: () =>
        openGlobalModal({
          isOpen: true,
          text: "Something went wrong",
        }),
    }
  );

  return query;
};
