import MtMap from "./libs/MtMap";

import MtTileLayer from "./libs/layers/MtTileLayer";
import MtVectorLayer from "./libs/layers/MtVectorLayer";
import MtWmsLayer from "./libs/layers/MtWmsLayer";
import MtImageLayer from "./libs/layers/MtImageLayer";
import MtParticleLayer from "./libs/layers/MtParticleLayer";

import MtMarker from "./libs/geometries/MtMarker";
import MtLabel from "./libs/geometries/MtLabel";
import MtLineString from "./libs/geometries/MtLineString";
import MtPolygon from "./libs/geometries/MtPolygon";
import MtCircle from "./libs/geometries/MtCircle";
import MtEllipse from "./libs/geometries/MtEllipse";
import MtRectangle from "./libs/geometries/MtRectangle";
import MtSector from './libs/geometries/MtSector';

import MtMultiPoint from "./libs/multiGeometries/MtMultiPoint";
import MtMultiLineString from "./libs/multiGeometries/MtMultiLineString";
import MtMultiPolygon from "./libs/multiGeometries/MtMultiPolygon";

import MtAttribution from "./libs/controllers/MtAttribution";
import MtMenu from "./libs/ui/MtMenu";
import MtOverview from "./libs/controllers/MtOverview";
import MtPanel from "./libs/controllers/MtPanel";
import MtScale from "./libs/controllers/MtScale";
import MtToolbar from "./libs/controllers/MtToolbar";
import MtZoom from "./libs/controllers/MtZoom";

import MtInfoWindow from "./libs/ui/MtInfoWindow";
import MtUMarker from "./libs/ui/MtUMarker";

import MtDrawTool from "./libs/tools/MtDrawTool";
import MtDistanceTool from "./libs/tools/MtDistanceTool";
import MtAreaTool from "./libs/tools/MtAreaTool";

const components = [
  MtMap,

  MtTileLayer,
  MtVectorLayer,
  MtWmsLayer,
  MtImageLayer,
  MtParticleLayer,

  MtMarker,
  MtLabel,
  MtPolygon,
  MtLineString,
  MtCircle,
  MtEllipse,
  MtRectangle,
  MtSector,

  MtMultiPoint,
  MtMultiLineString,
  MtMultiPolygon,

  MtAttribution,
  MtMenu,
  MtOverview,
  MtPanel,
  MtScale,
  MtToolbar,
  MtZoom,

  MtDrawTool,
  MtDistanceTool,
  MtAreaTool,

  MtInfoWindow,
  MtUMarker,
]

const Vue2Maptalks = {};

Vue2Maptalks.install = (Vue) => {
  components.forEach(comp => {
    Vue.component(comp.name, comp);
  })
}

export {
  Vue2Maptalks,

  MtMap,

  MtTileLayer,
  MtVectorLayer,
  MtWmsLayer,
  MtImageLayer,
  MtParticleLayer,

  MtMarker,
  MtLabel,
  MtPolygon,
  MtLineString,
  MtCircle,
  MtEllipse,
  MtRectangle,
  MtSector,

  MtMultiPoint,
  MtMultiLineString,
  MtMultiPolygon,

  MtAttribution,
  MtMenu,
  MtOverview,
  MtPanel,
  MtScale,
  MtToolbar,
  MtZoom,

  MtDrawTool,
  MtDistanceTool,
  MtAreaTool,

  MtInfoWindow,
  MtUMarker,
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue2Maptalks.install(window.Vue);
}
