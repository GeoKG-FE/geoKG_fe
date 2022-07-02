import styled from "styled-components";

interface MainMenuProps {}
export const MainMenu: React.FC<MainMenuProps> = () => {
  return (
    <div>
      <Title>时空地理知识图谱系统</Title>
    </div>
  );
};
const Title = styled.h1`
  color: #fff;
  font-size: 20px;
`;
