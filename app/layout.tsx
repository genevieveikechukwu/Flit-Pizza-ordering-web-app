import '../styles/globals.css'
import { ReactNode } from 'react';
import Nav from '@/components/nav';
import Footer from '@/components/footer';


interface RootLayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: 'Pizzit',
    description: 'Pizza ordering web application',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <main className="app">
                    <Nav />
                    {children}
                    <Footer />
                    </main>
            </body>
        </html>
    );
};

export default RootLayout;
