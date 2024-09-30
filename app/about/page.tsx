// app/about/page.tsx

import styles from './styles/About.module.css';

export default async function About() {
  // Uncomment the next line to simulate an error and test `error.tsx`
  // throw new Error('Test Error in About Page');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p>This page provides information about our application.</p>
    </div>
  );
}
