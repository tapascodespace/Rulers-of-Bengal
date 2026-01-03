import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import TimelineView from "@/components/TimelineView";
import TableView from "@/components/TableView";
import { Clock, TableIcon, Crown, MapPin } from "lucide-react";
import { dynasties, getAllRulers } from "@/data/rulersData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("timeline");
  const totalRulers = getAllRulers().length;
  const totalDynasties = dynasties.length;

  // Calculate time span
  const earliestYear = Math.min(...dynasties.map(d => d.startYear));
  const latestYear = Math.max(...dynasties.map(d => d.endYear));
  const timeSpan = latestYear - earliestYear;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyIC44IDIgMnYyMGMwIDEuMi0uOCAyLTIgMkgxOGMtMS4yIDAtMi0uOC0yLTJWMjBjMC0xLjIuOC0yIDItMmgxOHptMCAySDIwdjIwaDE2VjIweiIgZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container relative py-12 md:py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Crown className="h-4 w-4" />
              <span className="text-sm font-sans font-medium">Historical Archive</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
              Rulers of <span className="text-gradient">Bengal</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive chronicle of the kings, emperors, and sultans who shaped the history of Bengal 
              from ancient times to the colonial era.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12"
            >
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{totalRulers}+</p>
                <p className="text-sm text-muted-foreground font-sans">Rulers</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{totalDynasties}</p>
                <p className="text-sm text-muted-foreground font-sans">Dynasties</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{timeSpan}+</p>
                <p className="text-sm text-muted-foreground font-sans">Years of History</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground font-sans">Eras</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8 bg-secondary/50 p-1">
            <TabsTrigger 
              value="timeline" 
              className="font-sans data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger 
              value="table" 
              className="font-sans data-[state=active]:bg-background data-[state=active]:shadow-sm flex items-center gap-2"
            >
              <TableIcon className="h-4 w-4" />
              Explorer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="animate-fade-in">
            <ScrollArea className="h-[calc(100vh-400px)] custom-scrollbar">
              <TimelineView />
            </ScrollArea>
          </TabsContent>

          <TabsContent value="table" className="animate-fade-in">
            <TableView />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-12">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span className="font-sans text-sm">Bengal Region • Indian Subcontinent</span>
          </div>
          <p className="text-sm text-muted-foreground font-sans">
            Data sourced from historical records and Wikipedia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
