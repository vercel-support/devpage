import {
  CogIcon,
  DeviceMobileIcon,
  LightBulbIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Fast",
    icon: LightningBoltIcon,
    text: "Slow websites are annoying for users. That's why I make sure load times are low and interactions happen lag-free.",
  },
  {
    name: "Maintainable",
    icon: CogIcon,
    text: "Development using best practices and solid testing means less bugs and lower maintenance costs for you.",
  },
  {
    name: "Responsive",
    icon: DeviceMobileIcon,
    text: "Your users may use both desktop and mobile devices, so the website should look good on both.",
  },
  {
    name: "Intuitive",
    icon: LightBulbIcon,
    text: "Intuitive and easy to use applications will increase user satisfaction and reduce support effort.",
  },
];

export default function Features() {
  return (
    <div className="relative bg-white dark:bg-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2
          id="about"
          className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
          What you can expect from your project
        </h2>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-300">
          My focus is developing high-quality, easily maintainable applications.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-4 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
