'use client';

import { addDepartment, deleteDepartment, getDepartments } from '@/lib/actions';
import { Department } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';

export default function DepartmentsPage() {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        getDepartments().then(setDepartments);
    }, []);

    const handleAdd = async () => {
        if (!newName.trim()) return;
        await addDepartment(newName);
        setNewName('');
        // Refresh local list
        getDepartments().then(setDepartments);
    };

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure? This might affect existing users/candidates linked to this department.')) {
            await deleteDepartment(id);
            getDepartments().then(setDepartments);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Manage Departments</h1>
                <p className="text-slate-500">Create, rename, or remove departments.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex gap-2 mb-6">
                    <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="New Department Name (e.g. 'Human Resources')"
                        className="flex-1 p-2 border border-slate-300 rounded"
                        onKeyDown={e => e.key === 'Enter' && handleAdd()}
                    />
                    <button
                        onClick={handleAdd}
                        className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
                    >
                        Create
                    </button>
                </div>

                <ul className="space-y-3">
                    {departments.map((dept) => (
                        <DepartmentItem key={dept.id} dept={dept} onDelete={handleDelete} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function DepartmentItem({ dept, onDelete }: { dept: Department; onDelete: (id: string) => void }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(dept.name);

    const saveEdit = async () => {
        if (!editName.trim()) return;
        await import('@/lib/actions').then(mod => mod.renameDepartment(dept.id, editName));
        setIsEditing(false);
        // We rely on parent re-rendering via router refresh usually, but here we might need manual trigger if not using server components fully.
        // Actually, since this is a client component, we should probably lift state or refresh. 
        // For simplicity, let's just force a reload or use a callback if we had one.
        // But since 'renameDepartment' calls 'revalidatePath', a router.refresh() would be ideal.
        window.location.reload();
    };

    return (
        <li className="flex justify-between items-center p-3 bg-slate-50 rounded border border-slate-100">
            {isEditing ? (
                <div className="flex gap-2 flex-1 mr-4">
                    <input
                        className="flex-1 p-1 border border-blue-300 rounded text-sm"
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                        autoFocus
                    />
                    <button onClick={saveEdit} className="text-xs bg-green-600 text-white px-2 rounded">Save</button>
                    <button onClick={() => setIsEditing(false)} className="text-xs bg-slate-300 px-2 rounded">Cancel</button>
                </div>
            ) : (
                <span className="font-medium text-slate-800">{dept.name}</span>
            )}

            <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400 font-mono">{dept.id}</span>
                <div className="flex gap-2">
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                        </button>
                    )}
                    <button
                        onClick={() => onDelete(dept.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors"
                    >
                        <Trash size={16} />
                    </button>
                </div>
            </div>
        </li>
    );
}
