import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-[#37474f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Healthy, Fresh Dog Food <span className="text-primary">Made Simple</span>
              </h1>
              <p className="text-lg text-white/80">
                Premium nutrition packs tailored to your dog's needs. Made with fresh, human-grade ingredients.
              </p>
              <Link href="/waitlist">
                <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-medium">
                  Join Waitlist
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6"
                alt="Happy Shiba Inu"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#37474f]">
              Why Choose Grublify?
            </h2>
            <p className="text-lg text-[#37474f]/80">
              We're revolutionizing dog nutrition with science-backed, fresh ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Ingredients",
                description: "Human-grade ingredients, carefully sourced and prepared fresh",
                image: "https://images.unsplash.com/photo-1609002186917-6437f7b745a7"
              },
              {
                title: "Customized Nutrition",
                description: "Portions and ingredients tailored to your dog's specific needs",
                image: "https://images.unsplash.com/photo-1534361960057-19889db9621e"
              },
              {
                title: "Convenient Delivery",
                description: "Fresh, perfectly portioned meals delivered right to your door",
                image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#37474f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-primary">
            Your Dog Deserves The Best
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Natural Ingredients",
              "Veterinarian Approved",
              "Personalized Plans",
              "Weekly Delivery"
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-lg font-semibold text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}