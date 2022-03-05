import { Grid } from "@nextui-org/react";
import InputText from "../components/Input/inputText";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import { pageTitle, bgText } from "../style.module.css";
import InputTextArea from "../components/Input/inputTextArea";
import { Button } from '@nextui-org/react';

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Layout className={bgText}> </Layout>
      <h1 className={pageTitle}>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container gap={4}>
          <Grid xs={12}>
            <InputText
              name="lastname"
              label="Nom"
              control={control}
              errors={errors}
              required={true}
              rules={{
                required: { value: true, message: "Veuillez saisir votre nom de famille." },
              }}
            />
          </Grid>
          <Grid xs={12}>
            <InputText
              name="firstname"
              label="Prénom"
              control={control}
              errors={errors}
              required={true}
              rules={{
                required: { value: true, message: "Veuillez saisir votre prénom." },
              }}
            />
          </Grid>
          <Grid xs={12}>
            <InputText
              required={true}
              name="email"
              label="Email"
              control={control}
              type="email"
              rules={{
                required: { value: true, message: "Veuillez saisir votre adresse mail." },
              }}
              errors={errors}
            />
          </Grid>
          <Grid xs={12}>
            <InputTextArea
              required={true}
              name="message"
              label="Message"
              control={control}
              rules={{
                required: { value: true, message: "Veuillez saisir votre message." },
              }}
              errors={errors}
            />
          </Grid>
          <Grid xs={12} alignItems="center" justify="center">
            <Button type="submit" color="primary" ghost >
              Envoyer le mail
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </>
  );
};

export default Contact;
