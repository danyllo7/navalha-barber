import type { Metadata } from 'next';
export const metadata: Metadata = {title:'NAVALHA — Barbearia & Studio',description:'Cortes com identidade. Reserve o seu momento.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-PT"><body>{children}</body></html>}
