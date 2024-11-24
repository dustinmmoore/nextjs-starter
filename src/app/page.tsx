import React from 'react';
import { Flex, Text, Button } from '@/once-ui/components'; // Assuming once-ui contains some reusable components
import Link from 'next/link';

const linkStyle = { textDecoration: 'none' };

export default function NavBar() {
    return (
        <>
            <Flex
                as="nav"
                padding="m"
                gap="l"
                justifyContent="space-between"
                alignItems="center"
                fillWidth
                style={{ backgroundColor: 'neutral-strong' }} // Correct way to set background color in React
            >
                {/* Branding / Logo */}
                <Text as="h1" variant="heading-medium">
                    <Link href="/" style={linkStyle}>My Portfolio</Link>
                </Text>

                {/* Navigation Links */}
                <Flex as="div" gap="m" direction="row" alignItems="center">
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
                    <Link href="/hire" style={linkStyle}>
                        <Button variant="primary">Hire Me</Button>
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
                <Text as="h2" variant="heading-large">
                    Welcome to My Portfolio
                </Text>
                <Text as="p" variant="body-large" style={{ marginTop: 'm' }}>
                    Discover my projects, read my blog, and get in touch!
                </Text>
                <Link href="/projects" style={linkStyle}>
                    <Button variant="primary" style={{ marginTop: 'l' }}>View My Work</Button>
                </Link>
            </Flex>
        </>
    );
}
