import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const BreadcrumbProduct = ({ title }: { title: string }) => {
  return (
    <Breadcrumb className="mb-5 sm:mb-9 text-gray-600">
      <BreadcrumbList className="flex items-center space-x-2 text-sm sm:text-base">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400 mx-1 sm:mx-2">
          /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Shop
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400 mx-1 sm:mx-2">
          /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-gray-800 font-semibold">
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbProduct;
