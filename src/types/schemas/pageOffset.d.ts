interface PageOffset {
  eventType?: "pageUnload" | "visibilityHidden";
  maxXOffset: number;
  maxYOffset: number;
  minXOffset: number;
  minYOffset: number;
  ping_interval: number;
  pings: number;
}
