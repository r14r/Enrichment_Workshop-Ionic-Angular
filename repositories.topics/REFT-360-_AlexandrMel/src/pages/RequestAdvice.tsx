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
  IonToast,
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
} from "ionicons/icons";
import AboutPopover from "../components/AboutPopover";
import "./RequestAdvice.scss";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [searchText, setSearchText] = useState<any>();
  const [mainTab, setMainTab] = useState<any>("advice");
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
        <IonHeader>
          <IonToolbar className="ion-text-center center-title">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/home" />
            </IonButtons>
            <IonTitle>Request Feedback</IonTitle>
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
                <IonSegmentButton className="advice_Tab" value="advice">
                  <IonIcon icon={chatbubbleOutline} />
                  <IonLabel>Advice</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="plus_Minus_Tab" value="+and-">
                  <IonIcon icon={swapVerticalOutline} />
                  <IonLabel>+ and -</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton className="rating_Tab" value="rating">
                  <IonIcon icon={starHalfOutline} />

                  <IonLabel>Rating</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          {mainTab === "advice" && (
            <React.Fragment>
              <IonItem className="infoIconContainer">
                <IonIcon
                  onClick={() => setShowAlert1(true)}
                  slot="end"
                  icon={informationCircleOutline}
                ></IonIcon>
              </IonItem>
              <IonRow>
                <IonCol className="Advice_Segment">
                  <IonSegment
                    mode="ios"
                    onIonChange={(e) => setAdviceText(e.detail!.value!)}
                    scrollable
                    color="primary"
                    value={adviceText}
                  >
                    <IonSegmentButton value="Give me your opinion about...">
                      <IonIcon icon={chatbubblesOutline} />
                      <IonLabel>Opinion</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Give me an idea on...">
                      <IonIcon icon={bulbOutline} />
                      <IonLabel>Idea</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Give me a hint for improving...">
                      <IonIcon icon={barChartOutline} />
                      <IonLabel>Improve</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="Please give me a suggestion on..">
                      <IonIcon icon={helpBuoyOutline} />
                      <IonLabel>Suggest</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">
                      Type in your feedback
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
          {mainTab === "+and-" && (
            <React.Fragment>
              <IonItem className="infoIconContainer">
                <IonIcon
                  onClick={() => setShowAlert1(true)}
                  slot="end"
                  icon={informationCircleOutline}
                ></IonIcon>
              </IonItem>

              <IonItem>
                <IonTitle size="small">What went well?</IonTitle>{" "}
                <IonToggle color="primary" />
              </IonItem>
              <IonItem>
                <IonTitle size="small">What can be improved?</IonTitle>{" "}
                <IonToggle color="secondary" />
              </IonItem>
              <IonItem>
                <IonTitle size="small">What should i avoid?</IonTitle>{" "}
                <IonToggle color="danger" />
              </IonItem>
              <IonItem>
                <IonTitle size="small">Add open questions!</IonTitle>{" "}
                <IonToggle
                  checked={checked}
                  onIonChange={(e) => setChecked(e.detail.checked)}
                  color="danger"
                />
              </IonItem>
              {checked === true && (
                <React.Fragment>
                  {questionArr.map((el: String, index: number) => (
                    <IonItem key={index}>
                      <IonIcon
                        onClick={(e) => removerOpenQuestion(index)}
                        icon={trashOutline}
                      ></IonIcon>
                      <IonTitle size="small">{el}</IonTitle>{" "}
                      <IonToggle checked={true} color="danger" />
                    </IonItem>
                  ))}
                  <IonItem className="ion-text-center">
                    <IonInput
                      onIonChange={(e) => setNewQuestion(e.detail.value)}
                      auto-grow="true"
                      placeholder="Type in your open-ended question..."
                      color="dark"
                      value={newQuestion}
                    ></IonInput>
                    <IonIcon
                      onClick={() => {
                        setQuestionArr([...questionArr, newQuestion]);
                        setNewQuestion("");
                      }}
                      color="secondary"
                      icon={sendOutline}
                    ></IonIcon>
                  </IonItem>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
          {mainTab === "rating" && (
            <React.Fragment>
              <IonItem className="infoIconContainer">
                <IonIcon
                  onClick={() => setShowAlert1(true)}
                  slot="end"
                  icon={informationCircleOutline}
                ></IonIcon>
              </IonItem>
              <IonItem>
                <IonLabel>Satisfaction</IonLabel>
                <IonSelect
                  value={toppings1}
                  multiple={true}
                  cancelText="Nah"
                  okText="Okay!"
                  onIonChange={(e) => setToppings1(e.detail.value)}
                >
                  <IonSelectOption value="overall satisfaction">
                    Overall Satisfaction
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>Delivery</IonLabel>
                <IonSelect
                  className="rating_option"
                  value={toppings2}
                  multiple={true}
                  cancelText="Nah"
                  okText="Okay!"
                  onIonChange={(e) => setToppings2(e.detail.value)}
                >
                  <IonSelectOption value="bacon">
                    <p>Professional and confident</p>
                  </IonSelectOption>
                  <IonSelectOption value="olives">
                    Engaged with audience
                  </IonSelectOption>
                  <IonSelectOption value="xcheese">
                    Clear voice with good pace
                  </IonSelectOption>
                  <IonSelectOption value="peppers">
                    Response to questions
                  </IonSelectOption>
                  <IonSelectOption value="mushrooms">
                    Apropriate length
                  </IonSelectOption>
                  <IonSelectOption value="onions">
                    Clear instructions
                  </IonSelectOption>
                  <IonSelectOption value="pepperoni">
                    Smooth transition between topics
                  </IonSelectOption>
                  <IonSelectOption value="pineapple">
                    Logical flow of ideas
                  </IonSelectOption>
                  <IonSelectOption value="sausage">
                    Complete agenda
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>Content</IonLabel>
                <IonSelect
                  value={toppings3}
                  multiple={true}
                  cancelText="Nah"
                  okText="Okay!"
                  onIonChange={(e) => setToppings3(e.detail.value)}
                >
                  <IonSelectOption value="quality of content">
                    Quality of content
                  </IonSelectOption>
                  <IonSelectOption value="clarity of content">
                    Clarity of content
                  </IonSelectOption>
                  <IonSelectOption value="originality of content">
                    Originality of content
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>Organization</IonLabel>
                <IonSelect
                  value={toppings4}
                  multiple={true}
                  cancelText="Nah"
                  okText="Okay!"
                  onIonChange={(e) => setToppings4(e.detail.value)}
                >
                  <IonSelectOption value="coordination">
                    Coordination
                  </IonSelectOption>
                  <IonSelectOption value="preparation">
                    Preparation
                  </IonSelectOption>
                  <IonSelectOption value="time management">
                    Time management
                  </IonSelectOption>
                  <IonSelectOption value="material preparation">
                    Material preparation
                  </IonSelectOption>
                  <IonSelectOption value="organization">
                    Organization
                  </IonSelectOption>
                  <IonSelectOption value="location">Location</IonSelectOption>
                  <IonSelectOption value="preparation of material">
                    Preparation of material
                  </IonSelectOption>
                  <IonSelectOption value="athmosphere">
                    Athmosphere
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>After event</IonLabel>
                <IonSelect
                  value={toppings5}
                  multiple={true}
                  cancelText="Nah"
                  okText="Okay!"
                  onIonChange={(e) => setToppings5(e.detail.value)}
                >
                  <IonSelectOption value="right number of participants">
                    Right number of participants
                  </IonSelectOption>
                  <IonSelectOption value="meeting minutes">
                    Meeting minutes
                  </IonSelectOption>
                  <IonSelectOption value="right people for decision talking">
                    Right people for decision talking
                  </IonSelectOption>
                  <IonSelectOption value="protocol">Protocol</IonSelectOption>
                  <IonSelectOption value="post event comunication">
                    Post event comunication
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonTitle size="small">Add open rating questions!</IonTitle>{" "}
                <IonToggle
                  checked={checked1}
                  onIonChange={(e) => setChecked1(e.detail.checked)}
                  color="danger"
                />
              </IonItem>
              {checked1 === true && (
                <IonItem className="ion-text-center">
                  <IonTextarea
                    auto-grow="true"
                    placeholder="Type in your open-ended question..."
                    color="secondary"
                    value={toppings6}
                    onIonChange={(e) => setToppings6(e.detail.value)}
                  ></IonTextarea>
                  <IonIcon icon={sendOutline}></IonIcon>
                </IonItem>
              )}
              <IonRow>
                <IonCol>
                  <IonItemDivider>
                    <IonIcon slot="start" icon={layersOutline}></IonIcon>
                    <IonLabel>
                      <IonGrid>
                        <IonRow>
                          {[
                            ...toppings1,
                            ...toppings2,
                            ...toppings3,
                            ...toppings4,
                            ...toppings5,
                            toppings6,
                          ].map((name: any) => {
                            return <IonCol>#{name}</IonCol>;
                          })}
                        </IonRow>
                      </IonGrid>
                    </IonLabel>
                  </IonItemDivider>
                </IonCol>
              </IonRow>
            </React.Fragment>
          )}
             <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Your feedback request has been sent!"
        duration={1000}
        translucent={true}
      />
          <IonButton
            // onClick={(e) => setAdviceText("The request was sent!")}
            expand="block"
            onClick={() => setShowToast1(true)}
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
