import Image from "next/image";

import Layout from "../components/Layout/Layout";
import { bgWrap, bgTextName, bgTextPhoto } from "../style.module.css";

const Index = () => (
  <div>
    <Layout> </Layout>
    <div className={bgWrap}>
      <Image
        src="/home2.jpg"
        alt="photo mariage acceuil"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className={bgTextName}>Dylan Boyer</p>
    <p className={bgTextPhoto}>Photographe de mariage</p>
  </div>
);

export default Index;
