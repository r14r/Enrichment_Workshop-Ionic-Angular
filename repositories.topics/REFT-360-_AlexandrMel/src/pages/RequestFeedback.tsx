import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover,
  IonAvatar,
  IonItemDivider,
  IonFabButton,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
} from "@ionic/react";
import "./RequestFeedback.scss";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  helpOutline,
  starHalfOutline,
  personAddOutline,
  personRemoveOutline,
  thumbsUpOutline,
  thumbsDownOutline,
  earOutline,
  chatbubbleEllipsesOutline,
  sadOutline,
  happyOutline,
} from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";

interface AboutProps {}

const RequestFeedback: React.FC<AboutProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();
  const [location, setLocation] = useState<
    "madison" | "austin" | "chicago" | "seattle"
  >("madison");
  const [conferenceDate, setConferenceDate] = useState(
    "2047-05-17T00:00:00-05:00"
  );

  const selectOptions = {
    header: "Select a Location",
  };

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  // momentjs would be a better way to do this https://momentjs.com/
  function displayDate(date: string, format: string) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date(date);
    const year = d.getFullYear();

    if (format === "y") {
      return year;
    } else {
      const month = monthNames[d.getMonth()];
      const day = d.getDate();

      return month + " " + day + ", " + year;
    }
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar className="ion-text-center center-title">
          <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/home" />
            </IonButtons>
              <IonTitle>
                Request Feedback
              </IonTitle>
           
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="big-circle-pic-req">
                <IonButton
                href="/tabs/advice"
                  className="advice_btn"
                  shape="round"
                  expand="block"
                  color="secondary"
                  fill="outline"
                >
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonIcon icon={chatbubbleEllipsesOutline}></IonIcon>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonButton>
                <IonLabel className="adviceBtnLabel">Advice</IonLabel>
                <IonButton
                  className="rating_btn"
                  shape="round"
                  expand="block"
                  color="secondary"
                  fill="outline"
                >
                  <IonIcon className="iconDuble3" icon={sadOutline} />
                  <IonIcon className="iconDuble4" icon={happyOutline} />
                </IonButton>
                <IonLabel className="ratingBtnLabel">Rating</IonLabel>
                <IonButton
                  className="plus_minus_btn"
                  shape="round"
                  expand="block"
                  color="secondary"
                  fill="outline"
                >
                  <IonIcon className="iconDuble" icon={thumbsUpOutline} />
                  <IonIcon className="iconDuble2" icon={thumbsDownOutline} />
                </IonButton>
                <IonLabel className="plus_minusBtnLabel">+ and -</IonLabel>
                <div>
                  <IonButton
                    className="but"
                    shape="round"
                    color="secondary"
                    expand="block"
                  >
                    <img src="https://img.icons8.com/ios/50/000000/drag-list-down.png" />
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(RequestFeedback);
