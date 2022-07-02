import { AlignLeftOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useContext } from "react";
import styled from "styled-components";
import { GraphModelContext } from "../context/GraphModelContext";

interface DetailProps {}
export const Detail: React.FC<DetailProps> = observer(() => {
  const model = useContext(GraphModelContext);
  const clone = toJS(model.selectedNode);
  return (
    <Layout.Sider
      theme="light"
      collapsedWidth={0}
      width={model.selectedNode ? "35%" : 0}
      reverseArrow
      collapsible={!!model.selectedNode}
      trigger={<AlignLeftOutlined />}
    >
      <DetailContainer>
        <div>
          {`已选中节点`}
          {model.selectedNode?.id}
        </div>
        <div>{JSON.stringify(clone)}</div>
      </DetailContainer>
    </Layout.Sider>
  );
});
const DetailContainer = styled.div`
  padding: 24px;
`;
