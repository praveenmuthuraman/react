import React from "react";
import Card from "./comp/Card";

function App() {
  let data = [
    {
      title: "FREE",
      price: "$0/Month",
      user: "5 User",
      storage: "50GB storage",
      domain: "free Subdomain",
      project: "text-muted",
      ProjectIcon: "fas fa-times",
      phone: "text-muted",
      phoneIcon: "fas fa-times",
      subDomain: "text-muted",
      subDomainIcon: "fas fa-times",
      monthly: "text-muted",
      monthlyDomain: "fas fa-times",
    },
    {
      title: "PLUS",
      price: "$9/Month",
      user: "Single User",
      storage: "5GB storage",
      domain: "free Subdomain",
      project: "text-muted",
      ProjectIcon: "fas fa-times",
      phone: "text-muted",
      phoneIcon: "fas fa-times",
      subDomain: "text-muted",
      subDomainIcon: "fas fa-times",
      monthly: "text-muted",
      monthlyDomain: "fas fa-times",
    },
    {
      title: "PRO",
      price: "$49/Month",
      user: "Unlimited User",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "text-muted",
      ProjectIcon: "fas fa-times",
      phone: "text-muted",
      phoneIcon: "fas fa-times",
      subDomain: "text-muted",
      subDomainIcon: "fas fa-times",
      monthly: "text-muted",
      monthlyDomain: "fas fa-times",
    },
  ];
  return (
    <>
      <section className="pricing py-5 b-primary">
        <div className="container"></div>
        <div className="row">
          {data.map((e, i) => {
            return <Card cardData={e} key={i} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
