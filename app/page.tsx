"use client";
import { Button } from "@arco-design/web-react";
import React from "react";
export default function Page() {
  return (
    <div>
      <section className=" dark:text-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Welcome to
            <br />
            <span className="dark:text-violet-400">QingYun Community</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            {`Welcome to Qingyun Community! We're dedicated to developing
            Minecraft launchers and providing exceptional player service. Join
            us today for the ultimate Minecraft experience!`}
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
