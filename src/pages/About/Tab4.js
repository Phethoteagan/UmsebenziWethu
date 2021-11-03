import {  IonMenuButton,IonButtons,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';

const Tab4= () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='name3'>Privacy Policy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='body'>
        <p className='content4'>
        <h2> Umsebenzi Wethu - Privacy Policy </h2>

<h6>Data We Collect </h6> 

<p>Registration for Umsebenzi Wethu is a procedure that asks for applicable personal information 
from the user of the mobile application. The required personal information includes user’s name, 
surname, email address, physical address, password, skills, and date of birth. </p>

<p>Umsebenzi Wethu’s Profile for Apply and Post page can be updated with information to be made 
  public to interact with the application. The additional information that can be required 
  include an image of the profile user/ posted job, user description and preferable trade. </p>

<p>The geolocation is a feature on the app that is optional for the Umsebenzi Wethu User to 
  select. It collects data of the user’s exact location coordinates to be stored as the user’s 
  address. The image capturing feature found on Umsebenzi Wethu’s Profile section is a camera and 
gallery selector that asks the user on their mobile device for permission to be used. </p>

<h6>How We Use Your Data</h6>

<p>Data collected from the user’s registration page, profile: apply page and profile: post page 
  are synchronous in Umsebenzi Wethu’s mobile application. Thus, allowing for job applicants to 
  apply for job posts from companies.Umsebenzi Wethu’s profile validation is a security measure to protect everyone using the 
  mobile application. Profiles for Umsebenzi Wethu are unique to the user logged in regardless 
  of using the Apply or Post functionality. </p>

<p>The security of logging into Umsebenzi Wethu’s mobile application is a password protection 
  encryption. When registering an Umsebenzi Wethu account there’s a minimum requirement for the 
  password created to ensure it highly invulnerable (*password length and capitalization). After 
  an Umsebenzi Wethu account is registered the log in page requisite will be verifying the 
  registered email and password. This is essential as authorization further into the mobile 
  application cannot be deemed unless the log in details is inputted correctly.  </p>

<p>Umsebenzi Wethu’s application withdrawal process is secured with an irrevocable logout that 
  will require the user to login again. The Log Out feature on the mobile application asks for 
  the user’s confirmation to log out then after erases the user’s app usage history.The geolocation data to be stored on Umsebenzi Wethu’s database is to collect and prepare 
  statistically data to wholistically view the physical areas of the mobile application’s usage.</p> 

<h6>How We Share Information </h6>

<p>The information made public on Umsebenzi Wethu’s mobile application is critical for the 
  ability easily connect with a company or job applicant.As a job applicant, information of the user’s name, surname, skills, description, email 
  address, physical address, trade interest, image and age are made public to every company on 
  Umsebenzi Wethu’s mobile application. This is helpful to make a quick selection for companies 
  to choose an applicant but also it allows for further communication to a possible employee. </p>

<p>As a company, information of the user’s company name, company image, job posted image, 
  physical address, company description, job trade is made public to every job applicant on 
  Umsebenzi Wethu’s mobile application. This company information assists job applicants to 
  critical assess a job that they can apply for.  </p>

<h6>Your Choices and Obligations </h6>

<p>Every User on Umsebenzi Wethu’s mobile application can have full access to editing 
  appropriate information that can correct or improve the details provided to a respective 
  job applicant or company. Editable options include name, surname, additional email address, 
  trade, images, description, and skills. The user’s age will be yearly updated therefore cannot 
  be edited. Password Recovery can be accessed and utilized on the log in page to newly create 
  a password. </p>

 
        </p>
 
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;