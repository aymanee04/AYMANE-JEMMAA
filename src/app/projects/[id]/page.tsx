import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import { getProjectById } from "@/data/getProjectById";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return <ProjectDetails params={{id}}/>;
}