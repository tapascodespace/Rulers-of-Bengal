import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dynasties, getAllRulers, formatYear, getEraColor, getReligionColor, Era, Religion } from "@/data/rulersData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Search, Filter, ArrowUpDown, LayoutGrid, List } from "lucide-react";

type ViewMode = 'table' | 'cards';
type GroupBy = 'none' | 'dynasty' | 'era' | 'religion';
type SortBy = 'name' | 'reignStart' | 'dynasty';
type SortOrder = 'asc' | 'desc';

const TableView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<Era | 'all'>('all');
  const [selectedReligion, setSelectedReligion] = useState<Religion | 'all'>('all');
  const [groupBy, setGroupBy] = useState<GroupBy>('dynasty');
  const [sortBy, setSortBy] = useState<SortBy>('reignStart');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [viewMode, setViewMode] = useState<ViewMode>('table');

  const allRulers = useMemo(() => getAllRulers(), []);

  const filteredRulers = useMemo(() => {
    return allRulers.filter(ruler => {
      const matchesSearch = ruler.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           ruler.dynasty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesEra = selectedEra === 'all' || ruler.era === selectedEra;
      const matchesReligion = selectedReligion === 'all' || ruler.religion === selectedReligion;
      return matchesSearch && matchesEra && matchesReligion;
    });
  }, [allRulers, searchQuery, selectedEra, selectedReligion]);

  const sortedRulers = useMemo(() => {
    return [...filteredRulers].sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'reignStart':
          comparison = a.reignStart - b.reignStart;
          break;
        case 'dynasty':
          comparison = a.dynasty.localeCompare(b.dynasty);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [filteredRulers, sortBy, sortOrder]);

  const groupedData = useMemo(() => {
    if (groupBy === 'none') {
      return { 'All Rulers': sortedRulers };
    }

    return sortedRulers.reduce((acc, ruler) => {
      const key = groupBy === 'dynasty' ? ruler.dynasty : 
                  groupBy === 'era' ? ruler.era : ruler.religion;
      if (!acc[key]) acc[key] = [];
      acc[key].push(ruler);
      return acc;
    }, {} as Record<string, typeof sortedRulers>);
  }, [sortedRulers, groupBy]);

  const toggleSort = (column: SortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const eras: Era[] = ['Ancient', 'Classical', 'Post-Classical', 'Medieval', 'Colonial'];
  const religions: Religion[] = ['Hindu', 'Buddhist', 'Muslim', 'Mixed', 'Unknown'];

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Filters */}
      <div className="parchment rounded-lg p-4 md:p-6 border border-border/50">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search rulers or dynasties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 font-sans"
            />
          </div>

          {/* Era Filter */}
          <Select value={selectedEra} onValueChange={(v) => setSelectedEra(v as Era | 'all')}>
            <SelectTrigger className="w-full md:w-40 font-sans">
              <SelectValue placeholder="Era" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Eras</SelectItem>
              {eras.map(era => (
                <SelectItem key={era} value={era}>{era}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Religion Filter */}
          <Select value={selectedReligion} onValueChange={(v) => setSelectedReligion(v as Religion | 'all')}>
            <SelectTrigger className="w-full md:w-40 font-sans">
              <SelectValue placeholder="Religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Religions</SelectItem>
              {religions.map(religion => (
                <SelectItem key={religion} value={religion}>{religion}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Group By */}
          <Select value={groupBy} onValueChange={(v) => setGroupBy(v as GroupBy)}>
            <SelectTrigger className="w-full md:w-40 font-sans">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Group by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Grouping</SelectItem>
              <SelectItem value="dynasty">By Dynasty</SelectItem>
              <SelectItem value="era">By Era</SelectItem>
              <SelectItem value="religion">By Religion</SelectItem>
            </SelectContent>
          </Select>

          {/* View Toggle */}
          <div className="flex gap-1 border rounded-md p-1">
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="px-3"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'cards' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('cards')}
              className="px-3"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4 font-sans">
          Showing {filteredRulers.length} of {allRulers.length} rulers
        </p>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {viewMode === 'table' ? (
          <motion.div
            key="table"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {Object.entries(groupedData).map(([group, rulers]) => (
              <div key={group} className="parchment rounded-lg border border-border/50 overflow-hidden">
                {groupBy !== 'none' && (
                  <div className="px-6 py-4 bg-secondary/50 border-b border-border/50">
                    <h3 className="font-display text-xl font-semibold">{group}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{rulers.length} rulers</p>
                  </div>
                )}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead 
                          className="cursor-pointer font-sans"
                          onClick={() => toggleSort('name')}
                        >
                          <div className="flex items-center gap-2">
                            Ruler
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer font-sans"
                          onClick={() => toggleSort('dynasty')}
                        >
                          <div className="flex items-center gap-2">
                            Dynasty
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </TableHead>
                        <TableHead 
                          className="cursor-pointer font-sans"
                          onClick={() => toggleSort('reignStart')}
                        >
                          <div className="flex items-center gap-2">
                            Reign
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </TableHead>
                        <TableHead className="font-sans">Era</TableHead>
                        <TableHead className="font-sans">Religion</TableHead>
                        <TableHead className="font-sans hidden lg:table-cell">Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rulers.map((ruler, index) => (
                        <motion.tr
                          key={ruler.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.02 }}
                          className="hover:bg-secondary/30 transition-colors"
                        >
                          <TableCell className="font-display text-lg font-medium">
                            {ruler.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground font-body">
                            {ruler.dynasty}
                          </TableCell>
                          <TableCell className="font-sans text-sm">
                            {formatYear(ruler.reignStart)} — {formatYear(ruler.reignEnd)}
                          </TableCell>
                          <TableCell>
                            <Badge className={cn("text-xs font-sans", getEraColor(ruler.era))}>
                              {ruler.era}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={cn("text-xs font-sans", getReligionColor(ruler.religion))}>
                              {ruler.religion}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground italic hidden lg:table-cell max-w-xs truncate">
                            {ruler.notes || '—'}
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {Object.entries(groupedData).map(([group, rulers]) => (
              <div key={group}>
                {groupBy !== 'none' && (
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-semibold">{group}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{rulers.length} rulers</p>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {rulers.map((ruler, index) => (
                    <motion.div
                      key={ruler.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      className="parchment rounded-lg p-4 border border-border/50 hover-lift"
                    >
                      <h4 className="font-display text-lg font-semibold mb-2">
                        {ruler.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 font-body">
                        {ruler.dynasty}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3 font-sans">
                        {formatYear(ruler.reignStart)} — {formatYear(ruler.reignEnd)}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={cn("text-xs font-sans", getEraColor(ruler.era))}>
                          {ruler.era}
                        </Badge>
                        <Badge className={cn("text-xs font-sans", getReligionColor(ruler.religion))}>
                          {ruler.religion}
                        </Badge>
                      </div>
                      {ruler.notes && (
                        <p className="text-xs text-accent italic mt-3">
                          {ruler.notes}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableView;
