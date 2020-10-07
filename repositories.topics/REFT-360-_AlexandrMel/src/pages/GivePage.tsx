import React, { useState, Fragment } from "react";
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
  IonAlert,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover,
  IonAvatar,
  IonItemDivider,
  IonFabButton,
  IonToggle,
  IonToast,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonInput,
  IonTextarea,
  IonImg,
} from "@ionic/react";
import {
  ellipsisHorizontal,
  ellipsisVertical,
  personCircleOutline,
  homeOutline,
  home,
  heart,
  pin,
  star,
  call,
  globe,
  basket,
  bulbOutline,
  chatbubbleOutline,
  barChartOutline,
  chatbubblesOutline,
  starHalfOutline,
  swapVerticalOutline,
  informationCircleOutline,
  addCircleOutline,
  removeCircleOutline,
  helpBuoyOutline,
  helpOutline,
  layersOutline,
  sendOutline,
  removeOutline,
  trashBinOutline,
  trashOutline,
  bulb,
  cogOutline,
  colorPaletteOutline,
  ribbonOutline,
  trendingUpOutline,
  thunderstormOutline,
  trailSignOutline,
  starOutline,
} from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";
import "./GivePage.scss";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [searchText, setSearchText] = useState<any>();
  const [mainTab, setMainTab] = useState<any>("open_feedback");
  const [plusMinusTab, setPlusMinusTab] = useState<any>("+and-");
  const [checked, setChecked] = useState<any>(false);
  const [checked1, setChecked1] = useState<any>(false);
  const [adviceText, setAdviceText] = useState<any>(
    "Give me your opinion about..."
  );
  const [toppings, setToppings] = useState<any>("heart");
  const [names, setNames] = useState<[]>([]);
  const [showAlert1, setShowAlert1] = useState(false);
  const [toppings1, setToppings1] = useState([]);
  const [toppings2, setToppings2] = useState([]);
  const [toppings3, setToppings3] = useState([]);
  const [toppings4, setToppings4] = useState([]);
  const [toppings5, setToppings5] = useState([]);
  const [toppings6, setToppings6] = useState<any>(null);
  const [newQuestion, setNewQuestion] = useState<any>("");
  const [questionArr, setQuestionArr] = useState<any>([]);
  const [showToast1, setShowToast1] = useState(false);

  const removerOpenQuestion = (index: any) => {
    const newArr = questionArr.filter((el: String, i: number) => i !== index);
    setQuestionArr(newArr);
  };
  console.log(toppings2);
  const addName = () => {
    console.log(searchText);
    let newName: any = names;
    newName = [...names, searchText];
    setNames(newName);
    console.log(names);
  };
  return (
    <IonPage>
      <IonContent>
        <IonHeader >
          <IonToolbar className="ion-text-center">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/home" />
            </IonButtons>
            <IonTitle>Give Feedback</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="5">
              <IonSelect placeholder="Select Event" interface="action-sheet">
                <IonSelectOption value="meeting">Meeting</IonSelectOption>
                <IonSelectOption value="presentation">
                  Presentation
                </IonSelectOption>
                <IonSelectOption value="training">Training</IonSelectOption>
                <IonSelectOption value="workshop">Workshop</IonSelectOption>
                <IonSelectOption value="project">Project</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonCol>
            <IonCol size="7">
              <IonInput
                className="ion-text-center"
                mode="ios"
                type="date"
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonInput
                        color="dark"
                        placeholder="Type in the event name"
                      ></IonInput>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonSearchbar
                autocomplete="on"
                color="primary"
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
                onBlur={addName}
                showCancelButton="focus"
                placeholder="Search and add teammate by name"
              ></IonSearchbar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>
                <IonIcon slot="start" icon={personCircleOutline}></IonIcon>
                <IonLabel>
                  <IonGrid>
                    <IonRow>
                      {names.map((name: any) => {
                        return <IonCol>{name}</IonCol>;
                      })}
                    </IonRow>
                  </IonGrid>
                </IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSegment
                mode="ios"
                onIonChange={(e) => setMainTab(e.detail.value)}
                value={mainTab}
                color="danger"
              >
                <IonSegmentButton className="advice_Tab" value="open_feedback">
                  <IonIcon icon={chatbubbleOutline} />
                  <IonLabel>Open Feedback</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="plus_Minus_Tab" value="templates">
                  <IonIcon icon={swapVerticalOutline} />
                  <IonLabel>Templates</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          {mainTab === "templates" && (
            <React.Fragment>
              <IonItem className="infoIconContainer">
                <IonIcon
                  onClick={() => setShowAlert1(true)}
                  slot="end"
                  icon={informationCircleOutline}
                ></IonIcon>
              </IonItem>
              <IonRow>
                <IonCol className="Templates_Segment">
                  <IonSegment
                    mode="ios"
                    onIonChange={(e) => setAdviceText(e.detail!.value!)}
                    scrollable
                    color="primary"
                    value={adviceText}
                  >
                    <IonSegmentButton value="Great Idea! Let’s move forward with...">
                      <IonIcon icon={bulbOutline} />
                      <IonLabel>Idea</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Thank you for your support on...">
                      <IonIcon icon={cogOutline} />
                      <IonLabel>Support</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Thanks, you have made a valuable contribution on...">
                      <IonIcon icon={colorPaletteOutline} />
                      <IonLabel>Contribution</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Well done. Be proud of it. You have done a great job...">
                      <IonIcon icon={ribbonOutline} />
                      <IonLabel>Achievement</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="I see the effort you have done so far, you have made good progress with...">
                      <IonIcon icon={trendingUpOutline} />
                      <IonLabel>Progress</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Yes, it is not like you’ve expected. But I am confident you’ll do things differently next time. Go ahead and you’ll succeed...">
                      <IonIcon icon={thunderstormOutline} />
                      <IonLabel>Mistake</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Sometimes you can't see the light at the end of the tunnel. Focus on solutions, I am sure you'll find one...">
                      <IonIcon icon={trailSignOutline} />
                      <IonLabel>Challenge</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="I’m impressed, you have really a natural strength in...">
                      <IonIcon icon={starOutline} />
                      <IonLabel>Impressed</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="I would like to share with you my thoughts on...">
                      <IonIcon icon={chatbubblesOutline} />
                      <IonLabel>Opinion</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="I would recommend you to...">
                      <IonIcon icon={chatbubbleOutline} />
                      <IonLabel mode="ios">Improvement</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">
                      Complete the sentence
                    </IonLabel>
                    <IonTextarea
                      auto-grow="true"
                      value={adviceText}
                      color="secondary"
                    ></IonTextarea>
                  </IonItem>
                </IonCol>
              </IonRow>
            </React.Fragment>
          )}
          {mainTab === "open_feedback" && (
            <React.Fragment>
              <IonItem className="infoIconContainer">
                <IonIcon
                  onClick={() => setShowAlert1(true)}
                  slot="end"
                  icon={informationCircleOutline}
                ></IonIcon>
              </IonItem>
              <IonItem>
                <IonLabel color="medium" position="floating">Type in your open-ended feedback...</IonLabel>
                <IonInput
                  onIonChange={(e) => setNewQuestion(e.detail.value)}
                  auto-grow="true"
                  color="dark"
                  value={newQuestion}
                ></IonInput>
              </IonItem>
            </React.Fragment>
          )}
      {/* <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton> */}
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Your feedback has been sent!"
        duration={1000}
        translucent={true}
      />
          <IonButton
            onClick={() => setShowToast1(true)}
            // onClick={(e) => setAdviceText("The request was sent!")}
            expand="block"
            fill="outline"
          >
            SEND
          </IonButton>
        </IonGrid>
        <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          header={"Advice"}
          // subHeader={""}
          message={
            "Refers to a personal point of view and is a recommendation offered as a guide to action. Choose one option and complete the request by typing in the text field."
          }
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default React.memo(About);
