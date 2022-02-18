import Image from "next/image";

import Layout from "../components/Layout/Layout";
import { bgWrap, bgText } from "../style.module.css";

const Index = () => (
  <div >
    <Layout className={bgText}> </Layout>
    <div className={bgWrap}>
      <Image
        src="/home2.jpg"
        alt="photo mariage acceuil"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
);

export default Index;
