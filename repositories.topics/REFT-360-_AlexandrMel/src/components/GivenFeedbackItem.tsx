import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonList,
  IonItemDivider,
  IonGrid,
  IonCol,
  IonRow,
  IonTextarea,
  IonText,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";

const SpeakerItem: React.FC<any> = ({ feedback }) => {
  return (
    <>
      <IonCard className="givenFeedback-card">
        <IonCardHeader>
          <IonItemDivider>
            <IonItem
              button
              detail={false}
              lines="none"
              className="givenFeedback-item"
            >
              <IonAvatar slot="start">
                <img
                  src="https://lh3.googleusercontent.com/proxy/4v-0MMrWbsooXAHKEym4cNYCKDP7jIh8zgU0QIyfVdumognYU1kI4vGO7i4VoK6bpP8YKeILUSJSC_7Q_MkvZVgl6lKBnxSA7nxGnxTDyZIXDqWMrIh1yI16MuXXCbH0Ey9wc0_LlYGB"
                  alt="avatar"
                />
              </IonAvatar>
              <IonLabel>
                <h2>{feedback.personReceiveFeedback}</h2>
              </IonLabel>
            </IonItem>
          </IonItemDivider>
          <IonItem>
            <IonGrid>
              <IonRow className="GivenFeedbackRow">
                <IonCol className="ion-text-left">
                  <p>
                    Event: <b>{feedback.eventType}</b>
                  </p>
                </IonCol>
                <IonCol>
                  <p>
                    Date: <b>{feedback.eventDate}</b>
                  </p>
                </IonCol>
              </IonRow>
              <IonRow className="GivenFeedbackRow">
                <IonCol>
                  <p>
                    Topic: <b>{feedback.eventName}</b>
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
            {feedback.feedbacksArr.map((x: any) => {
              return (
                <IonItem>
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonCardTitle>Question: {x.Question}</IonCardTitle>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonCardSubtitle> <em>Answer:</em> {x.Answer}</IonCardSubtitle>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              );
            })}
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default SpeakerItem;
