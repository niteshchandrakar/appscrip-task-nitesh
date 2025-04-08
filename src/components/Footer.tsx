import { useState } from "react";
import styles from "./../styles/Footer.module.css";
import { FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contactCurrency}>
          <div>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h4>CURRENCY</h4>
            <p>🇺🇸 USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Section (Collapsible on mobile) */}
      <div className={styles.bottomSection}>
        {[
          {
            title: "metta muse",
            links: [
              "About Us",
              "Stories",
              "Artisans",
              "Boutiques",
              "Contact Us",
              "EU Compliances Docs",
            ],
          },
          {
            title: "QUICK LINKS",
            links: [
              "Orders & Shipping",
              "Join/Login as a Seller",
              "Payment & Pricing",
              "Return & Refunds",
              "FAQs",
              "Privacy Policy",
              "Terms & Conditions",
            ],
          },
          {
            title: "FOLLOW US",
            content: (
              <>
                <div className={styles.socialIcons}>
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </>
            ),
          },
        ].map((section, index) => (
          <div key={index} className={styles.dropdownSection}>
            <div
              className={styles.dropdownHeader}
              onClick={() => toggleDropdown(index)}
            >
              <h5>{section.title}</h5>
              <FaChevronDown
                className={`${styles.chevron} ${
                  openIndex === index ? styles.rotate : ""
                }`}
              />
            </div>
            <div
              className={`${styles.dropdownContent} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              {section.links ? (
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              ) : (
                section.content
              )}
            </div>
          </div>
        ))}
      </div>

      <h5
        style={{
          marginTop: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        mettā muse ACCEPTS
      </h5>
      <div className={styles.payIcons}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
          alt="GPay"
        />
        <img
          src="data:image/png;base64,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"
          alt="MasterCard"
        />
        <img
          src="data:image/png;base64,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"
          alt="PayPal"
        />
        <img
          src="data:image/png;base64,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"
          alt="Amex"
        />
        <img
          src="data:image/png;base64,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"
          alt="ApplePay"
        />
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
