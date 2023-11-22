import './../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const description =
  'Dotion - Uma poderosa plataforma de organização e colaboração para simplificar sua vida. Crie, compartilhe e gerencie suas notas, tarefas e projetos de maneira eficiente. Desfrute de uma experiência intuitiva e flexível com o Dotion, o seu espaço digital para tornar ideias em realidade.';
export const metadata: Metadata = {
  title: 'Dotion',
  description,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-AO">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout;
