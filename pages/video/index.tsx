import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { NextApiRequest, NextApiResponse } from "next";
import Handler from "@/pages/api/hello"; // Import NextApiRequest and NextApiResponse types
import { i } from "vite/dist/node/types.d-aGj9QkWt";
import { useEffect, useState } from "react";
import Data from "@/pages/api/hello";
import VideoComponent from "@/components/VideoComponent";
export default function DocsPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Video Compliant Categorization</h1>
          {/* <p>{data.name.toString()}</p> */}
        </div>
        <div className="w-full flex flex-col items-center justify-center p-12">
          <VideoComponent />
        </div>

      </section>
    </DefaultLayout>
  );
}
