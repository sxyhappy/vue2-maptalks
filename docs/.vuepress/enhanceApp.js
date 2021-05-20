import * as maptalks from 'maptalks';
import 'maptalks/dist/maptalks.css';
import { Vue2Maptalks } from '../../src';

export default ({Vue, options, router, siteData, isServer}) => {
  Vue.use(Vue2Maptalks);
}
