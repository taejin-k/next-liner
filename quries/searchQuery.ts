import { useInfiniteQuery } from "@tanstack/react-query";
import { getDocumentsAPI } from "./../apis/searchAPI";
import useGlobalModal from "./../hooks/useGlobalModal";

export const useGetDocumentsQuery = (keyword: string) => {
  const { openGlobalModal } = useGlobalModal();

  const query = useInfiniteQuery(
    ["GetDocuments", keyword],
    ({ pageParam = 0 }) => getDocumentsAPI(keyword, pageParam),
    {
      getNextPageParam: ({ isLast, nextPage }) => {
        if (!isLast) return nextPage;
      },
      onError: () =>
        openGlobalModal({
          isOpen: true,
          text: "Something went wrong",
        }),
    }
  );

  const documents = query.data?.pages
    ? query.data.pages.map((page) => page.documents).flat()
    : [];

  const isLast = query.data?.pages.map((page) => page.isLast).at(-1);

  return { ...query, documents, isLast };
};
