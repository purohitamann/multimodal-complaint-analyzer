import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import TextComponent from "@/components/TextComponent";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Text Complaint Categorization</h1>

          <div className="w-full flex flex-col items-center justify-center p-12">
            <TextComponent />
          </div>


        </div>
      </section>
    </DefaultLayout>
  );
}
