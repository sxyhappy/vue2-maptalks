<template>
  <div>
  </div>
</template>

<script>
import { AreaTool } from 'maptalks';

import map from "../../mixins/map";
import options from "../../mixins/options";
import tool from "../../mixins/tool";
import measure from "../../mixins/measure";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtAreaTool',
  mixins: [map, options, tool, measure],
  mounted() {
    this.generateTools();
  },
  methods: {
    generateTools() {
      this.tool = new AreaTool(mergeProps(this));
      bindEvent(this.tool, this, []);
      watchProps(this, this.tool, [], this.mergeOptions);

      this.bindEnableEvent();

      this.addToolToMap(this.tool);
      this.tool.addTo(this.map);
      this.setEnable(this.enable);
    }
  }
}
</script>
