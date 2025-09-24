import React from "react";
import Page from "../layouts/Page";
import Home from "../components/home/Home";
import Section from "../layouts/Section";
import GetStarted from "../components/home/GetStarted";

export default function main() {
    return (
     <Page title="Home" nav={<GetStarted/>}>
         <Section>
         <Home/>
         </Section>
     </Page>
    );
}