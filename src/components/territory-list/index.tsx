"use client";

import { TreeNode } from "@/app/home/page";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui";
import { ChevronsUpDown } from "lucide-react";

interface TreeNodeProps {
  node: TreeNode;
  level: number;
}

const TerritoryList = ({ tree }: { tree: TreeNode[] | string }) => {
  return (
    <div>
      {typeof tree === "string" ? (
        "There was a problem fetching the list"
      ) : (
        <div className="flex flex-col gap-y-2">
          {tree.map((node) => (
            <TreeNodeComponent key={node.id} node={node} level={0} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level }) => {
  const indentStyle = {
    marginLeft: `${level * 20}px`,
  };

  return (
    <Collapsible className="w-[200px] space-y-1">
      <div className="flex items-center justify-between" style={indentStyle}>
        <h4 className="text-sm font-semibold">{node.name}</h4>
        {node.children && node.children.length > 0 && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
        {!node.children ||
          (node.children.length === 0 && (
            <Button variant="ghost" size="sm" className="w-9 p-0 invisible">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          ))}
      </div>
      {node.children && node.children.length > 0 && (
        <CollapsibleContent className="space-y-1">
          {node.children.map((childNode) => (
            <TreeNodeComponent
              key={childNode.id}
              node={childNode}
              level={level + 1}
            />
          ))}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

export default TerritoryList;
