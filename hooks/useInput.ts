import { useRouter } from "next/router";
import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { RESULT_URL } from "../constants/urlConstants";
import { setKeyword } from "../redux/slices/keywordSlice";
import useGlobalModal from "./useGlobalModal";

const useInput = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const { openGlobalModal } = useGlobalModal();

  const onFocus = () => setFocus(true);

  const onBlur = () => setFocus(false);

  const onChange = (value: string) => setValue(value);

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (value === "") {
      openGlobalModal({ isOpen: true, text: "검색어를 입력해주세요" });
      return;
    }

    dispatch(setKeyword(event.currentTarget.value));
    if (router.pathname !== RESULT_URL) router.push(RESULT_URL);
  };

  return { value, focus, onFocus, onBlur, onChange, onEnter };
};

export default useInput;
