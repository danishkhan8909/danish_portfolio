import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    e.target,
    "YOUR_PUBLIC_KEY"
  )
  .then(
    (result) => {
      alert("Email sent successfully ✅");
    },
    (error) => {
      alert("Error ❌");
    }
  );

  e.target.reset();
};

return (
  <form onSubmit={sendEmail}>
    <input type="text" name="name" placeholder="Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Send</button>
  </form>
);
