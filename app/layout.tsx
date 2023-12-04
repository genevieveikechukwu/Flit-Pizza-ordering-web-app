"use client"
import '../styles/globals.css'
import { ReactNode, useState } from 'react';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Head from "next/head";
import SettingsContext, { Settings } from '@/utils/context/settingsControls';
import useDeviceType from '@/utils/helper/resize';


interface RootLayoutProps {
    children: ReactNode;
}


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    const [isAdmin, setAdmin] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const settingsControls: Settings = {
        isAdmin,
        setAdmin,
        showModal,
        setShowModal
    }
    return (
        <html lang="en">
            <SettingsContext.Provider value={settingsControls}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Pizzit</title>
                </Head>
                <body>
                    <main className="app">
                        <Nav />
                        {children}
                        <Footer />
                    </main>
                </body>
            </SettingsContext.Provider>
        </html>
    );
};

export default RootLayout;
