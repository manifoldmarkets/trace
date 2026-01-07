import { createClient } from "@/lib/supabase/server";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

function formatCurrency(amount: number | null): string {
  if (!amount) return "—";
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  return `$${(amount / 1000).toFixed(0)}K`;
}

export default async function OrgsPage() {
  const supabase = await createClient();

  const { data: orgs, error } = await supabase
    .from("orgs")
    .select("id, slug, name, subtitle, headcount, target_2026, website, tags")
    .order("name");

  if (error) {
    console.error("Error fetching orgs:", error);
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Organizations</h1>
        <p className="text-red-500">
          Error loading organizations. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">AI Safety Organizations</h1>

      <Table>
        <TableCaption>
          A list of AI safety organizations seeking funding
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Organization</TableHead>
            <TableHead>Mission</TableHead>
            <TableHead className="text-center">Team Size</TableHead>
            <TableHead className="text-right">2026 Target</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Website</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orgs?.map((org) => (
            <TableRow key={org.id}>
              <TableCell className="font-medium">{org.name}</TableCell>
              <TableCell className="max-w-md">
                <span className="line-clamp-2 text-sm text-muted-foreground">
                  {org.subtitle || "—"}
                </span>
              </TableCell>
              <TableCell className="text-center">
                {org.headcount ? `~${org.headcount}` : "—"}
              </TableCell>
              <TableCell className="text-right font-mono">
                {formatCurrency(org.target_2026)}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1 max-w-xs">
                  {org.tags?.slice(0, 3).map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                {org.website ? (
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Visit →
                  </a>
                ) : (
                  "—"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
