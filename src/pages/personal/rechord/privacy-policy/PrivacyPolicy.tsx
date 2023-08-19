import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

const styles = {
  container: 'text-white p-[30px]',
  headingContainer: 'flex-col items-center justify-center text-center py-[20px]',
  heading: ' font-bold',
  section: 'pb-[20px] space-y-5',
  sectionTitle: 'font-bold py-[10px]',
  link: 'font-bold underline',
  spacing: 'py-[10px]',
};

const PrivacyPolicy: NextPage = () => {

  interface ISectionProps {
    title: String
    children: ReactNode
  }

  const Section = (props: ISectionProps) => {
    return (
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>{props.title}</h1>
        {props.children}
      </div>
    )
  }

  interface ILiWithBoldPrefixProps {
    prefix: String
    children: ReactNode
  }

  const LiWithBoldPrefix = (props: ILiWithBoldPrefixProps) => {
    return <li><span className="font-bold">{props.prefix}</span> {props.children}</li>

  }

  return (
    <>
      <Head>
          <title>Privacy Policy: reChord</title>
          <meta
            name="description"
            content="Privacy Policy for reChord, a personal guitar mobile application built by DRKDQL. Released in both the Apple App Store and Google Play Store."
          ></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>

          <div className={styles.container}> 
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}> Privacy Policy: reChord</h1>
        <p className={styles.spacing}> Last updated: August 19, 2023</p>
        <p>Generated using <span><a className={styles.link} href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/">Free Privacy Policy Generator</a></span></p>
      </div>
      
      <Section title="Privacy Policy ">
        <p> This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. </p>
        <p> We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <span> <a className={styles.link} href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"> Free Privacy Policy Generator</a></span>.</p>
      </Section>

      <Section title="Interpretation and Definitions">
        <h2 className={styles.spacing}> Interpretation </h2>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        <h2 className={styles.spacing}> Definitions</h2>
        <p> For the purposes of this Privacy Policy: </p>
        <div>
           <ul>
            <LiWithBoldPrefix prefix="Account">means a unique account created for You to access our Service or parts of our Service. </LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Affiliate" >means an entity that controls, is controlled by or is under common control with a party, where {'"'}control{'"'} means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Application">refers to reChord, the software program provided by the Company.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Company">(referred to as either {'"'}the Company{'"'}, {'"'}We{'"'}, {'"'}Us{'"'} or {'"'}Our{'"'} in this Agreement) refers to reChord.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Country">refers to: New South Wales, Australia </LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Device">means any device that can access the Service such as a computer, a cellphone or a digital tablet.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Personal Data">is any information that relates to an identified or identifiable individual.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Service">refers to the Application.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Service Provider">means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="Usage Data">refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</LiWithBoldPrefix>
            <LiWithBoldPrefix prefix="You">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</LiWithBoldPrefix>
          </ul>

        </div>
       
      </Section>

      <Section title="Collecting and Using Your Personal Data">
        <h2 className={styles.spacing}> Types of Data Collected</h2>
        <h3 className={styles.spacing}> Personal Data </h3>
        <p> While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li> Usage Data</li>
        </ul>
        <h3 className={styles.spacing}> Usage Data</h3>
        <p>Usage Data is collected automatically when using the Service.</p>
        <p>Usage Data may include information such as Your Device{"'"}s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
        <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
        <h2 className={styles.spacing}> Use of Your Personal Data</h2>
        <p> The Company may use Personal Data for the following purposes:</p>
        <ul>
          <LiWithBoldPrefix prefix="To provide and maintain our Service">, including to monitor the usage of our Service.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="To manage Your Account:">to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="For the performance of a contract:"> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="To contact You:"> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application{"'"}s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="To provide You"> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="To manage Your requests:"> To attend and manage Your requests to Us.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="For business transfers:"> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="For other purposes:"> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</LiWithBoldPrefix>
        </ul>
        <p> We may share Your personal information in the following situations:</p>
        <ul>
          <LiWithBoldPrefix prefix="With Service Providers:">We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="For business transfers:"> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="With Affiliates:"> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="With business partners:"> We may share Your information with Our business partners to offer You certain products, services or promotions.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="With other users:"> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</LiWithBoldPrefix>
          <LiWithBoldPrefix prefix="With Your consent:"> We may disclose Your personal information for any other purpose with Your consent.</LiWithBoldPrefix>
        </ul>
        <h2 className={styles.spacing}> Retention of Your Personal Data</h2>
        <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. </p>
        <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods. </p>
        <h2 className={styles.spacing}>Transfer of Your Personal Data</h2>
        <p>Your information, including Personal Data, is processed at the Company{"'"}s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction. </p>
        <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
        <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information. </p>
        <h2 className={styles.spacing}> Delete Your Personal Data</h2>
        <p> You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. </p>
        <p> Our Service may give You the ability to delete certain information about You from within the Service.</p>
        <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us. </p>
        <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so. </p>
        <h2 className={styles.spacing}> Disclosure of Your Personal Data</h2>
        <h3 className={styles.spacing}> Business Transactions</h3>
        <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy. </p>
        <h3 className={styles.spacing}>Law enforcement </h3>
        <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency). </p>
        <h3 className={styles.spacing}>Other legal requirements </h3>
        <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to: </p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of Users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
        <h2 className={styles.spacing}>Security of Your Personal Data </h2>
        <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security. </p>
      </Section>

      <Section title="Children's Privacy">
        <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
        <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent{"'"}s consent before We collect and use that information.</p>

      </Section>
      
      <Section title="Links to Other Websites">
        <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party{"'"}s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
      </Section>
      
      <Section title="Changes to this Privacy Policy">
        
        <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
        <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the {'"'}Last updated{'"'} date at the top of this Privacy Policy</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

      </Section>
      
      <Section title="Contact Us">
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul>
          <li>By email: admin@drkdql.com</li>
        </ul>
      </Section>
    </div>
    </>
  
  );
};

export default PrivacyPolicy;
