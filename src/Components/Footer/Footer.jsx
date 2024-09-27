import React from "react";
import classes from "./Footer.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <>
      <div className={classes.backTop}>
        Back to top
        </div>
      <div className={classes.main_footer}>
        <div className={classes.container}>
          <div className={classes.row}>
            {/* colu1 */}
            <div className={classes.column}>
              <h4 className={classes.title__name}>Get to Know Us</h4>
              <ul className={classes.list__unstyled}>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Sustainability</li>
                <li>Press Center</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
              </ul>
            </div>
            {/* colu2 */}
            <div className={classes.column}>
              <h4 className={classes.title__name}>Make Money with Us</h4>
              <ul className={classes.list__unstyled}>
                <li>Sell products on Amazon</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Become a Delivery Driver</li>
                <li>Start a package delivery businness</li>
                <li>Advertise Your products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>See More Ways to Make Money</li>
              </ul>
            </div>
            {/* colu3 */}
            <div className={classes.column}>
              <h3 className={classes.title__name}>Amazon Payment Products</h3>
              <ul className={classes.list__unstyled}>
                <li>Amazon Rewards Visa Signature Cards</li>
                <li>Amazon.com Store Card</li>
                <li>Amazon Secured Card</li>
                <li>Amazon Bussiness Card</li>
                <li>Amazon Business Line of Credit</li>
                <li>Shop with Points</li>
                <li>Credit Card Marketplace</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </ul>
            </div>
            {/* colu4 */}
            <div className={classes.column}>
              <h4 className={classes.title__name}>Let Us Help You</h4>
              <ul className={classes.list__unstyled}>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Amazon Prime</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Recalls and Product Safety Alerts</li>
                <li>Amazon Assistant </li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.footer__logo}>
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </div>
        <div className={classes.footer__credit}>
          <h3>Developed By: Haimanot Tamiru</h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
