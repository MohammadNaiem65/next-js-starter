import { geistSans, geistMono } from '../(root)/layout';
import Navbar from '../components/main/shared/Navbar/Navbar';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
