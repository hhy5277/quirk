import React from "react";
import theme from "./theme";
import {
  Header,
  ParentComponent,
  Illustration,
  Container,
  Paragraph,
  ThoughtDook,
  RoundedButton,
} from "./ui";
import Swiper from "react-native-swiper";
import { View } from "react-native";
import CBTView from "./CBTView";
import { Thought } from "./thoughts";
import { normalize } from "./sizes";
import i18n from './i18n';

const thought: Thought = {
  automaticThought: i18n.t('onboarding_screen.auto_thought_ex'),
  challenge: i18n.t('onboarding_screen.challenge_ex'),
  alternativeThought: i18n.t('onboarding_screen.alt_thought_ex'),
  cognitiveDistortions: [
    { label: i18n.t('onboarding_screen.cog_distortion.label'), slug: i18n.t('onboarding_screen.cog_distortion.slug'), selected: true },
  ],
};

const BigParagraph = ({ children, style }: ParentComponent) => (
  <Paragraph
    style={{
      fontSize: normalize(18),
      margin: 0,
      padding: 12,
      marginRight: 25,
      borderRadius: 8,
      ...style,
    }}
  >
    {children}
  </Paragraph>
);

const ThoughtView = ({ children }) => (
  <View
    style={{
      flexDirection: "row",
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
    }}
  >
    <ThoughtDook
      style={{ marginRight: 18, marginLeft: 25 }}
      source={require("../assets/yellow/Dook.png")}
    />
    <BigParagraph
      style={{
        backgroundColor: theme.offwhite,
        borderRadius: 8,
      }}
    >
      {children}
    </BigParagraph>
  </View>
);

const Exaggerated = ({ children, style }: ParentComponent) => (
  <Header
    style={{
      color: theme.pink,
      marginBottom: 0,
      margin: 0,
      fontSize: normalize(48),
      ...style,
    }}
  >
    {children}
  </Header>
);

const LeftPushedHeader = ({ children, style }: ParentComponent) => (
  <Header
    style={{
      // Small bump to make things appear more left-aligned
      paddingRight: 48,
      marginBottom: 0,
      fontSize: normalize(48),
      flexWrap: "wrap",
      ...style,
    }}
  >
    {children}
  </Header>
);

const Main = ({ children, style }: ParentComponent) => (
  <Container
    style={{
      paddingTop: 50,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 50,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    {children}
  </Container>
);

const Intro = () => (
  <Main>
    <Illustration
      source={require("../assets/logo/logo.png")}
      style={{
        width: 180 * 0.75,
        height: 160 * 0.75,
        alignSelf: "center",
        marginTop: 32,
        marginBottom: 32,
      }}
    />
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.intro.line1')} <Exaggerated>{i18n.t('onboarding_screen.intro.emphasis1')}</Exaggerated>{i18n.t('onboarding_screen.intro.line2')}{" "}
      <Exaggerated>{i18n.t('onboarding_screen.intro.emphasis2')}</Exaggerated> {i18n.t('onboarding_screen.intro.line3')}
    </LeftPushedHeader>
  </Main>
);

const CrashCourse = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.crashCourse.line1')} <Exaggerated>{i18n.t('onboarding_screen.crashCourse.emphasis1')}</Exaggerated> {i18n.t('onboarding_screen.crashCourse.line2')}{" "}
      <Exaggerated>{i18n.t('onboarding_screen.crashCourse.emphasis2')}</Exaggerated> {i18n.t('onboarding_screen.crashCourse.line3')}
    </LeftPushedHeader>
  </Main>
);

const YourThoughtsCauseYourMoods = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.moodThoughts.line1')} <Exaggerated>{i18n.t('onboarding_screen.moodThoughts.emphasis1')}</Exaggerated>
    </LeftPushedHeader>
  </Main>
);

const YourThoughtsArentYourThoughts = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.thoughtsArentThoughts.line1')} <Exaggerated>{i18n.t('onboarding_screen.thoughtsArentThoughts.emphasis1')}</Exaggerated>
    </LeftPushedHeader>
  </Main>
);

const YourThoughtsAreDistorted = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.yourDistorted.line1')} <Exaggerated>{i18n.t('onboarding_screen.yourDistorted.emphasis1')}</Exaggerated>
    </LeftPushedHeader>
  </Main>
);

