import styled, {css} from "styled-components";

export const Layout = styled.div(() => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
  background: #18191A;
  color: #F0F1F3;
  flex: 1;
`)

export const Header = styled.header(() => css`
  background: #242526;
  display: flex;
  flex-direction: column;
  align-items: center;
`)

export const HeaderBanner = styled.img(() => css`
  border-radius: 0 0 .5rem .5rem;
  background: #313233;
  object-fit: cover;
  height: 300px;
`)

export const HeaderBody = styled.div(() => css`
  display: flex;
  flex: 1;
`)

export const HeaderUserPicture = styled.img(() => css`
  border: solid .375rem #242526;
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -3rem;
  position: relative;
`)

export const HeaderUserInfo = styled.div(() => css`
  display: flex;
  flex-direction: column;
  padding: 1rem.5rem;
  flex: 1;
`)

export const HeaderUserName = styled.div(() => css`
  color: #F0F1F3;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
`)

export const HeaderUserOccupation = styled.div(() => css`
  color: #F0F1F3;
  display: flex;
  flex-direction: column;
`)

export const HeaderUserTags = styled.ul(() => css`
  list-style: none;
  display: flex;
  gap: .125rem;
  padding: 0;
  margin: 0;
  color: #999999;
  font-size: .75rem;
`)

export const HeaderUserTag = styled.li(() => css`
  display: flex;
  gap: .125rem;
  
  &:not(:first-child):before {
    content: '|';
    margin-right: .125rem;
  }
`)

export const HeaderUserLinks = styled.div(() => css`
  display: flex;
  gap: .5rem;
  padding: 1rem 0;
`)

export const HeaderUserLink = styled.a(() => css`
  width: 2rem;
  height: 2rem;
  background: #313233;
  color: #CFD3D7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  cursor: pointer;
`)

export const Main = styled.main(() => css`
  display: flex;
  flex-direction: column;
`)

export const Card = styled.div(() => css`
  background: #242526;
  border-radius: .5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`)

export const CardHeader = styled.div(() => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`)

export const CardTitle = styled.div(() => css`
  font-size: 1.5rem;
  font-weight: 600;
`)

export const CardBody = styled.div(() => css`
  display: flex;
  flex-direction: column;
`)

