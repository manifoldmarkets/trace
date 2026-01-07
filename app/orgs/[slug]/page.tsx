import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  Mail,
  DollarSign,
  Users,
  Target,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function OrgPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: org, error } = await supabase
    .from("orgs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !org) {
    notFound();
  }

  const formatCurrency = (amount: number | null) => {
    if (!amount) return "Not specified";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back button */}
        <Link href="/orgs">
          <Button
            variant="ghost"
            className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Logo */}
            {org.logo_url && (
              <div className="flex-shrink-0">
                <img
                  src={org.logo_url}
                  alt={`${org.name} logo`}
                  className="w-24 h-24 lg:w-32 lg:h-32 object-contain rounded-lg bg-white dark:bg-gray-800 p-2 shadow-sm"
                />
              </div>
            )}

            {/* Title and subtitle */}
            <div className="flex-grow">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {org.name}
              </h1>
              {org.subtitle && (
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4">
                  {org.subtitle}
                </p>
              )}

              {/* Tags */}
              {org.tags && org.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {org.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Quick Actions */}
              {/* <div className="flex flex-wrap gap-3 mt-6">
                {org.website && (
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" className="gap-2">
                      <Globe className="h-4 w-4" />
                      Visit Website
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                )}
                {org.donation_url && (
                  <a
                    href={org.donation_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <DollarSign className="h-4 w-4" />
                      Donate
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                )}
                {org.email && (
                  <a href={`mailto:${org.email}`}>
                    <Button variant="outline" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Contact
                    </Button>
                  </a>
                )}
              </div> */}
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Main Content - Single Column */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* About Section */}
          {org.description && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                About
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {org.description}
              </p>
            </div>
          )}

          {/* Key Metrics Section */}
          {(org.headcount || org.target_2026) && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Key Metrics
              </h2>
              <div className="space-y-3">
                {org.headcount && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>Team Size</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {org.headcount} people
                    </span>
                  </div>
                )}
                {org.target_2026 && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Target className="h-4 w-4" />
                      <span>2026 Funding Target</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      {formatCurrency(org.target_2026)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact & Links Section */}
          {(org.website || org.email || org.donation_url || org.budget_url) && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Contact & Links
              </h2>
              <div className="space-y-2">
                {org.website && (
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-gray-500 mt-0.5" />
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      {org.website}
                    </a>
                  </div>
                )}
                {org.email && (
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-gray-500 mt-0.5" />
                    <a
                      href={`mailto:${org.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      {org.email}
                    </a>
                  </div>
                )}
                {org.donation_url && (
                  <div className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500 mt-0.5" />
                    <a
                      href={org.donation_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                    >
                      Donation Page
                    </a>
                  </div>
                )}
                {org.budget_url && (
                  <div className="flex items-start gap-2 mt-4">
                    <a
                      href={org.budget_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="gap-2">
                        View Budget Details
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Metadata Section */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Created</span>
                <span>{new Date(org.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated</span>
                <span>{new Date(org.updated_at).toLocaleDateString()}</span>
              </div>
              {org.id && (
                <div className="flex justify-between">
                  <span>ID</span>
                  <span className="font-mono text-xs truncate max-w-[150px]">
                    {org.id}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