const CBTOverview = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.cbtOverview.line1')}{" "}
      <Exaggerated>{i18n.t('onboarding_screen.cbtOverview.emphasis1')}</Exaggerated> {i18n.t('onboarding_screen.cbtOverview.line2')}{" "}
      <Exaggerated>{i18n.t('onboarding_screen.cbtOverview.emphasis2')}</Exaggerated> {i18n.t('onboarding_screen.cbtOverview.line3')}
    </LeftPushedHeader>
  </Main>
);

const Ready = () => (
  <Main>
    <LeftPushedHeader>
      <Exaggerated>{i18n.t('onboarding_screen.ready.emphasis1')}</Exaggerated> {i18n.t('onboarding_screen.ready.line1')}
    </LeftPushedHeader>
  </Main>
);

const Catch = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.catch.line1')} <Exaggerated>{i18n.t('onboarding_screen.catch.emphasis1')}</Exaggerated>{" "}
      {i18n.t('onboarding_screen.catch.line2')}
    </LeftPushedHeader>
  </Main>
);

const BadThoughtNote = () => (
  <Main>
    <LeftPushedHeader>{i18n.t('onboarding_screen.badThoughtNote.line1')}</LeftPushedHeader>
    <ThoughtView>{i18n.t('onboarding_screen.badThoughtNote.line2')}</ThoughtView>
  </Main>
);

const IdentifyDistortions = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.identifyDistortions.line1')} <Exaggerated>{i18n.t('onboarding_screen.identifyDistortions.emphasis1')}</Exaggerated>{" "}
    </LeftPushedHeader>
  </Main>
);

const BadThoughtDistortions = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.badDistortions.line1')}{" "}
      <Exaggerated>{i18n.t('onboarding_screen.badDistortions.emphasis1')}.</Exaggerated>
    </LeftPushedHeader>
    <ThoughtView>{i18n.t('onboarding_screen.badDistortions.line2')}</ThoughtView>
  </Main>
);

const Challenge = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.challengeScreen.line1')}{" "}
      <Exaggerated>{i18n.t('onboarding_screen.challengeScreen.emphasis1')}</Exaggerated>
    </LeftPushedHeader>
  </Main>
);

const WriteChallenge = () => (
  <Main>
    <LeftPushedHeader>{i18n.t('onboarding_screen.writeChallenge.line1')}</LeftPushedHeader>
    <BigParagraph
      style={{
        backgroundColor: theme.offwhite,
        borderRadius: 8,
        marginTop: 18,
      }}
    >
      {thought.challenge}
    </BigParagraph>
  </Main>
);

const AlternativeThought = () => (
  <Main>
    <LeftPushedHeader>
      {i18n.t('onboarding_screen.altThought.line1')} <Exaggerated>{i18n.t('onboarding_screen.altThought.emphasis1')}</Exaggerated>
    </LeftPushedHeader>
    <ThoughtView>{thought.alternativeThought}</ThoughtView>
  </Main>
);

const ShowOff = () => (
  <Main
    style={{
      alignItems: "flex-start",
    }}
  >
    <LeftPushedHeader style={{ marginBottom: 18 }}>
      {i18n.t('onboarding_screen.showOff.line1')}
    </LeftPushedHeader>
    <CBTView thought={thought} />
  </Main>
);

const GotIt = ({ onPress }) => (
  <Main
    style={{
      alignItems: "flex-start",
    }}
  >
    <LeftPushedHeader style={{ marginBottom: 18 }}>
      {i18n.t('onboarding_screen.gotIt.line1')}
    </LeftPushedHeader>

    <RoundedButton
      title={i18n.t('onboarding_screen.gotIt.btnTitle')}
      disabled={false}
      fillColor={theme.blue}
      width={150}
      onPress={onPress}
    />
  </Main>
);

interface Props {
  toFormScreen: () => void;
}

export default class CBTOnBoardingScreen extends React.Component<Props> {
  render() {
    return (
      <Swiper
        loop={false}
        dotColor={theme.offwhite}
        activeDotColor={theme.pink}
      >
        <Intro />
        <CrashCourse />
        <YourThoughtsCauseYourMoods />
        <YourThoughtsArentYourThoughts />
        <YourThoughtsAreDistorted />
        <CBTOverview />
        <Ready />
        <Catch />
        <BadThoughtNote />
        <IdentifyDistortions />
        <BadThoughtDistortions />
        <Challenge />
        <WriteChallenge />
        <AlternativeThought />
        <ShowOff />
        <GotIt onPress={this.props.toFormScreen} />
      </Swiper>
    );
  }
}
