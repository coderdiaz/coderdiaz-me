import Image from "next/image";
import { ArrowRight } from "react-feather";

import BaseLayout from "@/layouts/BaseLayout";
import Container from "@/components/Container";
import ThumbnailImage from "@/images/coding-coach/codingcoach-1.png";
import ThumbnailImage2 from "@/images/coding-coach/codingcoach-2.png";
import Expanish from "@/images/expanish.png";
import Neureta from "@/images/neureta.png";

export default function WorkPage() {
  return (
    <>
      <section className="pt-8 md:pt-20">
        <Container className="max-w-screen-lg border-b border-gray-200">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 md:mb-16">Work.</h1>
          <div className="grid md:grid-cols-12 gap-7 mb-14">
            <div className="md:col-span-5 lg:col-span-4 flex flex-col space-y-8">
              <div className="flex flex-col space-y-3">
                <h2 className="font-bold text-3xl text-gray-800">Coding Coach</h2>
                <p className="text-gray-700 md:text-lg">In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                <div className="block md:hidden relative h-48">
                  <Image
                    className="rounded-lg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top left"
                    src={ThumbnailImage} />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold inline-block uppercase text-sm tracking-widest text-rose-600">Technology Stack</span>
                <span className="inline-block">Ruby, Next.js, React, PostgreSQL</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-bold inline-block uppercase text-sm tracking-widest text-rose-600">Project Type</span>
                <span className="inline-block">Web Performance</span>
              </div>
              <a href="#" className="py-5 px-6 flex items-center justify-center space-x-3 font-semibold md:text-lg text-white bg-rose-600 hover:bg-rose-500 rounded-lg">
                <span>Read case study</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden md:grid grid-cols-8 lg:grid-cols-10 gap-3 md:col-span-7 lg:col-span-8">
              <div className="relative col-span-8 lg:col-span-6 row-span-4">
                <Image
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top left"
                  src={ThumbnailImage} />
              </div>
              <div className="relative col-span-4 row-span-2">
                <Image
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                  src={ThumbnailImage2} />
              </div>
              <div className="relative col-span-4 row-span-2">
                <Image
                  className="rounded-lg"
                  layout="fill"
                  objectFit="cover"
                  src={ThumbnailImage2} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container className="max-w-screen-lg">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            <div className="flex flex-col space-y-4">
              <div className="relative h-56 lg:h-72">
                <Image
                  className="rounded-lg"
                  src={Expanish}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Expanish</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="relative h-56 lg:h-72">
                <Image
                  className="rounded-lg"
                  src={Neureta}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top center" />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold md:text-lg lg:text-xl">Neureta</h3>
                <p className="leading-relaxed text-gray-700 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi esse libero officia temporibus, enim saepe aspernatur.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-4 pb-16 md:py-16">
        <Container className="max-w-screen-lg">
          <h2 className="font-bold text-2xl md:text-3xl mb-4 md:mb-8">My latest shots</h2>
          <div className="grid md:grid-cols-12 gap-5">
            <div className="relative md:col-span-7 h-56 md:h-80 lg:h-96">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                src={Expanish} />
            </div>
            <div className="relative md:col-span-5 h-56 md:h-80 lg:h-96">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
                src={Neureta} />
            </div>
            <div className="relative md:col-span-4 h-56 md:h-48 lg:h-60">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
                src={ThumbnailImage} />
            </div>
            <div className="hidden md:block relative md:col-span-4 h-56 md:h-48 lg:h-60">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
                src={ThumbnailImage} />
            </div>
            <div className="hidden md:block relative md:col-span-4 h-56 md:h-48 lg:h-60">
              <Image
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
                objectPosition="top left"
                src={ThumbnailImage} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

WorkPage.getLayout = (page: React.ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  );
}