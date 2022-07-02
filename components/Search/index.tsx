import { Button, Col, Drawer, Input, Row, Select, TreeSelect } from "antd";
import { useMemo } from "react";
import FilterModel from "../../model/filter";
import { observer } from "mobx-react";
import { EntitySelector } from "./EntitySelector";
import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";
import * as S from "./styles";
import styled from "styled-components";

interface FilterProps {}

export const Filter: React.FC<FilterProps> = observer(() => {
  const model = useMemo(() => new FilterModel(), []);
  return (
    <S.Container collapsed={model.collapsed}>
      <S.Center>
        <S.SearchContainer>
          <EntitySelector
            style={{
              width: "30%",
            }}
            size="large"
          />
          <Input
            style={{
              width: "70%",
            }}
            size={"large"}
            placeholder={"请输入关键词"}
            onFocus={model.toggleExpand}
            value={model.keyword}
            suffix={<SearchOutlined />}
            bordered={false}
            onChange={(e) => {
              model.updateKeyword(e.target.value);
            }}
            onPressEnter={model.search}
          />
        </S.SearchContainer>
      </S.Center>
      <CollapseButton
        type="default"
        icon={model.collapsed ? <DownOutlined /> : <UpOutlined />}
        onClick={model.collapsed ? model.toggleExpand : model.toggleCollapsed}
      />
    </S.Container>
  );
});

const CollapseButton = styled(Button)`
  /* position: absolute; */
  bottom: 20px;
  right: 10%;
`;
