import { useFiles } from "@/lib/hooks/use-files";
import { FileTable } from "./data-table/file-table";
import { DEFAULT_FORM_VALUES } from "@/lib/consts";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { SearchFormValues } from "./form";
import { DiggerPlain } from "./digger-plain";
import { defaultVis, columns } from "./data-table/columns";

export interface PageProps {
  formValues: SearchFormValues;
  collapsed: boolean;
}

export default function Page({ formValues, collapsed }: PageProps) {
  const { data, isLoading, isError, error } = useFiles(formValues);

  if (collapsed) {
    return <div className="w-full h-full bg-background" />;
  }

  if (formValues === DEFAULT_FORM_VALUES) {
    return (
      <div className="flex justify-center h-full w-full items-center select-none">
        <h3 className="text-3xl font-bold tracking-tight">Search empty!</h3>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center h-full w-full items-center select-none">
        <DiggerPlain className="animate-pulse rounded-md text-primary/10 w-40" />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {String(error)} </div>;
  }

  return (
    <ScrollArea className="w-full h-screen">
      <ScrollBar orientation="vertical" />
      <div className="p-12 flex flex-col gap-6">
        <p className="text-muted-foreground">
          {data.files_searched} files searched in {data.duration}ms. Found{" "}
          {data.files.length} matches.
        </p>

        <FileTable
          data={data.files}
          columns={columns}
          defaultVis={defaultVis}
        />
      </div>
    </ScrollArea>
  );
}
