'use client'

import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Group } from '../../models/user';

export const groups: Group[] = [
  { id: 1, name: "7А" },
  { id: 2, name: "8В" },
  { id: 3, name: "5Г" },
  { id: 4, name: "6Б" },
  { id: 5, name: "9А" },
  { id: 6, name: "10Б" },
]


export default function GroupsPage() {

  return (
    <ProtectedRoute>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <section className="w-full flex flex-col justify-center gap-[22px] max-w-screen-xl pt-6">
          <div className="flex flex-col gap-1">
            {groups.map((group, index) => <GroupCard group={group} key={"group-" + index} />)}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}

const GroupCard = ({ group }: { group: Group }) => {
  const router = useRouter()
  return (
    <div
      className="w-full h-[75px] bg-slate-300 flex flex-row justify-between items-center px-8 rounded-md cursor-pointer"
      onClick={() => router.push("/groups/" + group.id)}
    >
      <p className="text-xl">
        {group.name}
      </p>
      <ChevronRight />
    </div>
  )
}