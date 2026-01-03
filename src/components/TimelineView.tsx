import { motion } from "framer-motion";
import { dynasties, formatYear, getEraColor } from "@/data/rulersData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const TimelineView = () => {
  const sortedDynasties = [...dynasties].sort((a, b) => a.startYear - b.startYear);

  return (
    <div className="relative py-8 px-4 md:px-8">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

      <div className="space-y-12">
        {sortedDynasties.map((dynasty, index) => (
          <motion.div
            key={dynasty.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="relative pl-16 md:pl-24"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-10 top-2 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-lg z-10" />
            
            {/* Era marker */}
            <div className="absolute left-3 md:left-7 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-transparent" style={{ height: '100%' }} />

            {/* Dynasty Card */}
            <div className="parchment rounded-lg p-6 hover-lift border border-border/50">
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {dynasty.name}
                </h3>
                <Badge className={cn("text-xs font-sans", getEraColor(dynasty.era))}>
                  {dynasty.era}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-4 font-body">
                {formatYear(dynasty.startYear)} — {formatYear(dynasty.endYear)}
              </p>

              {/* Rulers list */}
              <div className="space-y-3 mt-4">
                {dynasty.rulers.map((ruler, rulerIndex) => (
                  <motion.div
                    key={ruler.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + rulerIndex * 0.02, duration: 0.3 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 px-3 rounded-md bg-background/50 border border-border/30"
                  >
                    <span className="font-display text-lg font-medium text-foreground flex-1">
                      {ruler.name}
                    </span>
                    <span className="text-sm text-muted-foreground font-sans">
                      {formatYear(ruler.reignStart)} — {formatYear(ruler.reignEnd)}
                    </span>
                    {ruler.notes && (
                      <span className="text-xs text-accent italic hidden md:inline">
                        {ruler.notes}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* End marker */}
      <div className="relative pl-16 md:pl-24 mt-8">
        <div className="absolute left-6 md:left-10 top-0 w-4 h-4 rounded-full bg-primary shadow-lg z-10" />
        <p className="font-display text-xl text-muted-foreground italic">
          End of Bengal's Royal History — 1947 CE
        </p>
      </div>
    </div>
  );
};

export default TimelineView;
