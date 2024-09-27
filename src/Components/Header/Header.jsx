import React, { useContext } from 'react'
import classes from "./Header.module.css"
import { SlLocationPin } from "react-icons/sl";

import { BsSearch } from "react-icons/bs";
import {Link} from "react-router-dom"
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from "../../Utility/firebase"



function Header() {

  const [{user,basket}, dispatch] = useContext(DataContext)
  // console.log(state)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount + amount;
  },0)
  return (
    <section  className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* Amazon logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon"
              />
            </Link>
            <div className={classes.delivery}>
              {/* delivery */}
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Naperville 60564</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search  bar sections*/}
            {/*the <select> element is used for creating dropdowns where users can choose from a set of options  */}
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" placeholder="Search Amazon" name="" id="" />
            <BsSearch size={37} />
          </div>
          {/* cart side link  */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://image.shutterstock.com/image-vector/american-flbarag-usa-design-united-260nw-2477519645.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to={!user &&"/auth"}>
              <div>
                {
                  user ? (
                    <>
                      
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                      <>

                      <p> Hello,Sign In</p>
                      <span>Account & Lists</span>
                      </>
                  )
               }
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
          
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header