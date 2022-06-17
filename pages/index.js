import graphql from "../lib/graphql";
import getAllProducts from "../lib/graphql/queries/getAllProducts";

export const getStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts);
  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};
