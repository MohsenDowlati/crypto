import React from 'react';
import Page from "../layouts/Page";
import Section from "../layouts/Section";
import Crypto from "../components/crypto/Crypto";
import Updated from "../components/crypto/Updated";

export default function CryptoNews() {
    return (
        <Page title="Crypto" nav={<Updated/>}>
            <Section>
                <Crypto />
            </Section>
        </Page>
    )
}