declare global {
  interface Window {
    adobeDataLayer: AdobeClientDataLayer;
  }
}

import { MagentoDataLayer } from "..";
import { EventName } from "../eventNames";

// TODO: Add type definition for ACDL
type AdobeClientDataLayer = any;

type MagentoDataLayerEventHandler = (
  eventName: EventName,
  mdl: MagentoDataLayer
) => void;
