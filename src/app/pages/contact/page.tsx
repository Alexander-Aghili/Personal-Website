
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default EmailTemplate;

// const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);

//   if (submitted) {
//     return (
//       <div className={style.main}>
//         <Navbar></Navbar>
//         <div className={style.thanks}>
//           <h2>Thank you!</h2>
//           <div>We'll be in touch soon.</div>
//         </div>
//       </div>
//     );
//   }

//   return (
    
//     <div
//     className={style.main}
//     >
//       <Navbar></Navbar>
//       <form
//       onSubmit={handleSubmit}
//       method="POST"
//       className={style.form}
//       >
//       <div>
//           <input className={style.text} type="text" placeholder="Your name" name="name" required />
//       </div>
//       <div>
//           <input className={style.text} type="email" placeholder="Email" name="email" required />
//       </div>
//       <div>
//           <textarea className={style.message} placeholder="Your message" name="message" required />
//       </div>
//       <div>
//           <button className={style.submit} type="submit"> Send a message </button>
//       </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;