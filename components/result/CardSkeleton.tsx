import styled from "styled-components";

const CardSkeleton = () => {
  return (
    <CardSkeletonStyled>
      <div className="img"></div>
      <div className="content">
        <div className="title">
          <p></p>
          <p></p>
        </div>
        <div className="netloc">
          <p></p>
        </div>
      </div>
      <div className="buttonWrap">
        <div className="button"></div>
      </div>
    </CardSkeletonStyled>
  );
};

export default CardSkeleton;

const CardSkeletonStyled = styled.div`
  width: 100%;
  height: 104px;
  padding: 16px 20px;
  background: #fff;

  > .img {
    display: inline-block;
    width: 72px;
    height: 72px;
    border-radius: 12px;
    margin-right: 16px;
    background: #f2f3f7;
  }

  > .content {
    display: inline-flex;
    flex-direction: column;
    gap: 17px;
    width: calc(100% - 168px);
    height: 72px;
    margin-right: 40px;
    padding-top: 5px;

    .title {
      width: 100%;

      > p {
        width: 100%;
        height: 12px;
        border-radius: 4px;
        background: #f2f3f7;

        &:first-of-type {
          width: 80%;
          margin-bottom: 8px;
        }

        &:last-of-type {
          width: 50%;
        }
      }
    }

    .netloc {
      > p {
        width: 80px;
        height: 10px;
        border-radius: 4px;
        background: #f2f3f7;
      }
    }
  }

  > .buttonWrap {
    display: inline-block;
    margin: 16px 0;

    > .button {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #f2f3f7;
    }
  }
`;
