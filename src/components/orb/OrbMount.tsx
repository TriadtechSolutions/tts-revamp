"use client";

import Orb from "./Orb";

export default function OrbMount() {
  return (
    <div id="orb-root" aria-hidden="true">
      <Orb hoverIntensity={0.5} rotateOnHover forceHoverState={false} />
    </div>
  );
}
