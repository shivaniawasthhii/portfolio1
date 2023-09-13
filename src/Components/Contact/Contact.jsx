import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Box, Image, Text } from "@chakra-ui/react";
export const Contact = () => {
  return (
    <>
      <div className="section" border={"1px solid black"}>
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <Box  className="c2">
          <Box display="flex" pl="8px" >
          <a
            href="https://www.linkedin.com/in/shivani-awasthi-51b18a284/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin fontSize={"50px"} className="linkedin" />
            
          </a>
          <Text marginLeft={"10px"}>shivani Awasthi</Text>
            </Box>
          {/* <Box marginTop={"10px"} display={"flex"} >
          <a
            href="https://github.com/Awasthiishivanii"
            target="_blank"
            rel="noreferrer"
          >
            
            
          </a>
          <Text marginLeft={"6px"}>Awasthiishivanii </Text>
          </Box> */}
          
          <Box pl="8px"marginTop={"10px"} display={"flex"}>
          <a
            href="mailto:shivani28f23@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            
            <CgMail className="email" />
        
          </a>
          <Text marginLeft={"10px"}>shivani28f23@gmail.com</Text>
          </Box>
          
          <Box pl="8px"marginTop={"10px"} display={"flex"}>
          <a href="tel:+917893176406" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
           
          </a>
          <Text marginLeft={"10px"}>91-7893176406</Text>

          </Box>
         
         
        </Box>
      </div>
    </>
  );
};
