import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Footer } from '~/components/Layout';
import { Hero } from '~/components/Layout/Hero/Hero';
import { Layout } from '~/components/Layout/Layout';
import { SplitContent } from '~/components/Layout/Section/SplitContent';
import { ButtonLink } from '~/components/Links/ButtonLink';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} navigation={false}>
      <HelmetSeo
        title="Radschnellwege"
        description="Hier entsteht die Informationsstelle für Radschnellverbindungen in Deutschland"
      />
      <Hero
        highlightedTitle="Radschnellverbindungen"
        title="schneller planen und bauen"
      >
        <div className="rounded-full">
          <ButtonLink
            to="/karte"
            className="w-full px-8 py-3 shadow md:text-lg"
          >
            Zur Karte
          </ButtonLink>
        </div>
        <div className="mt-3 rounded-full  sm:mt-0 sm:ml-3">
          <ButtonLink
            to="/projekte"
            className="btn-brand-outline w-full px-8 py-3 shadow md:text-lg"
          >
            Beteiligen
          </ButtonLink>
        </div>
      </Hero>
      <SplitContent />
    </Layout>
  );
};

export default IndexPage;
