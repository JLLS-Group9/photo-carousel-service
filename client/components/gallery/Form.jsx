import React from 'react';
import styles from './gallery.css';

const Form = (props) => {
  return (
    <div className={styles.form}>
      <div className={styles.content}>
        <div className={styles.formHeader}>Contact This Property</div>
        <div>
          <form>
            <input type="text" id="fname" name="name" placeholder="Your Name" />
            <input type="text" id="fname" name="number" placeholder="Your Phone Number" />
            <input type="text" id="fname" name="email" placeholder="Your Email"/>
            <textarea name="tutorial" rows="3" cols="40" placeholder="I am interested in this rental and would like to schedule a viewing. Please let me know when this would be possible."></textarea>
            <input className={styles.submit} type="submit" value="Check Availability"></input>
            <label className={styles.container}>
              <input type="checkbox" className={styles.checkmark}/>
              &ensp;Enable 1-Click Request
            </label>
          </form>
        </div>
        <div className={styles.warning}>You agree to Trulia's Terms of Use {'&'} Privacy Policy By choosing to contact a property, you also agree that Zillow Group, landlords, and property managers may call or text you about any inquiries you submit through our services, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.</div>
      </div>
    </div>
  );
};

export default Form;