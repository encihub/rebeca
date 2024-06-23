import * as React from 'react';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => (
  <>
    <a
      href="tel:+34 645 161 924"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Teléfono"
    >
      <FaPhone />
    </a>
    <a
      href="mailto:rebe@rebe.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
    >
      <FaEnvelope />
    </a>
  </>
);

export default SocialLinks;
