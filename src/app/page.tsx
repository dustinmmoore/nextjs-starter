'use client';

import React from 'react';
import { Flex, Text, Button, Badge } from '@/once-ui/components';
import { Sidebar } from '@/once-ui/modules/layout/Sidebar';
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
            <Flex direction="row" fillWidth>
                <Sidebar>
                    <Flex direction="column" gap="m" padding="m">
                        <Link href="/" style={linkStyle}>
                            <Button variant="secondary">Home</Button>
                        </Link>
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
                </Sidebar>
                <Flex direction="column" fillWidth>
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
                        <img src={person.avatar} alt={`${person.name}'s avatar`} style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: 'm' }} />
                        <Text as="h2" style={{ marginBottom: 'l' }}>
                            Welcome to My Portfolio
                        </Text>
                        <Flex direction="column" gap="m" style={{ marginTop: 'm' }}>
                            <Text as="p">
                                Discover my projects and see what I've been working on.
                            </Text>
                            <Text as="p">
                                Read my blog for insights and updates on my latest activities.
                            </Text>
                            <Text as="p">
                                Get in touch with me for collaborations or inquiries.
                            </Text>
                        </Flex>
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
                </Flex>
            </Flex>
        </>
    );
}
