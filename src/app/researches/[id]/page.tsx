import fs from "fs";
import path from "path";
import ResearchDetail from "@/components/ResearchDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/data");
  const files = fs.readdirSync(dir);
  return files.map((file) => ({ id: file.replace(".json", "") }));
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const filePath = path.join(process.cwd(), "src/data", `${id}.json`);
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return <ResearchDetail research={JSON.parse(data)} />;
  } catch {
    notFound();
  }
}
