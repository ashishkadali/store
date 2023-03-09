import React, { Component } from "react";
import styled from "styled-components";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  border: 2px solid black;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: Bold;
`;

const Serachcontainer = styled.div`
  // border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;
const SearchInput = styled.input``;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <Serachcontainer>
              <SearchInput />
              <SearchTwoToneIcon color="gray" fontSize="small" />
            </Serachcontainer>
          </Left>
          <Center>center</Center>
          <Right>right</Right>
        </Wrapper>
      </Container>
    );
  }
}
