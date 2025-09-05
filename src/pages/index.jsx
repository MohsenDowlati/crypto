import React from "react";
import Page from "@/layouts/Page";
import Home from "@/components/home/Home";
import Section from "@/layouts/Section";

export default function main() {
    return (
     <Page title="Home">
         <Section>
         <Home/>
         </Section>
     </Page>
    );
}