/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, memo, SyntheticEvent, useEffect, useRef } from "react";
import styled from "styled-components";
import { useGetDocumentsQuery } from "../../quries/searchQuery";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Document from "./Card";
import CardSkeleton from "./CardSkeleton";

interface Props {
  setIsScroll: Dispatch<React.SetStateAction<boolean>>;
}

const Main = memo((props: Props) => {
  const { setIsScroll } = props;
  const keyword = useAppSelector((state: RootState) => state.keyword);
  const getDocuments = useGetDocumentsQuery(keyword);
  const targetRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const onScroll = (event: React.UIEvent<HTMLElement, UIEvent>) => {
    if (event.currentTarget.scrollTop > 1) return;
    setIsScroll(Boolean(event.currentTarget.scrollTop));
  };

  const handleObserver = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const target = entries[0];
    if (target.isIntersecting) {
      observer.unobserve(target.target);
      getDocuments.fetchNextPage();
    }
  };

  useEffect(() => {
    const option = { rootMargin: "0px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    if (
      targetRef.current &&
      getDocuments.hasNextPage &&
      !getDocuments.isFetchingNextPage
    ) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [handleObserver]);

  useEffect(() => {
    if (!getDocuments.documents.length) mainRef.current?.scrollTo(0, 0);
  }, [getDocuments]);

  return (
    <MainStyled ref={mainRef} onScroll={onScroll}>
      {getDocuments.documents.map((document, index, documents) => (
        <Document
          key={index}
          item={document}
          targetRef={documents.length === index + 1 ? targetRef : null}
        />
      ))}
      {!getDocuments.isLast &&
        [...Array(20)].map((_arry, index) => <CardSkeleton key={index} />)}
    </MainStyled>
  );
});

export default Main;

const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
