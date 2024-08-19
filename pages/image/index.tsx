import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ImageComponent from "@/components/ImageComponent";
export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "cyan", size: "lg", fullWidth: true })}>Image Complaint Categorization</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center p-12">
          <ImageComponent />
        </div>


      </section>
    </DefaultLayout>
  );
}
