import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, BookOpen, Crown, Calendar, Star, ChevronRight, BookMarked } from "lucide-react";
import { dynasties, getAllRulers, getEraColor, getReligionColor, formatYear, Ruler } from "@/data/rulersData";
import { rulerDetails, getDefaultDetail, RulerDetail } from "@/data/rulerDetails";

const RulerDetailsView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRuler, setSelectedRuler] = useState<Ruler | null>(null);
  
  const allRulers = getAllRulers().sort((a, b) => a.reignStart - b.reignStart);
  
  const filteredRulers = allRulers.filter((ruler) =>
    ruler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ruler.dynasty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRulerDetail = (rulerId: string, rulerName: string): RulerDetail => {
    return rulerDetails[rulerId] || getDefaultDetail(rulerName);
  };

  const detail = selectedRuler 
    ? getRulerDetail(selectedRuler.id, selectedRuler.name) 
    : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-400px)]">
      {/* Ruler List */}
      <div className="lg:col-span-1 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search rulers or dynasties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-secondary/30 border-border/50 font-sans"
          />
        </div>
        
        <ScrollArea className="h-[calc(100vh-500px)] custom-scrollbar">
          <div className="space-y-2 pr-4">
            {filteredRulers.map((ruler, index) => (
              <motion.div
                key={ruler.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                    selectedRuler?.id === ruler.id 
                      ? "border-primary bg-primary/5 shadow-md" 
                      : "border-border/50 hover:border-primary/50 bg-card/50"
                  }`}
                  onClick={() => setSelectedRuler(ruler)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Crown className="h-4 w-4 text-primary shrink-0" />
                          <h3 className="font-display text-sm font-semibold text-foreground truncate">
                            {ruler.name}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground font-sans mt-1 truncate">
                          {ruler.dynasty}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className={`text-xs ${getEraColor(ruler.era)}`}>
                            {ruler.era}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatYear(ruler.reignStart)} - {formatYear(ruler.reignEnd)}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${
                        selectedRuler?.id === ruler.id ? "rotate-90 text-primary" : ""
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Ruler Details */}
      <div className="lg:col-span-2">
        <AnimatePresence mode="wait">
          {selectedRuler && detail ? (
            <motion.div
              key={selectedRuler.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Crown className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-display text-2xl text-foreground">
                            {selectedRuler.name}
                          </CardTitle>
                          <p className="text-muted-foreground font-sans">
                            {selectedRuler.dynasty}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getEraColor(selectedRuler.era)}>
                        {selectedRuler.era}
                      </Badge>
                      <Badge className={getReligionColor(selectedRuler.religion)}>
                        {selectedRuler.religion}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span className="font-sans">
                        Reign: {formatYear(selectedRuler.reignStart)} - {formatYear(selectedRuler.reignEnd)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans">
                        Duration: {Math.abs(selectedRuler.reignEnd - selectedRuler.reignStart)} years
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <Separator className="mx-6" />
                
                <ScrollArea className="h-[calc(100vh-620px)]">
                  <CardContent className="pt-6 space-y-6">
                    {/* Biography */}
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Biography
                      </h4>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {detail.biography}
                      </p>
                    </div>

                    {/* Achievements */}
                    {detail.achievements && detail.achievements.length > 0 && (
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {detail.achievements.map((achievement, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-muted-foreground font-body">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Sources */}
                    {detail.sources && detail.sources.length > 0 && (
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                          Historical Sources
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {detail.sources.map((source, index) => (
                            <Badge key={index} variant="secondary" className="font-sans">
                              {source}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Suggested Reading */}
                    {detail.suggestedReading && (
                      <div className="bg-secondary/30 rounded-lg p-4 border border-border/50">
                        <h4 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BookMarked className="h-5 w-5 text-primary" />
                          Suggested Reading
                        </h4>
                        <p className="text-muted-foreground font-body italic">
                          "{detail.suggestedReading}"
                        </p>
                      </div>
                    )}

                    {/* Notes from data */}
                    {selectedRuler.notes && (
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                          Historical Note
                        </h4>
                        <p className="text-sm text-muted-foreground font-body">
                          {selectedRuler.notes}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </ScrollArea>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center"
            >
              <Card className="border-border/50 bg-card/50 p-12 text-center">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Crown className="h-12 w-12 text-primary/50" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  Select a Ruler
                </h3>
                <p className="text-muted-foreground font-sans max-w-sm">
                  Click on any ruler from the list to view detailed information about their reign, achievements, and historical significance.
                </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RulerDetailsView;
