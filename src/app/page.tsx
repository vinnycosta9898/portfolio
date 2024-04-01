'use client'

import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { TypeWriterName } from "@/components/TypeWritterName";

export default function Home() {
  return (
    <div className="min-w-wscreen min-h-screen bg-blue flex flex-col items-center">
      <Header/>
      <Avatar/>
      <TypeWriterName/>
    </div>
  );
}
