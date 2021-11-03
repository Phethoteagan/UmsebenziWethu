import {  IonMenuButton,IonButtons,IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* VERY IMPORTANT BUTTON */}
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='name3'>Terms & Conditions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='body'>
        <p className='content3'>
        <h3>Terms and conditions of use...</h3>
Any person accessing this website (user) is subject to, and agrees to, the terms and conditions set out in this legal notice. If the user does not wish to be bound by these terms and conditions, the user may not access, display, use, download and/or otherwise copy or distribute content obtained on this website.

<h6>Usage and copyright</h6>
Users may view, copy, download to a local drive, print and distribute the content of this 
website, or any part thereof only for non-commercial informational or reference purposes.
Users who wish to use content from this site for commercial purposes may only do so with the 
prior written permission obtained from the web manager at telephone number +27 11 123 4567 or 
e-mail electronic@gcis.gov.za(link sends e-mail). Any reproduction and/or copy of the content 
or portion thereof for commercial purposes must include this copyright notice in its entirety: 
© GCIS2018: ALL RIGHTS RESERVED.
All moral and any other rights of <b>Umsebenzi Wethu</b> or 
other legal entity in respect of which content is contained on this site not expressly granted 
are reserved.
<h6>Intellectual property rights</h6>
All content, data and trademarks, including, but not limited to, software, technology, 
databases, know-how, text, graphics, icons, hyperlinks, private information, designs, program, 
publications, products, processed, or ideas described in this website may be the subject of 
other rights, including other intellectual property rights, which are the property of or 
licensed to the GCIS, or a legal entity, and as such are protected from infringement by 
South African legislation and international treaties and conventions. Subject to the rights 
afforded to the user herein, all other rights to all intellectual property on this website are 
expressly reserved. By accessing data on this website the user is not licensed or authorised.

<h6>Disclaimer</h6>
The information on this website is intended to provide general information on a particular 
subject or subjects and is not an exhaustive treatment of such subject(s).
It is the sole responsibility of the user to satisfy itself prior to accessing this website 
that the website will meet the user's individual requirements and be compatible with the user's 
ardware and/or software. Information, ideas and opinions expressed on this site should not be 
regarded as professional advice or the official opinion of the GCIS or any legal entity in 
respect of which information, ideas and opinions are expressed on this website. Users are 
encouraged to consult professional advice before taking any course of action related to 
information, ideas or opinions expressed on this site.
Umsebenzi Wethu makes no representations or warranties, implied or otherwise, that, 
among others, the content and technology available from this site are free from errors or 
omissions, that the service will be 100% uninterrupted and error-free or will meet any 
particular criteria of performance or quality. This site is provided 'as is'. Umsebenzi Wethu
expressly disclaims all implied warranties, including, without limitation, warranties of 
merchantability, title, fitness for a particular purpose, non-infringement, compatibility, 
security, and accuracy. It makes no express or implied representations or warranties regarding 
the content of the website and that the website has been compiled or supplied to meet the user's 
individual requirements. Users are encouraged to report any possible errors, malfunctions or 
offensive material by using the 'feedback' link.
<p>The use of the content of this website is at the user’s own risk. The user assumes full 
responsibility and risk of loss resulting from the use of the content of this site. Umsebenzi Wethu
 or any of the legal entities in respect of which information are contained on this site, or 
 employees of Umsebenzi Wethu or such entity, will not be liable for any special, indirect, 
 incidental, consequential, or punitive damages or any other damages whatsoever, whether in an 
 action of contract, statute, tort (including, without limitation, negligence), or otherwise, 
 relating to the use of this document or information. If any of the foregoing is not fully 
 enforceable for any reason, the remainder shall nonetheless continue to apply. 
 </p>

<h4>Security</h4>
<h6>Protection</h6>
Umsebenzi Wethu has in place reasonable commercial standards of technology and operational 
security to protect all information provided by users from loss, misuse, alteration or 
destruction. All reasonable steps will be taken to secure a user's information. Authorised 
employees, who are responsible for the maintenance of any sensitive data submitted, are required 
to maintain the confidentiality of such data. The policy applies to all employees of Umsebenzi Wethu 
or public bodies that may receive such information from Umsebenzi Wethu. It is expressly 
prohibited for any person, business or entity to gain or attempt to gain unauthorised access to 
any page on this website, or to deliver or attempt to deliver any unauthorised, damaging or 
malicious code to this website. If a person delivers or attempts to deliver any unauthorised, 
damaging or malicious code to this website or attempts to gain unauthorised access to any page 
on this website, a criminal charge will be laid against that person, and, if the Umsebenzi Wethu or any 
public body should suffer any damage or loss, civil damages will be claimed.

<h6>Linkage and framing</h6>
We welcome third-party websites to link to the information that is hosted on these pages.

It is expressly prohibited for any person, business, entity or website to frame any page on this website, 
including the home page, in any way whatsoever, without prior written approval of Umsebenzi Wethu.
        </p>
        <IonHeader collapse="condense">
          <IonToolbar>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
