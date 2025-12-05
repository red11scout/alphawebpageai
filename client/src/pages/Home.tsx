import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Clock, Database, TrendingUp, AlertTriangle, Shield, Zap, Users, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import DataDistributionChart from "@/components/DataDistributionChart";
import TimeToValueChart from "@/components/TimeToValueChart";
import ParticleBackground from "@/components/ParticleBackground";
import GlowingCard from "@/components/GlowingCard";
import TiltCard from "@/components/TiltCard";
import InteractiveHeader from "@/components/InteractiveHeader";

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Layout>
      {/* Section 1: Hero - "Unlock the 80%" */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.png" 
            alt="Abstract data stream" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
          <ParticleBackground />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-medium text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              AI Use Case Workshop
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Unlock the <span className="text-secondary">80%</span> of Your Data You're Not Using.
            </h1>
            
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
              LLMs and RAG can finally turn your unstructured data—emails, documents, reports—into your most powerful asset. Don't get left behind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 h-14 shadow-lg shadow-secondary/20">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium text-lg px-8 h-14">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Visualization */}
          <div className="hidden lg:flex justify-center items-center animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="relative w-full max-w-md aspect-square">
              <DataDistributionChart />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section 2: The Problem - "Why AI Initiatives Fail" */}
      <section id="problem" className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <InteractiveHeader 
            title="The Hidden Traps That Derail"
            highlight="9 out of 10 AI Projects"
            subtitle="MIT and McKinsey research reveals that most AI initiatives fail not because of technology, but due to strategic missteps."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {[
              {
                icon: <Users className="w-10 h-10 text-destructive" />,
                title: "Lack of Executive Sponsorship",
                desc: "Without top-down support, AI initiatives stall due to resource shortages and misalignment."
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-destructive" />,
                title: "No Discernable ROI",
                desc: "Projects starting with tech instead of business value fail to justify investment."
              },
              {
                icon: <Database className="w-10 h-10 text-destructive" />,
                title: "Too Many Use Cases",
                desc: "Boiling the ocean leads to lack of focus. The ideal starting point is 3 high-impact cases."
              },
              {
                icon: <AlertTriangle className="w-10 h-10 text-destructive" />,
                title: "Stuck in Pilot Phase",
                desc: "Without a clear path to production, promising pilots never deliver real-world value."
              },
              {
                icon: <Users className="w-10 h-10 text-destructive" />,
                title: "Going It Alone",
                desc: "Lacking an experienced partner leads to costly mistakes and slower time-to-value."
              },
              {
                icon: <Clock className="w-10 h-10 text-destructive" />,
                title: "Slow Implementation",
                desc: "Multi-vendor complexity delays value realization by 12-18 months on average."
              }
            ].map((item, i) => (
              <TiltCard key={i} className="h-full">
                <div className="h-full bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-transparent hover:border-l-destructive relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-destructive/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Solution - "Seven-Step Framework" */}
      <section id="solution" className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                The Seven-Step Framework to De-Risk Your AI Investment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've developed a proven methodology to guide you from strategy to execution, ensuring every AI initiative delivers measurable business value.
              </p>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Download the Framework Guide
              </Button>
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Anchor to Strategy",
                    desc: "Define your business drivers and OKRs. We align AI initiatives directly with your organization's strategic goals."
                  },
                  {
                    step: 2,
                    title: "Inventory Functions",
                    desc: "Know where the friction lives. We map your organizational functions to identify high-potential areas for improvement."
                  },
                  {
                    step: 3,
                    title: "Map Pain Points",
                    desc: "Identify delays, errors, rework, and compliance gaps. We pinpoint exactly where value is leaking from your processes."
                  },
                  {
                    step: 4,
                    title: "Match to AI Primitives",
                    desc: "Assign the right capability to each problem. Whether it's generation, summarization, or classification, we fit the tech to the need."
                  },
                  {
                    step: 5,
                    title: "Define KPIs",
                    desc: "Set baselines, targets, and measurement criteria. We establish clear metrics to track success before writing a line of code."
                  },
                  {
                    step: 6,
                    title: "Quantify Impact",
                    desc: "Translate KPI deltas into dollars. We model the financial impact across revenue, cost, cash flow, and risk."
                  },
                  {
                    step: 7,
                    title: "Score and Rank",
                    desc: "Prioritize based on value, time-to-value, effort, and strategic alignment. We ensure you start with the highest-ROI initiatives."
                  }
                ].map((item) => (
                  <div 
                    key={item.step}
                    className={`group relative pl-8 border-l-2 transition-all duration-300 ${activeStep === item.step ? 'border-secondary' : 'border-border'}`}
                    onMouseEnter={() => setActiveStep(item.step)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${activeStep === item.step ? 'bg-secondary border-secondary' : 'bg-background border-muted-foreground'}`}></div>
                    
                    <div className={`p-6 rounded-xl transition-all duration-300 ${activeStep === item.step ? 'bg-white shadow-lg scale-[1.02]' : 'bg-white/50 hover:bg-white'}`}>
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`text-sm font-bold uppercase tracking-wider ${activeStep === item.step ? 'text-secondary' : 'text-muted-foreground'}`}>
                          Step 0{item.step}
                        </span>
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Workshop - Deliverables */}
      <section id="workshop" className="py-24 bg-primary text-white relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The BlueAlly AI Use Case Workshop: <br/>
              <span className="text-secondary">From Idea to Impact</span>
            </h2>
            <p className="text-lg text-blue-100">
              In just a few weeks, we move you from uncertainty to a clear, actionable roadmap. Here's what you walk away with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prioritized Use Case Portfolio",
                desc: "A clear, data-driven list of your top 3-5 AI opportunities ranked by ROI and feasibility."
              },
              {
                title: "Business Value Map",
                desc: "A detailed financial model projecting the ROI, cost savings, and revenue impact for each use case."
              },
              {
                title: "AI Readiness Framework",
                desc: "A comprehensive assessment of your organization's technical, data, and cultural readiness."
              },
              {
                title: "High-Level Solution Architecture",
                desc: "A preliminary technical design for your top-priority use case, ensuring scalability and security."
              },
              {
                title: "Execution Roadmap",
                desc: "A step-by-step plan to move from pilot to production, including timelines and resource requirements."
              },
              {
                title: "Executive Presentation",
                desc: "A board-ready deck summarizing the strategy, value, and plan to secure stakeholder buy-in."
              }
            ].map((item, i) => (
              <GlowingCard key={i} className="p-8 backdrop-blur-sm">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-secondary shadow-[0_0_15px_rgba(2,162,253,0.3)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {item.desc}
                </p>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The BlueAlly Advantage */}
      <section id="results" className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Achieve More, Faster. <br/>
                The Power of a <span className="text-secondary">Single Partner</span>.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fragmented vendor landscapes kill momentum. By partnering with BlueAlly from strategy through execution, you accelerate value realization and reduce risk.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "35%", label: "Fewer Critical Issues", icon: <Shield className="w-5 h-5" /> },
                  { value: "40%", label: "Faster Deployment", icon: <Zap className="w-5 h-5" /> },
                  { value: "70%+", label: "Higher User Adoption", icon: <Users className="w-5 h-5" /> },
                  { value: "30%", label: "Greater Efficiency", icon: <TrendingUp className="w-5 h-5" /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-muted/30 p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-2 text-secondary mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full h-[500px]">
              <TimeToValueChart />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Stop Wondering. <br/>Start Winning with AI.
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Your competitors are already exploring how AI can give them an edge. The BlueAlly AI Use Case Workshop is your opportunity to move from theory to practice.
              </p>
              
              <div className="bg-white rounded-xl p-8 max-w-md mx-auto shadow-xl text-left">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">Schedule Your Workshop</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="name@company.com"
                    />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg h-12">
                    Get Started
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    We'll be in touch within 24 hours to schedule a preliminary call.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
