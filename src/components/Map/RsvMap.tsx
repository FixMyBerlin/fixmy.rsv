import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getOptInCookie, OptIn } from '~/components/CookieConsent/';
import { MetaJson, StaticMap } from '~/types/index';
import { DynamicMap, Attribution } from '.';

type Props = {
  meta: MetaJson & StaticMap;
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

export const RSVMap: React.FC<Props> = ({ meta, geometry }) => {
  const [consent, setConsent] = useState<boolean | null>(true);
  useEffect(() => setConsent(getOptInCookie()));

  return (
    <div className="relative max-h-full max-w-full">
      {consent === null && (
        <div className="absolute bottom-0 z-20 mx-2 translate-y-1 md:mx-5">
          <OptIn setConsent={setConsent} />
        </div>
      )}
      <div className="absolute bottom-0 right-0 z-10 mr-2 mb-1 translate-y-1 translate-x-1 text-xs">
        <Attribution />
      </div>
      {consent && <DynamicMap geometry={geometry} />}
      <GatsbyImage image={getImage(meta.staticMap)} alt="Statische Karte" />
    </div>
  );
};
