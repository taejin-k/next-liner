import Image from "next/image";
import { KeyboardEvent } from "react";
import styled, { css } from "styled-components";

interface Props {
  value: string;
  focus: boolean;
  close?: boolean;
  srcKey?: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
  onEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClose?: () => void;
}

const Input = (props: Props) => {
  const {
    value,
    focus,
    close,
    srcKey,
    onFocus,
    onBlur,
    onChange,
    onEnter,
    onClose,
  } = props;

  return (
    <InputStyled focus={focus} iconKey={srcKey} close={close}>
      {srcKey && (
        <div className="iconWrap icon">
          <Image
            src={`/svgs/${srcKey}.svg`}
            width={24}
            height={24}
            alt="검색"
          />
        </div>
      )}
      <input
        type="text"
        value={value}
        placeholder="Search keyword"
        maxLength={100}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => onEnter(event)}
      />
      {close && (
        <button type="button" className="iconWrap close" onClick={onClose}>
          <Image src="/svgs/close.svg" width={24} height={24} alt="초기화" />
        </button>
      )}
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div<{
  focus: boolean;
  iconKey: string | undefined;
  close: boolean | undefined;
}>`
  ${(props) => css`
    position: relative;
    width: 100%;

    > .iconWrap {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: none;

      &.icon {
        left: 16px;
      }

      &.close {
        right: 12px;
        cursor: pointer;
      }
    }

    input {
      width: 100%;
      height: 48px;
      background: #ffffff;
      border: ${props.focus ? "1.5px solid #00C3CC" : "1px solid #c2c6ce"};
      caret-color: ${props.focus && "#00C3CC"};
      border-radius: 48px;
      padding: 0px 16px;
      padding-left: ${props.iconKey && "56px"};
      padding-right: ${props.close && "56px"};
      font-family: "Pretendard";
      font-weight: 400;
      font-size: 16px;
      color: #33373d;

      &:hover {
        border: ${props.focus ? "1.5px solid #00C3CC" : "1px solid #959ca6"};
      }

      &::placeholder {
        color: #c2c6ce;
      }
    }
  `}
`;
