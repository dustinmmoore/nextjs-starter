'use client';

import React from 'react';
import { Flex, Text, Button, Badge } from '@/once-ui/components';
import Link from 'next/link';

const linkStyle = { textDecoration: 'none' };

const home = {
    title: "My Portfolio",
    description: "Discover my projects, read my blog, and get in touch!"
};

const person = {
    name: "Dustin Moore",
    avatar: "/path/to/avatar.jpg"
};

const baseURL = "dustinmoore.dev";

export default function NavBar() {
    return (
        <>
            <Flex
                as="nav"
                padding="m"
                gap="l"
                justifyContent="center"
                alignItems="center"
                fillWidth
                style={{ backgroundColor: 'neutral-strong' }}
            >
                {/* Branding / Logo */}
                <Text as="h1">
                    <Link href="/" style={linkStyle}>Dustin Moore</Link>
                </Text>

                {/* Navigation Links */}
                <Flex as="div" gap="xs" direction="row" alignItems="center">
                    <Link href="/about" style={linkStyle}>
                        <Button variant="secondary">About</Button>
                    </Link>
                    <Link href="/projects" style={linkStyle}>
                        <Button variant="secondary">Projects</Button>
                    </Link>
                    <Link href="/blog" style={linkStyle}>
                        <Button variant="secondary">Blog</Button>
                    </Link>
                    <Link href="/contact" style={linkStyle}>
                        <Button variant="secondary">Contact</Button>
                    </Link>  
                </Flex>
            </Flex>

            {/* Hero Section */}
            <Flex
                as="section"
                direction="column"
                alignItems="center"
                justifyContent="center"
                padding="xl"
                style={{ backgroundColor: 'neutral-light', height: '80vh', textAlign: 'center' }}
            >
                <Text as="h2">
                    Welcome to My Portfolio
                </Text>
                <Text as="p" style={{ marginTop: 'm' }}>
                    Discover my projects, read my blog, and get in touch!
                </Text>
                <Link href="/projects" style={linkStyle}>
                    <Button variant="primary" style={{ marginTop: 'l' }}>View My Work</Button>
                </Link>
            </Flex>

            {/* JSON-LD Script */}
            <Flex
                maxWidth="m"
                fillWidth
                gap="xl"
                direction="column"
                alignItems="center"
            >
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebPage',
                            name: home.title,
                            description: home.description,
                            url: `https://${baseURL}`,
                            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                            publisher: {
                                '@type': 'Person',
                                name: person.name,
                                image: {
                                    '@type': 'ImageObject',
                                    url: `${baseURL}${person.avatar}`,
                                },
                            },
                        }),
                    }}
                />
            </Flex>
        </>
    );
}
