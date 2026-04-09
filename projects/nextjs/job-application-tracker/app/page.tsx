"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("organize"); //organize/hired/boards
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold ">
              A better way to track your job applications
            </h1>
            <p className="text-muted-foreground ">
              Capture manage and organize your job search in one place
            </p>
            <div className="flex-col items-center gap-4">
              <Link href="/sign-up">
                {" "}
                <Button className="h-12 px-8 text-lg font-medium" size="lg">
                  Start for free
                  <ArrowRight />
                </Button>
              </Link>

              <p>Free forever no credit card required</p>
            </div>
          </div>
        </section>
        {/* Hero images section */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  onClick={() => setActiveTab("organize")}
                >
                  Organize Applications
                </Button>
                <Button
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  onClick={() => setActiveTab("hired")}
                >
                  Get Hired
                </Button>
                <Button
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  onClick={() => setActiveTab("boards")}
                >
                  Manage Boards
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && (
                  <Image
                    src="/hero-images/hero1.png"
                    alt="Organize Applications"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "hired" && (
                  <Image
                    src="/hero-images/hero2.png"
                    alt="Organize Applications"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "boards" && (
                  <Image
                    src="/hero-images/hero3.png"
                    alt="Organize Applications"
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
