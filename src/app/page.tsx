import { Fragment } from "react";
import { SectionCompanies, SectionFeatures, SectionHero } from "./components";

export default function Home() {
  return (
    <Fragment>
      <SectionHero />
      <SectionCompanies />
      {/* <SectionFeatures /> */}
    </Fragment>
  );
}
