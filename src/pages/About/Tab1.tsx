import { IonMenuButton,IonButtons,IonTitle,IonToolbar,IonContent, IonHeader, IonPage} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='name1'>About Umsebenzi Wethu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='body'>
        <p className='content'>
        South Africa has one of the highest unemployment rates in the world, and this is not out of laziness but out of lack of resources. A number of people are struggling with find jobs, some are struggling to find people who would be suitable to cater to their household needs and an even higher number of people are having problems with acquiring suppliers for either the own personal needs or even for their companies. With all these problems stated an even bigger issue is not having the platform to communicate with potential employees/employers. 
        <br/> Solution <br/>
        The solution to this enormous issue would be through an application that directly connects employers that need employees to their potential suitable employees, without the struggle of having to scroll through tons and tons of vacancies and applications. Also, to connect companies to larger supply chain organisation, as we know amid this wave of unemployment, entrepreneurship becomes more and more of an ideal thing to do. Now wanting to start a candle business with all the knowledge one would need to do so and yet without the ability to acquire a supplier can be very stressful, our app would be able to aid as the third party in connecting these two different stakeholders being the entrepreneur and the potential supplier. Another issue stated above is not being able to find a suitable individual or company to deal with whatever predicament one may have, for example a Bob having a bust pipe in the bathroom and quickly goes and hire a plumbing company (Joseph’s plumbers) however it so happens when the company gets to Bob’s house, they then realise that they cannot fix it. A better solution would be for a description to be posted on an app (Umsebenzi wethu) and an image of the bust pipe in question and anyone who is on the app and is sure that they can fix the pipe will then communicate with the person (Bob) having the problem.
        Our application would be tackling the issue of unemployment, lack of resources and lack of access to services needed by regular people all at once.
        </p>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
