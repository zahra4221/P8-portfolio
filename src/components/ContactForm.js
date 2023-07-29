import React from "react";

import "../sass/contact.scss";

function ContactForm() {
  return (
    <div className="form-container">
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Nom <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message<textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit" className="button">
            Envoyer
          </button>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
