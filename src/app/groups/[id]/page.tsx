'use client'

import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { Group, Student } from "@/models/user";
import { useRouter } from "next/navigation";
import { groups } from "../page";

const groupStudents: Student[] = [
  {
    id: 1,
    email: "email@gmail.com",
    name: "Устимов Герасим",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 2,
    email: "email@gmail.com",
    name: "Устимов Герасим",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 3,
    email: "email@gmail.com",
    name: "Устимов Герасим",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 4,
    email: "email@gmail.com",
    name: "Устимов Герасим",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 5,
    email: "email@gmail.com",
    name: "Устимов Герасим",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
]


export default function GroupsPage({ params }: { params: { id: number } }) {

  return (
    <ProtectedRoute>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <section className="w-full flex flex-col justify-center gap-[22px] max-w-screen-xl pt-6">
          <h2 className="text-2xl text-start">{groups.find((group) => {return group.id == params.id})?.name}</h2>
          <div className="flex flex-col gap-1">
            {groupStudents.map((student, index) => <StudentCard student={student} key={"groupStudent-" + index} />)}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}

const StudentCard = ({ student }: { student: Student }) => {
  const router = useRouter()
  return (
    <div
      className="w-full h-[75px] bg-slate-300 flex flex-row justify-between items-center px-8 rounded-md cursor-pointer"
      onClick={() => router.push("/student/" + student.id)}
    >
      <p className="text-xl">
        {student.name}
      </p>
      <ChevronRight />
    </div>
  )
}