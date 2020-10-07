import React from "react";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonLoading,
} from "@ionic/react";
import firebase from "../../firebase";
import useForm from "../../hooks/useForm";
import validateEditProfile from "../../validators/validateEditProfile";
import UserContext from "../../contexts/UserContext";
import { toast } from "../../helpers/toast";
import NavHeader from "../Headers/NavHeader";
import "../../theme/variables.css";

const EditProfile = (props) => {
  const { user, setUser } = React.useContext(UserContext);
  const INITIAL_STATE = {
    name: user && user.displayName,
    email: user && user.email,
    newPassword: "",
    currentPassword: "",
  };
  const {
    handleSubmit,
    handleChange,
    setValues,
    values,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateEditProfile, authenticateUser);
  const [busy, setBusy] = React.useState(false);

  async function reauthenticate(email, password) {
    const credential = firebase.app.auth.EmailAuthProvider.credential(
      email,
      password
    );
    try {
      await user.reauthenticateWithCredential(credential);
      console.log("Reauthentication Successful");
    } catch (err) {
      console.error("Profile Update Error", err);
      toast(err.message);
    }
  }

  async function updateProfileItems(name, email, password) {
    await user.updateProfile({
      displayName: name,
    });
    await user.updateEmail(email);
    if (password) {
      await user.updatePassword(password);
    }
  }

  async function authenticateUser() {
    setBusy(true);
    const { name, email, currentPassword, newPassword } = values;
    try {
      await reauthenticate(user.email, currentPassword);
      await updateProfileItems(name, email, newPassword);
      const result = await firebase.login(
        email,
        newPassword || currentPassword
      );
      setValues({
        name: user && user.displayName,
        email: user && user.email,
        newPassword: "",
        currentPassword: "",
      });
      setUser(result.user);
      toast("You have updated your profile successfully.");
      props.history.push("/profile");
    } catch (err) {
      console.error("Profile Update Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonContent>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <NavHeader title="Edit Profile" href="/profile" />

          <IonLoading message={"Please wait..."} isOpen={busy} />

          <IonItem lines="full">
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              name="name"
              type="text"
              value={values.name}
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              name="email"
              type="text"
              value={values.email}
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Current Password</IonLabel>
            <IonInput
              name="currentPassword"
              type="password"
              value={values.currentPassword}
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">New Password</IonLabel>
            <IonInput
              name="newPassword"
              type="password"
              value={values.newPassword}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
          
          <IonRow>
            <IonCol>
              <IonButton
                className="tc ma3"
                type="submit"
                color="primary"
                expand="block"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </article>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
