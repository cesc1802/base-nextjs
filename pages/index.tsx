import {
  Class,
  GeneraInformation,
  Rank,
  UniqueFeatures,
} from "@/components/Homepage";
import { PageSeo } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata.json";

export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div>
        <UniqueFeatures />
        <GeneraInformation />
        <Rank />
        <Class />
      </div>
    </>
  );
}
