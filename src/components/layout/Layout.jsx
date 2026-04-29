import React from 'react';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}