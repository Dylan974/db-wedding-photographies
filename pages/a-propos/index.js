import Layout from "../../components/Layout/Layout";
import { Text } from "@nextui-org/react";
import { pageTitle } from "../../style.module.css";

const Index = () => (
  <div>
    <Layout />
    <Text h1 className={pageTitle}>
      A propos
    </Text>
    <Text margin={"30px"}>
      Je suis Dylan Boyer, photographe exerçant à l'île de La Réunion. Depuis
      toujours, j'aime les histoires de toute sortes. J'ai passé la majeure
      partie de mon temps libre à découvrir des histoires. Au moment de vouloir
      les raconter à mes proches, je ne trouvait pas les mots justes pour
      transmettre toutes les émotions vécus sur le moment.
    </Text>
    <Text margin={"30px"}>
      C'est en découvrant la photographie que j'ai su comment transmettre ces
      émotions... En les capturant au moment où ils se manifestent !
    </Text>
  </div>
);

export default Index;
