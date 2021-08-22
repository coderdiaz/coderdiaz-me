import Image from "next/image";
import { Twitter, Send, ArrowUpRight } from "react-feather";
import { RoughNotation } from "react-rough-notation";

import Container from "@/components/Container";
import BaseLayout from "@/layouts/BaseLayout";
import Avatar from "@/images/coderdiaz.png";
import Thumbnail from "@/images/thumbnail-video.png";
import ThumbnailWork from "@/images/thumbnail-work.png";

export default function IndexPage() {
  return (
    <>
      <section className="py-5 mb-4 md:mb-6 lg:mb-11">
        <Container className="max-w-screen-lg">
          <div className="mb-3 md:mb-6">
            <Image
              className="rounded-full"
              src={Avatar}
              width={56}
              height={56}
              alt="Avatar of Javier Diaz" />
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight mb-3 md:mb-6">Hey, I'm Javier.</h1>
          <div className="flex flex-col text-gray-800 tracking-wide space-y-1 md:space-y-3 md:mr-24 lg:mr-48 mb-4 md:mb-6">
            <p className="leading-relaxed md:text-lg lg:text-xl">
              A <span className="font-medium text-rose-700">software engineer</span> that designs and teaches based in Mexico City.
            </p>
            <p className="leading-relaxed md:text-lg lg:text-xl">Interested in design systems, <RoughNotation type="highlight" show={true} color="#FFFBEB">jamstack</RoughNotation> and <RoughNotation type="highlight" show={true} color="#ECFDF5">user/dev</RoughNotation> experience. I love making tools that are <RoughNotation type="highlight" show={true} color="#FEF2F2" iterations={1}>user-friendly</RoughNotation>, simple and delightful. I work as Engineering Manager at <span className="font-semibold">Bedu</span> — focusing on improve our ed-tech ecosystem and software delivery. My goal is create fast, simple and accessible web experiences.</p>
            <p className="leading-relaxed md:text-lg lg:text-xl">I am currently available for <RoughNotation type="highlight" show={true} color="#EEF2FF" iterations={1}>freelance</RoughNotation> and contract work.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <a href="#" className="py-5 px-6 flex items-center space-x-3 font-semibold md:text-lg text-white bg-rose-600 hover:bg-rose-500 rounded-lg">
              <Send className="w-5 h-5" />
              <span>Get in touch</span>
            </a>
            <a href="#" className="py-5 px-6 flex items-center space-x-3 font-semibold md:text-lg text-gray-900 bg-gray-100 hover:bg-gray-200 md:bg-transparent md:hover:bg-gray-100 rounded-lg">
              <Twitter className="w-5 h-5" />
              <span>Follow me</span>
            </a>
          </div>
        </Container>
      </section>
      <section className="py-6 md:py-8 lg:py-11">
        <Container className="max-w-screen-lg">
          <div className="flex flex-col space-y-1 mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Videos</h2>
            <p className="md:text-lg leading-relaxed text-gray-500">Videos on what I'm building and learning.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col space-y-4">
              <div className="relative h-48 lg:h-64">
                <Image
                  className="rounded-lg"
                  src={Thumbnail}
                  layout="fill"
                  objectFit="cover" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Design a travel application with Figma</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="relative h-48 lg:h-64">
                <Image
                  className="rounded-lg"
                  src={Thumbnail}
                  layout="fill"
                  objectFit="cover" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Design a travel application with Figma</h3>
                <p className="leading-relaxed text-gray-500 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-11">
        <Container className="max-w-screen-lg">
          <div className="flex flex-col space-y-1 mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Posts</h2>
            <p className="md:text-lg leading-relaxed text-gray-500">Thoughts on what I'm building and learning.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="relative h-48 lg:h-64">
                <Image
                  className="rounded-lg"
                  src={Thumbnail}
                  layout="fill"
                  objectFit="cover" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Design a travel application with Figma</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-7 border-t md:border-t-0 md:border-l border-gray-200 pt-5 md:pt-0 md:pl-8">
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Verifying Your Shopify Webhooks in Next.js APIs</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus...</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Keep Shopify and Your Headless CMS in Sync</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus...</p>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Using Fathom Analytics in Your Next.js App</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus...</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-11">
        <Container className="max-w-screen-lg">
          <div className="flex flex-col space-y-1 mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Work</h2>
            <p className="md:text-lg leading-relaxed text-gray-500">Some things I’ve built, have a look at my work.</p>
          </div>
          <div className="relative">
            <div className="grid  lg:grid-cols-9 gap-5 bg-gray-100 p-8 rounded-lg">
              <div className="lg:col-span-5 flex flex-col space-y-7">
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold text-3xl">Coding Coach</h3>
                  <div className="flex space-x-3">
                    <span className="bg-gray-200 px-3 py-1 rounded-md">next.js</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-md">node</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-md">auth0</span>
                  </div>
                </div>
                <p className="leading-relaxed text-lg text-gray-700">In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                  <a href="#" className="py-5 px-6 flex justify-center md:justify-start items-center space-x-3 font-semibold md:text-lg text-white bg-rose-600 hover:bg-rose-500 rounded-lg">
                    <span>Show case study</span>
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                  <a href="#" className="py-5 px-6 flex justify-center md:justify-start items-center space-x-3 font-semibold md:text-lg text-gray-900 bg-white md:bg-transparent hover:bg-white rounded-lg">
                    <span>Go to Live</span>
                  </a>
                </div>
              </div>
              <div className="hidden md:inline-block lg:col-span-4 relative w-full h-64 md:h-96 lg:h-full">
                <Image
                  className="rounded-lg"
                  src={ThumbnailWork}
                  layout="fill"
                  objectFit="cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

IndexPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  );
}
