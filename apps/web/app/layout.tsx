import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Swayam 2.o AI',description:"India's Next Generation Learning Platform"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
