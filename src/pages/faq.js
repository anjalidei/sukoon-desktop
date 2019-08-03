import React ,{useState} from "react";
import {Link} from "gatsby"
import "../css/style.css";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading"
import styled from "styled-components";
import Para from "../elements/Para"


// Images
import HeaderImg from "../images/Desktop-Header/DesktopHeader.jpg"

// Intro Section
const Heading = () => {
    return (
        <div className="text-sukoon text-v6xl">
            <h2 className="font-light block">
                Don't Just Stay,
            </h2>
            <span className="font-extrabold block">
                Live Here !
            </span>
        </div>
    )
};

const HeaderIntroLeft = styled.div`
        top:  10vw;
        left: -18vw;
       
       @media screen and (max-width: 1600px){
       left: -16vw;
       }
       @media screen and (max-width: 1400px){
       left: -14vw;
       }
       @media screen and (max-width: 1200px){
       left: -10vw;
       }
       
   
    `;
const HeaderIntroRight = styled.div`
    
    `;

const HeaderIntro = () => {
    return (
        <section id="header-intro" className="w-full">
            <div id="header-intro-container" className="flex relative">
                <div className="w-2/5">
                </div>
                <HeaderIntroRight id="header-intro-right" className="relative">
                    <HeaderIntroLeft id="header-intro-left" className="absolute w-fit">
                        <Heading/>
                        <div className="my-4">
                                <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t</Para>
                            </div>
                    </HeaderIntroLeft>
                    <img src={HeaderImg} className="block" alt="Header"/>
                </HeaderIntroRight>
            </div>
        </section>
    )
};


//Frequently Asked Question
const Faqs = (props) => {
    let content = [
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
        {
            summary: 'Introduction What is the meaning of Lorem ipsum?',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
        },
    ];

    let items = content.map((item)=>{
        return(
            <div className="flex-col flex p-1 shadow-lg my-4 bg-white">
                <div className="flex justify-between">
                    <details>
                        <Para width="100%" padding="1rem">
                            {item.description}
                        </Para>
                        <summary className="text-sukoon font-bold">{item.summary}</summary>
                    </details>
                </div>
            </div>
        )
    });
    return (
        <section id="faq-section" className="p-6 ">
            <div className="mr-40">
                <Title titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
            </div>
            <div className="w-3/5">
                {items}
            </div>
        </section>
    )
};

//Main Function
function FaqPage(props) {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <HeaderIntro/>
            <Faqs/>
        </Layout>
    );
}

export default FaqPage;
