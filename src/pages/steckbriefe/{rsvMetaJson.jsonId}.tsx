import { graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { RSVDetails } from '~/components/Layout/Section/RSVDetails';

const Radschnellweg = ({ data: { meta, geometry } }) => {
  return (
    <Layout>
      <HelmetSeo
        title={meta.general.name}
        description={meta.general.description}
        image="TODO"
      />
      <RSVDetails meta={meta} geometry={geometry} />
    </Layout>
  );
};

export default Radschnellweg;

export const query = graphql`
  query ($jsonId: String!) {
    geometry: geometriesJson(name: { eq: $jsonId }) {
      bbox
      features {
        type
        bbox
        geometry {
          coordinates
          type
        }
        properties {
          variants
          state
          planning_phase
          length
          id_rsv
          id
          detail_level
        }
      }
      name
    }
    meta: rsvMetaJson(jsonId: { eq: $jsonId }) {
      general {
        description
        from
        name
        ref
        slug
        to
      }
      references {
        website
      }
      finished
      cost
      state
    }
  }
`;
