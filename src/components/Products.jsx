import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from '/videos/1.Arqitel.mp4';
import Cula from '/videos/2. Cula.mp4';
import Layout from '/videos/3. Layout Land.mp4';
import TTR from '/videos/4. TTR.mp4';
import Maniv from '/videos/5. Maniv.mp4';
import YIR from '/videos/6. YIR.mp4';
import yahoo from '/videos/7. yahoo.mp4';
import rainfall from '/videos/8. rainfall.mp4';
import jungle from '/videos/9. jungle.mp4';
import Silvr from '/videos/10. Silvr.mp4';
import remind from '/videos/11. remind.mp4';
import summon from '/videos/12. summon.mp4';
import weglotlikemagic from '/videos/13. weglotlikemagic.mp4';
import rocketchat from '/videos/14. rocketchat.mp4';
import yearinreview from '/videos/15. yearinreview.mp4';
import weglot from '/videos/16. weglot.mp4';
import Candid from '/videos/17. Candid Health.mp4';
import showcase from '/videos/18. showcase.mp4';


function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
    },
    {
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      live: true,
      case: true,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
    {
      title: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: false,
    },
    {
      title: "Weglot",
      description:
        "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      live: true,
      case: false,
    },
    {
      title: "Candid Health",
      description:
        "A complete redesign of a health-startup website, followed by cutting edge development.",
      live: true,
      case: false,
    },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="py-8 relative mt-32 mb-52">
      <div>
        {products.map((elem, i) => (
          <Product key={i} val={elem} mover={mover} count={i} />
        ))}
        <div className="w-full h-full absolute top-0 pointer-events-none">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="window w-[30rem] h-[20rem] rounded-xl  absolute left-[45%] overflow-hidden"
          >
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={arqitel}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={Cula}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={Layout}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={TTR}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={Maniv}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={YIR}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={yahoo}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={rainfall}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={jungle}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={Silvr}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={remind}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={summon}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={weglotlikemagic}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={rocketchat}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={yearinreview}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={weglot}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={Candid}></video></motion.div>
            <motion.div
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full"
            ><video autoPlay loop muted src={showcase}></video></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Products;
