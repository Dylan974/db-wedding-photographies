import { Grid, Input } from "@nextui-org/react";
import InputText from "../components/Input/inputText";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import { bgWrap, bgText } from "../style.module.css";
import InputTextArea from "../components/Input/inputTextArea";

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("TEST");
    console.log(errors);
    console.log(data);
  };

  return (
    <>
      <Layout className={bgText}> </Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container gap={4}>
          <Grid xs={12}>
            <InputText
              name="Nom"
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
              name="Prénom"
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
              name="Email"
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
              name="Message"
              control={control}
              rules={{
                required: { value: true, message: "Veuillez saisir votre adresse mail." },
              }}
              errors={errors}
            />
          </Grid>
        </Grid.Container>
        <input type="submit" />
      </form>
    </>
  );
};

export default Contact;
