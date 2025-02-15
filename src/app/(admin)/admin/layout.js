import Navbar from '@/app/components/admin/shared/Navbar/Navbar';

export default function AdminLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
