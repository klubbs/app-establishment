import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context';
import { AuthStackNavigator } from './auth-stack';
import { DrawerNavigation } from './drawer/drawer-stack';
import { PaymentsScreen } from '../../components/screens/payments';

export const Navigations: React.FC = () => {

  const { establishment } = useContext(AuthContext)

  return <PaymentsScreen />

  return (
    establishment ? <DrawerNavigation /> : < AuthStackNavigator />
  );
}
