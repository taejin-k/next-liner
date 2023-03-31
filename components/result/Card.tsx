import { MouseEvent, RefObject, SyntheticEvent, useState } from "react";
import styled from "styled-components";
import { DocumentType } from "../../models/getDocuments";
import Image from "next/image";
import {
  useDeleteBookMarkMutation,
  usePostBookMarkMutation,
} from "@/quries/bookmarkQuery";

interface Props {
  item: DocumentType;
  targetRef?: RefObject<HTMLDivElement> | null;
}

const Card = (props: Props) => {
  const { item, targetRef } = props;
  const [src, setSrc] = useState(item.imageUrl);
  const [save, setSave] = useState(item.isSaved);
  const saveBookMark = usePostBookMarkMutation(setSave);
  const deleteBookMark = useDeleteBookMarkMutation(setSave);

  const onClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    id: string,
    isSaved: boolean
  ) => {
    event.stopPropagation();

    if (isSaved) deleteBookMark.mutate({ id: id });
    else saveBookMark.mutate({ id: id });
  };

  return (
    <CardStyled ref={targetRef} onClick={() => window.open(item.url)}>
      <Image
        src={src}
        width={72}
        height={72}
        alt={item.imageUrl}
        onError={() => setSrc("/svgs/default_thumb.svg")}
      />
      <div className="content">
        <div className="title">{item.title}</div>
        <div className="netloc">
          <Image
            src={item.faviconUrl || "/svgs/default_favicon.svg"}
            width={14}
            height={14}
            alt={item.faviconUrl}
          />
          <span>{item.netloc}</span>
        </div>
      </div>
      <div className="buttonWrap">
        <button
          type="button"
          onClick={(event) => onClick(event, item.id, save)}
        >
          <Image
            src={`/svgs/save_${save}.svg`}
            width={24}
            height={24}
            alt="저장"
          />
        </button>
      </div>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  width: 100%;
  height: 104px;
  padding: 16px 20px;
  background: #fff;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: #f8f9fb;
  }

  > img {
    border-radius: 12px;
    margin-right: 16px;
    object-fit: cover;
  }

  .content {
    display: inline-flex;
    flex-direction: column;
    gap: 14px;
    width: calc(100% - 168px);
    height: 72px;
    margin-right: 40px;

    .title {
      width: 100%;
      height: 40px;
      color: #33373d;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .netloc {
      display: flex;
      gap: 6px;
      width: 100%;
      height: 14px;
    }
  }

  .buttonWrap {
    display: inline-block;
    margin: 16px 0;

    > button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: transparent;
      border-radius: 12px;
      cursor: pointer;

      &:hover {
        background: #f2f3f7;
      }
    }
  }
`;
