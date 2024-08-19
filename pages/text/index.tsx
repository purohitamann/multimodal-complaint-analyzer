import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import TextComponent from "@/components/TextComponent";
import { subtitle } from "@/components/primitives";
export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center ">
          <h1 className={title({ color: "cyan", size: "lg", fullWidth: true })}>Text Complaint Categorization</h1>
          <p className={subtitle()}>
            Analyze and categorize text-based complaints with precision, identifying key issues and sentiment.
          </p>
          <div className="w-full flex flex-col items-center justify-center "  >
            <TextComponent />
          </div>


        </div>
      </section>
    </DefaultLayout>
  );
}
