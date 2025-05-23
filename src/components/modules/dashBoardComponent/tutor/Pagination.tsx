"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  limit: number;
}

export function Pagination({ totalPages, currentPage, limit }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const updateLimit = (newLimit: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", newLimit);
    params.set("page", "1"); // Reset to first page when limit changes
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          onClick={() => updatePage(currentPage - 1)}
        >
          Previous
        </Button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              onClick={() => updatePage(page)}
            >
              {page}
            </Button>
          );
        })}

        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          onClick={() => updatePage(currentPage + 1)}
        >
          Next
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Items per page:</span>
        <Select onValueChange={updateLimit} defaultValue={limit.toString()}>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Limit" />
          </SelectTrigger>
          <SelectContent>
            {[4, 10, 20].map((val) => (
              <SelectItem key={val} value={val.toString()}>
                {val}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
