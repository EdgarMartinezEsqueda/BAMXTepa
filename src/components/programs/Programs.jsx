export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Social Programs</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn more about the social programs we offer to support our community.
              </p>
            </div>
            <div className="grid w-full max-w-4xl gap-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_400px] sm:gap-8 items-center">
                <div className="space-y-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold">Youth Mentorship</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our mentorship program pairs young individuals with experienced professionals to provide guidance,
                    support, and career development opportunities.
                  </p>
                </div>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Program 1"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[400px_1fr] sm:gap-8 items-center">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Program 2"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                />
                <div className="space-y-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold">Community Outreach</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our community outreach initiatives focus on providing essential resources and support to underserved
                    neighborhoods, promoting social equity and inclusion.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_400px] sm:gap-8 items-center">
                <div className="space-y-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold">Elderly Assistance</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our elderly assistance program offers a range of services to support the well-being and independence
                    of older adults in our community.
                  </p>
                </div>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Program 3"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }