// components/Partners.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";

const partners: string[] = [
  "UNICEF The International Tourist Fair",
  "The SADEC Business Summit",
  "KICC Women's Conference {Azusa Ministries}",
  "The TAF Charity Fund Raiser",
  "The Ludwigshafen Museum",
  "The African Heritage Banquet",
  "The Cancer Society of Heidelberg",
  "The Red Cross",
  "Jangwani High School",
  "United Nations",
  "Pleasure Ridge Park High School",
  "The Iroquois Public Library",
  "The Gallery Bernard Knuss",
  "The Ms. Black Germany Pageant",
  "The Embassy of Tanzania",
  
 
];

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto  px-6">
      <div className="flex gap-2 ">
        <h2 className="text-gray-500 ">PARTNER</h2>
        <div className="border-b w-20 mb-2 border-orange-500" />
        </div>
        <p className=" text-3xl font-bold mb-8 mt-4">OUR PARTNER</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="shadow-sm border border-gray-200 hover:shadow-md transition rounded-2xl hover:bg-orange-600  hover:text-white"
            >
              <CardContent className="p-4 flex items-center justify-center text-center ">
                <p className="text-gray-700 font-medium text-lg hover:text-white">{partner}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
