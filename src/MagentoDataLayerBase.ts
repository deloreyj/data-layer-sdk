import { MagentoDataLayer } from ".";
import { ContextName } from "./contextNames";
import { EventName } from "./eventNames";
import { MagentoDataLayerEventHandler, AdobeClientDataLayer } from "./types";

export abstract class MagentoDataLayerBase {
  protected mdl!: MagentoDataLayer;
  // Set a context on ACDL
  protected setContext<T>(name: ContextName, context: T): void {
    window.adobeDataLayer.push({
      [name]: context,
    });
  }
  // Get a context from ACDL
  protected getContext<T>(name?: ContextName): T {
    return window.adobeDataLayer.getState(name);
  }
  // Add event listener to ACDL
  protected addEventListener(
    name: EventName,
    handler: MagentoDataLayerEventHandler
  ): void {
    window.adobeDataLayer.push((mdl: AdobeClientDataLayer) => {
      mdl.addEventListener(name, (event: EventName) =>
        handler(event, this.mdl)
      );
    });
  }
  // Remove event listener from ACDL
  protected removeEventListener(
    name: EventName,
    handler: (event: Record<string, unknown>) => void
  ): void {
    window.adobeDataLayer.push((mdl: AdobeClientDataLayer) => {
      mdl.removeEventListener(name, handler);
    });
  }
  // Push event to ACDL
  protected pushEvent(event: EventName): void {
    window.adobeDataLayer.push((mdl: AdobeClientDataLayer) => {
      mdl.push({
        event,
      });
    });
  }
}
