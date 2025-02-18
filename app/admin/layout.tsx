import '../../styles/admin.styles.scss';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="layout-admin">{children}</div>;
}
