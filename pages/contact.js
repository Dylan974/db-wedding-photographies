import { Grid, Input } from "@nextui-org/react";
import InputText from "../components/Input/inputText";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import { bgWrap, bgText } from "../style.module.css";

const Contact = () => {
  const { handleSubmit, control } = useForm();

  return (
    <>
      <Layout className={bgText}> </Layout>
      <Grid.Container gap={4}>
        <Grid xs={12} md={6}>
          <InputText name="Nom" control={control} />
        </Grid>
        <Grid xs={12} md={6}>
          <InputText name="Prénom" control={control} />
        </Grid>
        <Grid xs={12}>
          <InputText name="Email" control={control} />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Contact;
