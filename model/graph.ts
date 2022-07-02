import { GraphData, NodeConfig } from "@antv/g6";
import { action, makeObservable, observable } from "mobx";

class GraphModel {
  data: GraphData = null as any;
  rawData: GraphData = null as any;
  selectedNode: NodeConfig | null = null;
  constructor() {
    makeObservable(this, {
      data: observable,
      selectedNode: observable,
      updateData: action,
      reset: action,
      selectNode: action,
      resetSelectNode: action,
    });
  }
  updateData = (data: GraphData) => {
    this.data = data;
    this.rawData = { ...data };
  };
  reset = () => {
    this.data = { ...this.rawData };
  };
  selectNode = (node: NodeConfig) => {
    this.selectedNode = node;
  };
  resetSelectNode = () => {
    this.selectedNode = null;
  };
}

export default GraphModel;
