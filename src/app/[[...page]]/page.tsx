import React from "react";
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/lib/builder";

// Replace with your Public API Key
builder.init("ba26b1f01a7a45cdbbff41a67447be22");

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function SectionExample(props: PageProps) {
  const content = await builder
    .get("block1", {
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      <div
        style={{
          background: "purple",
          fontSize: 24,
          textAlign: "center",
          height: 200,
          padding: 20,
        }}
      >
        Non builder content
      </div>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
      <div
        style={{
          background: "blue",
          fontSize: 14,
          textAlign: "center",
          height: 200,
          padding: 20,
        }}
      >
        Non builder content
      </div>
    </>
  );
}
