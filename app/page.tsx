"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="grid gap-6 w-full max-w-lg text-center">
        {/* Brand Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/brand-logo.jpg" // <-- replace with your logo path in /public
            alt="Brand Logo"
            width={280}
            height={40}
            className="rounded-sm shadow-md"
            priority
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Connect with Us</h1>
        <p className="text-gray-600 mb-6">
          Find us on social media, locate us, or leave us a review.
        </p>

        {/* Instagram */}
        <Card className="shadow-md hover:shadow-lg transition rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Instagram className="text-pink-500 w-6 h-6" />
              <span className="font-medium">Instagram</span>
            </div>
            <Button asChild variant="outline">
              <Link
                href="https://www.instagram.com/bikanervala_gorakhpur_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Facebook */}
        <Card className="shadow-md hover:shadow-lg transition rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Facebook className="text-blue-600 w-6 h-6" />
              <span className="font-medium">Facebook</span>
            </div>
            <Button asChild variant="outline">
              <Link
                href="https://facebook.com/yourclient"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Google Maps */}
        <Card className="shadow-md hover:shadow-lg transition rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600 w-6 h-6" />
              <span className="font-medium">Find us on Google Maps</span>
            </div>
            <Button asChild variant="outline">
              <Link
                href="https://maps.app.goo.gl/i448fKFvyXWUgNPR7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Google Reviews */}
        <Card className="shadow-md hover:shadow-lg transition rounded-2xl">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Star className="text-yellow-500 w-6 h-6" />
              <span className="font-medium">Leave a Google Review</span>
            </div>
            <Button asChild variant="outline">
              <Link
                href="https://www.google.com/search?client=opera&sa=X&sca_esv=9eff12e450c8c5f1&q=Bikanervala+%7C+Gorakhpur&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6en1Os6jAH9fSjdReHEQm_XKsGnaMPn7OSizNjqnHUAulbbGZ15l5nz4L4UStT0CPfuNeCTh5U9cz950-vEqQvFEJTa5tQ5A8uKWhv2tt3YTZF9PQ%3D%3D&ved=2ahUKEwiA59vm14WQAxVRe_UHHfmpCr0QrrQLegQIRxAA&biw=1918&bih=992&dpr=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Review
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
