import { Fragment } from "react";
import {
  Header,
  SectionCompanies,
  SectionFeatures,
  SectionHero,
} from "./components";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
    </Fragment>
  );
}
