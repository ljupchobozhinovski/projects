import styled from "styled-components";

const PrimaryButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-color: #d73f3b;
  padding: 10px 30px;
  border: solid #d73f3b 2px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #d73f3b;
    border: solid 2px #d73f3b;
  }
`;

const PrimaryDarkButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-color: #b53834;
  padding: 10px 30px;
  border: solid #b53834 2px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #b53834;
    border: solid 2px #b53834;
  }
`;

const SecondaryButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #d73f3b;
  background-color: #ffffff;
  padding: 10px 30px;
  border: solid #ffffff 2px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #d73f3b;
    color: #ffffff;
    border: solid 2px #ffffff;
  }
`;

const SecondaryDarkButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #000000;
  background-color: #ffffff;
  padding: 10px 30px;
  border: solid #ffffff 2px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #d73f3b;
    color: #ffffff;
    border: solid 2px #ffffff;
  }
`;

const TertiaryButton = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  background-color: #6a6a6a;
  padding: 10px 30px;
  border: solid #ffffff 2px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #ffffff;
    color: #6a6a6a;
    border: solid 2px #6a6a6a;
  }
`;

export {
  PrimaryButton,
  PrimaryDarkButton,
  SecondaryButton,
  SecondaryDarkButton,
  TertiaryButton,
};
