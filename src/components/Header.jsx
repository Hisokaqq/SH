import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const underl = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
  exit: { scaleX: 0 }
};

const firstBox = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
  exit: { scaleY: 0 }
};
const Box = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
  exit: { scaleY: 0 }
};

const Header = ({setCursorVariant}) => {
  const location = useLocation()
  const shouldAnimate = location.pathname == "/beautifulMe";
  return (
    <StyledHeader>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo' onMouseEnter={()=>setCursorVariant("ancher")} onMouseLeave={()=>setCursorVariant("default")}>
            <Link to='/'>
                {/* <img src={require("../images/ig.png")}/> */}
                @s.honchariuk
                </Link>
          </div>
          <div className={`logo `} onMouseEnter={()=>setCursorVariant("ancher")} onMouseLeave={()=>setCursorVariant("default")}>
            <Link to='/beautifulMe'>More Photos</Link>
            <motion.div 
              className="underl" 
              variants={underl}
              initial="hidden"
              animate={shouldAnimate ? "visible" : "hidden"}
              exit="exit"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.header)`
    font-size: 16px;
    position: fixed;
    z-index: 99;
    width: 100%;
    font-weight: "700";
    .underl{
      position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: black;
    }
    .container {
        .row {
            height: 128px;
            /* .active::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: black;
  transform: scaleX(.1);
  animation: slide-in 1s ease-out  forwards;
} */

@keyframes slide-in {
  100% {
    transform: translateX(0);
  }
}


            .logo {
                position: relative;
                img {
                    height: 25px;
                    margin-bottom: -3.8px;
                    margin-right: 5px;

                }

                a {
                    color: $black;
                    text-decoration: none;
                    padding: 5px 10px;
                }
            }

            .menu {
                cursor: pointer;
                border-radius: 100%;
                border: 1px solid $black;
                height: 80px;
                width: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.3s ease-in-out;

                &:hover {
                    color: $white;
                    background: $black;
                }
            }
        }
    }

`
export default Header;
