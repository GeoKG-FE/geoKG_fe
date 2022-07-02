import { Layout } from "antd";
import { useMemo } from "react";
import { Detail } from "@components/Detail";
import { CustomGraph } from "@components/Graph";
import { Filter } from "@components/Search";
import { MainMenu } from "@components/Menu";
import { GraphModelContext } from "../../context/GraphModelContext";
import GraphModel from "@model/graph";
import { AlgorithmSetting } from "@components/AlgorithmSetting";
const { Header, Content } = Layout;

export const App: React.FC = () => {
  const graphModel = useMemo(() => new GraphModel(), []);
  return (
    <GraphModelContext.Provider value={graphModel}>
      <Layout>
        <Header>
          <MainMenu />
        </Header>
        <Layout>
          <Filter />
          <Layout>
            <Content>
              <AlgorithmSetting />
              <CustomGraph />
            </Content>
            <Detail />
          </Layout>
        </Layout>
      </Layout>
    </GraphModelContext.Provider>
  );
};
