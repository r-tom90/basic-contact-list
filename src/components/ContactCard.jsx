import { useState } from "react";

const ContactCard = ({ avatarUrl, firstName, lastName, email, age }) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={avatarUrl} alt="profile" />
      <div className="user-details">
        <p>
          Name: {firstName} {lastName}{" "}
        </p>
        <p>Email: {email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {/* Instead of ternary operator, && can be used */}
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
