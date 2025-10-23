import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-6 mt-6 relative">
      <Image
        src="/images/banner.jpeg"
        alt="hero section"
        width={1920}
        height={700}
        className="object-cover w-full h-64 md:h-full mb-10 rounded-4xl shadow-blue-400/50 shadow-lg"
      />
      <div className="max-w-4xl mx-auto text-center space-y-6 absolute inset-0 flex flex-col justify-center items-center">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Experience the <span className="text-purple-900">comfort</span>{" "}
              and <span className="text-violet-400">style</span>.
            </h1>
            <p className="mt-4 text-lg text-white/70">
              The Nike show is so comfortable, you'll forget you're wearing it.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button size="2xl">Get Started</Button>
              <Button variant="outline" size="2xl">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
