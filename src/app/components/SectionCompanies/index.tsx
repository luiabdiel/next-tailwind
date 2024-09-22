import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return (
    <section className="pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium mb-8">
          Join 4,000+ companies already growing
        </p>
        <div className="flex items-center justify-between">
          <Image src="/layers.svg" width={146} height={48} alt="Layers" />
          <Image src="/sisyphus.svg" width={169} height={48} alt="Sisyphus" />
          <Image src="/circooles.svg" width={183} height={44} alt="Circooles" />
          <Image src="/catalog.svg" width={160} height={48} alt="Catalog" />
          <Image src="/quotient.svg" width={187} height={44} alt="Quotient" />
        </div>
        <hr className="mt-24 border-gray-200" />
      </GridContainer>
    </section>
  );
}
