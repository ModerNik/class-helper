'use client'

import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { Student } from "@/models/user";
import { useRouter } from "next/navigation";

const student: Student = {
  id: 1,
  email: "email@gmail.com",
  name: "Устимов Герасим",
  phoneNumber: "+7 (213)123-12-23",
  parentPhoneNumber: "+7 (213)123-12-23",
  class: "13Ж",
}


export default function StudentPage({ params }: { params: { id: string } }) {

  return (
    <ProtectedRoute>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <section className="w-full flex flex-col justify-center items-center gap-[22px] max-w-screen-xl pt-6">
          <p className="text-3xl font-medium">
            {student.name}
          </p>
          <div>
            <p className="">
              Номер ученика: {student.phoneNumber}
            </p>
            <p className="">
              Номер родителя: {student.parentPhoneNumber}
            </p>
          </div>
          <div className="rounded-full bg-green-400 size-20 flex justify-center items-center text-xl">
            4,5
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}