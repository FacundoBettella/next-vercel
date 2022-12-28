import Link from "next/link";
import React, { ReactElement } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing <code className="code">pages/pricing.jsx</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
