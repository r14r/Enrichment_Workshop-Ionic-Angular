import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import "./GivenFeedback.scss";
import GivenFeedbackItem from "../components/GivenFeedbackItem";

interface OwnProps {}

interface GivenFeedback {}

const GivenFeedback: React.FC<GivenFeedback> = () => {
  const [givenFeedbacks, setGivenFeedbacks] = useState([
    {
      id: 12345,
      personGiveFeedback: "Alexandr",
      personReceiveFeedback: "Rebbeca",
      eventType: "Meeting",
      eventDate: "05.06.2020",
      eventName: "Prototyping Meeting",
      category: "Open Feedback",
      subcategory: "Open Feedback",
      feedbacksArr: [
        {
          Question: "Open Feedback",
          Answer: "I see you are doing very well with Figma prototyping",
        },
      ],
    },
  ]);
  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Given Feedback</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Speakers</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid fixed>
          {givenFeedbacks.map((el) => (
            <IonRow>
              <IonCol>
              <GivenFeedbackItem feedback={el} />
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default GivenFeedback;
