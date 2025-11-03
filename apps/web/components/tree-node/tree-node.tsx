import { NodeType, TreeNodeProps } from "@/lib/type";
const TreeNode: React.FC<TreeNodeProps> = ({ node, onUpdate, onDelete }) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...node, value: e.target.value });
  };

  const toggleReadonly = () => {
    onUpdate({ ...node, readonly: !node.readonly });
  };

  const addChild = () => {
    const newChild: NodeType = {
      id: Date.now().toString(),
      value: "",
      readonly: false,
      children: [],
    };
    onUpdate({ ...node, children: [...node.children, newChild] });
  };

  const updateChild = (childIndex: number, updatedChild: NodeType) => {
    const updatedChildren = [...node.children];
    updatedChildren[childIndex] = updatedChild;
    onUpdate({ ...node, children: updatedChildren });
  };

  const deleteChild = (childId: string) => {
    const filtered = node.children.filter((child) => child.id !== childId);
    onUpdate({ ...node, children: filtered });
  };

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <input
        type="text"
        value={node.value}
        onChange={handleValueChange}
        readOnly={node.readonly}
        className={`p-2 border mr-2 ${node.readonly ? "bg-gray-100" : "bg-white"}`}
        disabled={node.readonly}
      />
      <label>
        <input
          type="checkbox"
          checked={node.readonly}
          onChange={toggleReadonly}
        />
        Readonly
      </label>
      <button onClick={() => onDelete(node.id)}>🗑️</button>
      <button onClick={addChild}>➕</button>

      {node.children.map((child, index) => (
        <TreeNode
          key={child.id}
          node={child}
          onUpdate={(updatedChild) => updateChild(index, updatedChild)}
          onDelete={deleteChild}
        />
      ))}
    </div>
  );
};

export default TreeNode;
