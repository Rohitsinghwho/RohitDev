import React from "react";
import ContributionGraphGithub from "../components/ContributionGraphGithub";
import RepoCard from "@/components/RepoCard";
import { SquareChartGantt } from "lucide-react";
import STerminal from "@/components/STerminal";
import Projects from "../data/Projects.json";
const Overview = () => {
  const TopProjects = Projects.projects.slice(0, 2);
  return (
    <div className="my-3 flex flex-col gap-8">
      <div className="p-2  rounded-xl flex items-center justify-center shadow dark:shadow-gray-800  md:mt-10">
        <ContributionGraphGithub />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-1 items-center">
          <SquareChartGantt size={20} color="#48ea69" />
          <p className="font-semibold md:text-xl">Pinned Repository</p>
        </div>
        {/* RepoCard */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-20">
          {TopProjects.map((project) => (
            <RepoCard
              key={project.id}
              title={project.title}
              desc={project.description}
              skills={project.techstack}
              liveLink={project.demoUrl}
              githubLink={project.githubUrl}
            />
          ))}
        </div>
      </div>
        {/* Terminal */}
        <div className="w-full">
          <STerminal />
        </div>
    </div>
  );
};

export default Overview;
