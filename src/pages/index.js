import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../layouts/layout';
import ImageWithText from '../components/ImageWithText';
import ImageWithTextBackground from '../assets/bg-image.jpg';
import Hero from '../sections/Hero';
import BestSellers from '../sections/BestSellers';
import ReviewsSection from '../sections/ReviewsSection';

const IndexPage = () => {
  const data = useStaticQuery(query);
  const products = data.allProduct.nodes;
  const reviews = [
    {
      review: 'The E-Book from fueldumps.com saved me over $2000 on my next family vacation.',
      author: 'Jonas Tannenbaum',
    },
    {
      review: 'Absolute impressive. Fly more for less.',
      author: 'Kate o Reilly',
    },
    {
      review: 'A real game changer. The ebook is worth every penny.',
      author: 'John Doe',
    },
  ];

  return (
    <Layout additionalClass={['bg-white']}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      <Hero
        headerText="Axe fuel charges and save big on your next ticket"
        paragraphText="Check our guides on fuel dumping and learn how you can save over 90% on your next flight"
        buttonLabel="All the products"
        heroImage={data.heroImage}
      />
      <BestSellers products={products} additionalClass={['bg-green-gray py-14']} headerText="Products" />
      <ReviewsSection
        headerText="Reviews"
        reviews={reviews}
        additionalClass={['my-10 lg:my-24']}
      />
    </Layout>
  );
};

const query = graphql`
query indexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProduct(sort: {flotiqInternal: {createdAt: DESC}}, limit: 4) {
      nodes {
        name
        price
        slug
        description
        id
        productGallery {
          extension
          url
          width
          height
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
        productImage {
          extension
          url
          width
          height
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
    heroImage: file(name: {eq: "hero-bg"}) {
      publicURL
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
  }
`;

export default IndexPage;
