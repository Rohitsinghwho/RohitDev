import React from "react";
import { SquareChartGantt } from "lucide-react";
import { FolderGit } from 'lucide-react';

const RepoCard = ({
    title='nova desgins ltd',
    desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sed praesentium ipsa fugiat ad consectetur non natus eaque, perspiciatis repellat.',
    skills=[
        {
            'text':'figma',
            'color':'blue',
        },
        {
            'text':'JavaScript',
            'color':'purple'
        }
    ]}
) => {
  return (
    <div className="py-3 px-2 shadow shadow-olive-300 rounded-xl flex flex-col gap-2 cursor-pointer">
      <div className="flex  items-center justify-between">
        <div className="flex gap-1 items-center">
        <FolderGit size={15}/>
        <h4>{title}</h4>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className=" cursor-pointer px-2 outline w-fit h-fit text-sm rounded-3xl border border-[#48ea69]">
            <p className="text-gray-600">{"Public"}</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        {desc}
      </p>
      <div className="flex gap-2">
      {skills.map(({text,color})=>(
      <div className="flex gap-1 items-center">
         <div className={`w-3 h-3 rounded-full border border-slate-200 shadow-sm ${
                color === 'blue' ? 'bg-blue-500' : 
                color === 'purple' ? 'bg-purple-500' : 
                color === 'green' ? 'bg-emerald-500' : 
                'bg-slate-400'
              }`}></div>
         <p className="text-xs text-gray-500">{text}</p>
      </div>
      ))}
      </div>

    </div>
  );
};

export default RepoCard;
