import { Award, Star, Building2 } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

const agents = [
  {
    name: "Sarah Mitchell",
    title: "Lead Broker & Owner",
    image: agent1,
    credentials: ["Licensed NC Broker", "Certified Luxury Home Specialist", "NAR Member"],
    bio: "With over 15 years of experience in Charlotte real estate, Sarah has helped hundreds of families find their perfect home. Her deep knowledge of local neighborhoods and commitment to client success has earned her recognition as a top producer year after year.",
  },
  {
    name: "David Chen",
    title: "Senior Buyer's Agent",
    image: agent2,
    credentials: ["Licensed NC Broker", "Accredited Buyer Representative", "Relocation Specialist"],
    bio: "David specializes in helping first-time buyers and relocating families navigate the Charlotte market. His patient approach and attention to detail ensure every client feels confident and informed throughout their home buying journey.",
  },
];

const awards = [
  "Top 1% of Charlotte Agents",
  "Charlotte Magazine Five Star Agent (2019-2024)",
  "CRRA Circle of Excellence",
];

const TeamBio = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Meet Your Team
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experienced Agents, Exceptional Results
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team combines local expertise with personalized service to deliver 
            outstanding results for every client.
          </p>
        </div>

        {/* Agents */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {agents.map((agent) => (
            <div key={agent.name} className="flex flex-col sm:flex-row gap-6 bg-card rounded-xl p-6 lg:p-8 border border-border">
              <div className="flex-shrink-0">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-32 h-40 sm:w-40 sm:h-52 object-cover rounded-lg mx-auto sm:mx-0"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-foreground">{agent.name}</h3>
                <p className="text-accent font-medium mb-3">{agent.title}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{agent.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brokerage & Awards */}
        <div className="bg-secondary rounded-xl p-8 lg:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brokerage */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">Our Brokerage</h4>
              </div>
              <p className="text-muted-foreground">
                Premier Home Realty is a locally-owned, independent brokerage serving the 
                Charlotte metro area since 2009. We pride ourselves on putting clients first 
                and delivering results that exceed expectations.
              </p>
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">Recognition</h4>
              </div>
              <ul className="space-y-2">
                {awards.map((award) => (
                  <li key={award} className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 text-gold flex-shrink-0" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBio;
