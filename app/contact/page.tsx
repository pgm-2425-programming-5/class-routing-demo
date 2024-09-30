// app/contact/page.tsx

import styles from './styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out via email or phone.</p>
      <form className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={5} required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
