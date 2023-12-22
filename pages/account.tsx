import React from 'react';
import ProfileManagement from '../components/ProfileManagement';
import PurchaseHistory from '../components/PurchaseHistory';
import Wishlist from '../components/Wishlist';

export default function AccountPage() {
  return (
    <div>
      <ProfileManagement />
      <PurchaseHistory />
      <Wishlist />
    </div>
  );
}