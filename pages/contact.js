import { Grid, Loading } from "@nextui-org/react";
import InputText from "../components/Input/inputText";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout/Layout";
import { pageTitle, bgText } from "../style.module.css";
import InputTextArea from "../components/Input/inputTextArea";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async () => {
    setLoading(true);
    const res = await axios.post("/api/contact", getValues());
    setLoading(false);
    if(res.status === 200) {
      reset({});
      toast.success("Votre mail a été envoyé", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
      });
    } else {
      toast.error("Une erreur est survenue ! Veuillez réessayer", {
        position: "bottom-center",
        autoClose: 10000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
      });
    }
  };

  return (
    <>
      <Layout className={bgText}> </Layout>
      <h1 className={pageTitle}>Contact</h1>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container gap={4}>
          <Grid xs={12}>
            <InputText
              name="lastname"
              label="Nom"
              readonly={loading}
              control={control}
              errors={errors}
              required={true}
              rules={{
                required: {
                  value: true,
                  message: "Veuillez saisir votre nom de famille.",
                },
              }}
            />
          </Grid>
          <Grid xs={12}>
            <InputText
              name="firstname"
              label="Prénom"
              readonly={loading}
              control={control}
              errors={errors}
              required={true}
              rules={{
                required: {
                  value: true,
                  message: "Veuillez saisir votre prénom.",
                },
              }}
            />
          </Grid>
          <Grid xs={12}>
            <InputText
              required={true}
              name="email"
              label="Email"
              readonly={loading}
              control={control}
              type="email"
              rules={{
                required: {
                  value: true,
                  message: "Veuillez saisir votre adresse mail.",
                },
              }}
              errors={errors}
            />
          </Grid>
          <Grid xs={12}>
            <InputTextArea
              required={true}
              name="message"
              label="Message"
              readonly={loading}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Veuillez saisir votre message.",
                },
              }}
              errors={errors}
            />
          </Grid>
          <Grid xs={12} alignItems="center" justify="center">
            <Button type="submit" color="primary" ghost>
              {loading ? (
                <Loading type="points" />
              ) : (
                <span>Envoyer le mail</span>
              )}
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </>
  );
};

export default Contact;
