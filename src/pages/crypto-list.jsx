import React from 'react';
import Page from "@/layouts/Page";
import Section from "@/layouts/Section";
import Crypto from "@/components/crypto/Crypto";

export default function CryptoNews() {
    return (
        <Page title="Crypto">
            <Section>
                <Crypto />
            </Section>
        </Page>
    )
}